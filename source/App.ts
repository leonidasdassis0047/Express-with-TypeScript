import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import mongoose from 'mongoose';

import { IController } from './utils/interfaces';

export default class Application {
  private expressApp: express.Application = express();

  constructor(private port: number, private controllers: IController[]) {
    this.initializeDatabaseConnection();
    this.initializeAppMiddlewares();
    this.initializeControllers();
  }

  public startAppListening(): void {
    this.expressApp.listen(this.port, () => console.log('server running'));
  }

  private initializeAppMiddlewares(): void {
    this.expressApp.use(helmet());
    this.expressApp.use(compression());
    this.expressApp.use(cors());
    this.expressApp.use(morgan('common'));
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({ extended: true }));
  }

  private initializeDatabaseConnection(): void {
    const { DATABASE_URI, DATABASE_NAME } = process.env;
    mongoose
      .connect(DATABASE_URI as string, { dbName: DATABASE_NAME as string })
      .then((conn) => console.log(conn.connection.db.databaseName, 'DB'))
      .catch((error: any) => console.error(error.message));
  }

  private initializeControllers(): void {
    this.controllers.forEach((controller) => {
      this.expressApp.use('/api/v1', controller.router);
    });
  }
}
