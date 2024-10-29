import express, { Express } from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config({path: resolve(__dirname, '..', '.env')});

import AppConfig from './src/config/AppConfig';
import { AppDataSource } from './src/config/TypeORM/DataSource';
import logger from './src/config/PinoLogger';

AppDataSource.initialize()
  .then(() => {
    logger.info({
      message: `[APP]: DataSource has been initialized !!`,
    });

    const app: Express = express();
    app.use(express.json());
    const PORT = process.env.PORT || 5000;

    AppConfig(app);

    app.listen(PORT, () => {
      logger.info({
        message: `[APP]: Running at http://localhost:${PORT}`,
      })
    })
  })
  .catch((error) => {
    logger.error({
      error,
      message: '[APP]: Error during DataSource initialization',
    });
  });
