import { Express } from 'express';
import cors from 'cors';
import routes from '../routes/AspectRoutes';


const AppConfig = (app: Express) => {

  app.use(cors());

  app.use(routes);

}

export default AppConfig;