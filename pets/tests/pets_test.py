import grpc
import os
import sys

sys.path.append("..")

import pets_pb2 as p
import pets_pb2_grpc as p_grpc

def test_get_pets():
    with grpc.insecure_channel(os.environ['PETS_HOST']) as channel:
        stub = p_grpc.PetsStub(channel)
        response = stub.GetPets(p.PetsRequest(user_id=1))
        assert response.pets_message.lower() == "your pets: milu, bali"

if __name__ == "__main__":
    test_get_pets()
