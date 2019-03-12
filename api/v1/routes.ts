import * as express from 'express';
import { router as pets } from './routes/pets';
import { router as breeds } from './routes/breeds';

export const routes = {
  '/pets': pets,
  '/breeds': breeds
}
