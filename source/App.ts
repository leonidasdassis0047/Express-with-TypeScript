import express from 'express';

export default class Application {
  private expressApp: express.Application = express();

  constructor(private port: number) {}

  public startAppListening(): void {
    this.expressApp.listen(this.port, () => console.log('server running'));
  }
}
