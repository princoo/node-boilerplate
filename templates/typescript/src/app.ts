import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import corsOptions from './config/cors';
import router from './routes';
import errorHandler from './middleware/errorHandler';

const app: Express = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use('/api', router);
app.use(errorHandler);

const appPort = process.env.PORT || 3000;
app.listen(appPort, () => {
  console.log(`Server running at http://localhost:${appPort}`);
});
