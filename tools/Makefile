PROTOS_PATH = ../protos
REGISTRY = 'gcr.io/dh-backend'

# Compilers
python_compiler = python36 -m grpc_tools.protoc 

# Build Microservices
api:
	docker build -t ${REGISTRY}/api-grpc:v${BUILD_ID} ../api/.
	docker push ${REGISTRY}/api-grpc:v${BUILD_ID}
	docker rmi -f ${REGISTRY}/api-grpc:v${BUILD_ID}

pets:
	${python_compiler} -I${PROTOS_PATH} --python_out=../pets/ --grpc_python_out=../pets/ ${PROTOS_PATH}/pets.proto
	docker build -t ${REGISTRY}/pets:v${BUILD_ID} ../pets/.
	docker push ${REGISTRY}/pets:v${BUILD_ID}
	docker rmi -f ${REGISTRY}/pets:v${BUILD_ID}

users:
	${python_compiler} -I${PROTOS_PATH} --python_out=../users/ --grpc_python_out=../users/ ${PROTOS_PATH}/pets.proto
	${python_compiler} -I${PROTOS_PATH} --python_out=../users/ --grpc_python_out=../users/ ${PROTOS_PATH}/users.proto
	docker build -t ${REGISTRY}/users:v${BUILD_ID} ../users/.
	docker push ${REGISTRY}/users:v${BUILD_ID}
	docker rmi -f ${REGISTRY}/users:v${BUILD_ID}

# Deploy Microservices
deploy_api:
	echo "deploy"

deploy_pets:
	gcloud container clusters get-credentials scooby-microservices --zone us-central1-a --project dh-backend
	kubectl set image deployment pets-grpc pets=gcr.io/dh-backend/courage:v${BUILD_NUMBER}-prod

# Lint
pets_lint:
	pylint-3 ../pets/server.py | grep 'E\|W' >> pets.log

clean:
	rm *.log
