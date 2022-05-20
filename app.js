import express from 'express';
import logRoutes from './src/routes/log';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(
      express.urlencoded({ extended: true }),
      express.json()
    );
  }

  routes() {
    this.app.use('/log', logRoutes);
  }
}

export default new App().app;
