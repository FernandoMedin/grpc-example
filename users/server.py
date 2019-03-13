"""
Users Microservice
"""
from concurrent import futures

import grpc
import os

import users_pb2 as u
import users_pb2_grpc as u_grpc
import pets_pb2 as p
import pets_pb2_grpc as p_grpc

class Users(u_grpc.UsersServicer):
    """docstring"""
    
    def __init__(self):
        self.users = {
            1: {"name": "Fernando", "email": "fernando@doghero"},
            2: {"name": "Leo", "email": "leo@doghero"},
            3: {"name": "Tech", "email": "tech@doghero"}
        }
    
    def GetUser(self, request, context):
        user = self.users[request.user_id]
        
        return u.UserReply(
            user_name=user['name'],
            user_email=user['email']
        )

    def GetUserPets(self, request, context):
        with grpc.insecure_channel(os.environ['PETS_SERVICE']) as channel:
            stub = p_grpc.PetsStub(channel)
            response = stub.GetPets(p.PetsRequest(user_id=request.user_id))

        return u.UsersPetsReply(pets=pets)


def serve():
    """docstring."""
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    u_grpc.add_UsersServicer_to_server(Users(), server)
    server.add_insecure_port('[::]:50051')
    server.start()

    try:
        while True:
            pass
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == "__main__":
    serve()
