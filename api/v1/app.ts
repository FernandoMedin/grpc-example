import * as express from 'express';
import { routes } from './routes';

const PORT = 4100;

let app = express();
app.use(express.json());

const configureRoutes = (app: express.Application, routes: any) => {
  for(var path in routes) {
    app.use(path, routes[path]);
  }
}

configureRoutes(app, routes);

// error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: {
      name: err.name,
      message: err.message,
      data: err.data,
    },
  });
});

export default app;
