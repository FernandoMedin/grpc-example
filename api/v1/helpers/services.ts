import { PetsClient } from '../../protos/pets_grpc_pb';
import *  as grpc from 'grpc';

const petsUrl = process.env['PETS_SERVICE'] || 'localhost:50051';
const insecure = grpc.credentials.createInsecure();
let services = {
  pets: new PetsClient(petsUrl, insecure)
};

export default services;
