import { Express } from 'express';
import cors from 'cors';
import { AspectRoutes } from '../routes';

const AppConfig = (app: Express) => {

  app.use(cors());

  app.use(AspectRoutes);

}

export default AppConfig;