// package: pets
// file: pets.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as pets_pb from "./pets_pb";

interface IPetsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPets: IPetsService_IGetPets;
}

interface IPetsService_IGetPets extends grpc.MethodDefinition<pets_pb.PetsRequest, pets_pb.PetsReply> {
    path: string; // "/pets.Pets/GetPets"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<pets_pb.PetsRequest>;
    requestDeserialize: grpc.deserialize<pets_pb.PetsRequest>;
    responseSerialize: grpc.serialize<pets_pb.PetsReply>;
    responseDeserialize: grpc.deserialize<pets_pb.PetsReply>;
}

export const PetsService: IPetsService;

export interface IPetsServer {
    getPets: grpc.handleUnaryCall<pets_pb.PetsRequest, pets_pb.PetsReply>;
}

export interface IPetsClient {
    getPets(request: pets_pb.PetsRequest, callback: (error: grpc.ServiceError | null, response: pets_pb.PetsReply) => void): grpc.ClientUnaryCall;
    getPets(request: pets_pb.PetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pets_pb.PetsReply) => void): grpc.ClientUnaryCall;
    getPets(request: pets_pb.PetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pets_pb.PetsReply) => void): grpc.ClientUnaryCall;
}

export class PetsClient extends grpc.Client implements IPetsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPets(request: pets_pb.PetsRequest, callback: (error: grpc.ServiceError | null, response: pets_pb.PetsReply) => void): grpc.ClientUnaryCall;
    public getPets(request: pets_pb.PetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pets_pb.PetsReply) => void): grpc.ClientUnaryCall;
    public getPets(request: pets_pb.PetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pets_pb.PetsReply) => void): grpc.ClientUnaryCall;
}
