echo "Running deploy"

ssh root@staging.password.live << ENDSSH
docker login -u gitlab-ci-token -p $CI_JOB_TOKEN $REGISTRY_HOST
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME
docker pull $REGISTRY_HOST/$IMAGE_NAME
docker run -d --name $CONTAINER_NAME -e VIRTUAL_HOST=staging.password.live -e PORT=8080 -e NODE_ENV=staging $REGISTRY_HOST/$IMAGE_NAME
ENDSSH
