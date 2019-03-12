PROTOS_PATH = ../protos

# Compilers
python_compiler = python36 -m grpc_tools.protoc 

# Build Microservices
api:
	docker build -t gcr.io/dh-backend/api-grpc:v${BUILD_ID} ../api/.
	docker push gcr.io/dh-backend/api-grpc:v${BUILD_ID}

pets:
	${python_compiler} -I${PROTOS_PATH} --python_out=../pets/ --grpc_python_out=../pets/ ${PROTOS_PATH}/pets.proto
	docker build -t gcr.io/dh-backend/pets:v${BUILD_ID} ../pets/.
	docker push gcr.io/dh-backend/pets:v${BUILD_ID}

# Lint
pets_lint:
	pylint-3 ../pets/server.py | grep 'E\|W' >> pets.log

clean:
	rm *.log
