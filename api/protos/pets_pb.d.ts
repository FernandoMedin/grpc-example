// package: pets
// file: pets.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class PetsRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): void;

    getPetId(): number;
    setPetId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PetsRequest): PetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PetsRequest;
    static deserializeBinaryFromReader(message: PetsRequest, reader: jspb.BinaryReader): PetsRequest;
}

export namespace PetsRequest {
    export type AsObject = {
        userId: number,
        petId: number,
    }
}

export class PetsReply extends jspb.Message { 
    getPetsMessage(): string;
    setPetsMessage(value: string): void;

    getError(): string;
    setError(value: string): void;

    clearPetsList(): void;
    getPetsList(): Array<string>;
    setPetsList(value: Array<string>): void;
    addPets(value: string, index?: number): string;

    getPetName(): string;
    setPetName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PetsReply.AsObject;
    static toObject(includeInstance: boolean, msg: PetsReply): PetsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PetsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PetsReply;
    static deserializeBinaryFromReader(message: PetsReply, reader: jspb.BinaryReader): PetsReply;
}

export namespace PetsReply {
    export type AsObject = {
        petsMessage: string,
        error: string,
        petsList: Array<string>,
        petName: string,
    }
}
