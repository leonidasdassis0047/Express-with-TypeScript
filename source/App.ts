import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';

export default class Application {
  private expressApp: express.Application = express();

  constructor(private port: number) {
    this.initializeAppMiddlewares();
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
}
