import 'reflect-metadata';
import { createExpressServer, useContainer as routingUseContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { createConnection, Connection, useContainer as ormUseContainer } from 'typeorm';

import * as compression from 'compression';

/**
 * Setup routing-controllers to use typedi container.
 */
ormUseContainer(Container);
routingUseContainer(Container);

// createConnection method will automatically read connection options from your ormconfig file
createConnection().then((connection: Connection) => {

  /**
   * We create a new express server instance.
   * We could have also use useExpressServer here to attach controllers to an existing express instance.
   */
  const expressApp = createExpressServer({
    /**
     * We can add options about how routing-controllers should configure itself.
     * Here we specify what controllers should be registered in our express server.
     */
    controllers: [__dirname + '/controllers/*.controller.ts'],
  });

  expressApp.use(compression());
  /**
   * Start the express app.
   */
  expressApp.listen(3000);

  console.log('Server is up and running at port 3000');
}).catch(error => console.log('Error: ', error));
