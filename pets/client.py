import grpc

import pets_pb2 as p
import pets_pb2_grpc as p_grpc

def run():
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = p_grpc.PetsStub(channel)
        response = stub.get_pets(p.pets_request(user_id=1))
    print(response.message)
    
if __name__ == "__main__":
    run()
