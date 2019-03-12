import { Router, Request, Response, NextFunction, Express } from 'express';
import { parse } from '../helpers/pagination';
import { PetsReply } from '../../protos/pets_pb';

export const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  let pagination = parse(req.body);
  let reply = new PetsReply();
});
