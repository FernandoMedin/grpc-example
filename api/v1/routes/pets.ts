import { Router, Request, Response, NextFunction } from 'express';
import { PetsReply, PetsRequest } from '../../protos/pets_pb';

import { parse } from '../helpers/pagination';
import validate from '../helpers/validate';
import services from '../helpers/services';

export const router = Router();

router.get('/', validate, (req, res, next) => {
  let request = new PetsRequest();
  services.pets.getPets(request, (err, reply) => {
    if(err) throw "Error";
    res.send(reply.toObject());
  })
});

router.post('/', validate, (req, res, next) => {

});

router.get('/:id', validate, (req, res, next) => {
  res.send({get: 'id'});
});

router.put('/:id', validate, (req, res, next) => {
  res.send({put: 'id'});
});

router.put('/:id/upload', validate, (req, res, next) => {

});

router.delete('/:id', validate, (req, res, next) => {

});
