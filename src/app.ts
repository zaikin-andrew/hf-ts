import * as compression from 'compression';
import 'reflect-metadata';
import { Action, createExpressServer, useContainer as routingUseContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { Connection, createConnection, useContainer as ormUseContainer } from 'typeorm';
import { authorizationChecker, setUpPassport } from './controllers';

/**
 * Setup routing-controllers to use typedi container.
 */
ormUseContainer(Container);
routingUseContainer(Container);

// createConnection method will automatically read connection options from your ormconfig file
createConnection().then((connection: Connection) => {

  const expressApp = createExpressServer({
    authorizationChecker,
    currentUserChecker: (action: Action) => action.request.user,
    routePrefix: '/v2',
    controllers: [__dirname + '/controllers/*.controller.ts'],
  });

  expressApp.use(compression());
  setUpPassport();

  expressApp.listen(3000);

  console.log('Server is up and running at port 3000');
}).catch(error => console.log('Error: ', error));