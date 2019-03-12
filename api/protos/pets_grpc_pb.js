// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pets_pb = require('./pets_pb.js');

function serialize_pets_PetsReply(arg) {
  if (!(arg instanceof pets_pb.PetsReply)) {
    throw new Error('Expected argument of type pets.PetsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pets_PetsReply(buffer_arg) {
  return pets_pb.PetsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pets_PetsRequest(arg) {
  if (!(arg instanceof pets_pb.PetsRequest)) {
    throw new Error('Expected argument of type pets.PetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pets_PetsRequest(buffer_arg) {
  return pets_pb.PetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PetsService = exports.PetsService = {
  getPets: {
    path: '/pets.Pets/GetPets',
    requestStream: false,
    responseStream: false,
    requestType: pets_pb.PetsRequest,
    responseType: pets_pb.PetsReply,
    requestSerialize: serialize_pets_PetsRequest,
    requestDeserialize: deserialize_pets_PetsRequest,
    responseSerialize: serialize_pets_PetsReply,
    responseDeserialize: deserialize_pets_PetsReply,
  },
};

exports.PetsClient = grpc.makeGenericClientConstructor(PetsService);
