PROTOS_PATH = ../protos

# Compilers
python_compiler = python36 -m grpc_tools.protoc 

# Microservices
pets:
	${python_compiler} -I${PROTOS_PATH} --python_out=../pets/ --grpc_python_out=../pets/ ${PROTOS_PATH}/pets.proto
	docker build -t grpc/pets ../pets/.

# Lint
pets_lint:
	pylint-3 ../pets/server.py | grep 'E\|W' >> pets.log

clean:
	rm *.log
