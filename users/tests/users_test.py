import grpc
import os
import sys

sys.path.append("..")

import users_pb2 as u
import users_pb2_grpc as u_grpc

def test_get_pets():
    with grpc.insecure_channel(os.environ['USERS_SERVICE']) as channel:
        stub = u_grpc.UsersStub(channel)
        response = stub.GetUser(u.UserRequest(user_id=1))
        print(response)

if __name__ == "__main__":
    test_get_pets()
