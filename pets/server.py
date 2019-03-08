"""
Pets Microservice
"""
from concurrent import futures

import grpc

import pets_pb2 as p
import pets_pb2_grpc as p_grpc

class Pets(p_grpc.PetsServicer):
    """docstring"""

    def __init__(self):
        self.pet_list = {
            1: [{"name": "Milu"}, 
                {"name": "Bali"}],
            2: [{"name": "Doge"}, 
                {"name": "Such Doge"}]
        }
    
    def get_pets(self, request, context):
        pets = [i['name'] for i in self.pet_list[request.user_id]]
        message = "Your pets: " + ", ".join(pets)
        return p.pets_reply(pets=pets, pets_message=message)
        

def serve():
    """docstring."""
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    p_grpc.add_PetsServicer_to_server(Pets(), server)
    server.add_insecure_port('[::]:50051')
    server.start()

    try:
        while True:
            pass
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == "__main__":
    serve()
