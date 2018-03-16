import * as compression from 'compression';
import * as passport from 'passport';
import 'reflect-metadata';
import { Action, createExpressServer, useContainer as routingUseContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { Connection, createConnection, useContainer as ormUseContainer } from 'typeorm';
import { setUpPassport } from './controllers';

/**
 * Setup routing-controllers to use typedi container.
 */
ormUseContainer(Container);
routingUseContainer(Container);

// createConnection method will automatically read connection options from your ormconfig file
createConnection().then((connection: Connection) => {

  const expressApp = createExpressServer({
    authorizationChecker: (action: Action, roles: string[]) => {
      return new Promise((resolve, reject) => {
        passport.authenticate('jwt', (error, user, info) => {
          if (error || !user) return reject(error);
          action.request.user = user;
          resolve(true);
        })(action.request, action.response, action.next);
      })
    },
    currentUserChecker: (action: Action) => action.request.user,
    controllers: [__dirname + '/controllers/*.controller.ts'],
  });

  expressApp.use(compression());
  setUpPassport();
  /**
   * Start the express app.
   */
  expressApp.listen(3000);

  console.log('Server is up and running at port 3000');
}).catch(error => console.log('Error: ', error));
