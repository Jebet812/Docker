This is a practice to create a Docker image.
It is a tiny web server to serve a webpage through NGINX. 

In the Dockerfile I used:
* ``FROM`` to specify the base image used to build my image in this case NGINX from [Dockerhub](https://hub.docker.com/_/nginx)
* ``COPY`` to copy files from host machine to Docker image.
* ``EXPOSE`` to expose a port. In this case documentantion dictates using port 80 so I did not use this command.
* ``CMD`` command use for entry point. 

### Docker Commands used
* ``docker build .`` build image
* ``docker build -t new-image`` build image with tag
* ``docker images`` list docker images
* ``docker ps`` list docker containers
* ``docker ps -a`` list docker containers including those stopped
* ``docker run -d -p 80:80 <image id>`` create a container from image
* ``docker stop``
* ``docker start``
* ``docker exec -t <container id> /bin/sh`` exec into a running container
* ``docker rm <container id>`` remove container
* ``docker rmi <image id>`` remove image

## Resource Used
[Build YOUR OWN Dockerfile, Image, and Container - Docker Tutorial](https://www.youtube.com/watch?v=SnSH8Ht3MIc&t=60s) by Techno Tim.
