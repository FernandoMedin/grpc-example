var express = require("express");
var app = express();

// Protos
var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
var PROTOS_PATH = "../protos";

// pets
var pets = PROTOS_PATH + "/pets.proto";
var petsPackageDefinition = protoLoader.loadSync(
	pets,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true});
var pets_proto = grpc.loadPackageDefinition(petsPackageDefinition).pets;


app.get("/", function(req, res){
	res.send("gRPC Testing");
});

app.get("/pets", function(req, res){
	var client = new pets_proto.Pets('localhost:50051',
									grpc.credentials.createInsecure());
	
	client.get_pets({user_id: req.query.user_id}, function(err, response){
		console.log(err);
		console.log(response);
		res.send(response);
	})
});

app.listen(3000, function(){
	console.log("Server started at 3000");
});
