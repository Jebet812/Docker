This is a practice to create a Docker image.
It is a tiny web server to serve a webpage through NGINX. 

***Docker Commands used***
``docker build .`` build image
``docker build -t new-image`` build image with tag
``docker images`` list docker images
``docker ps`` list docker containers
``docker ps -a`` list docker containers including those stopped
``docker run -d -p 80:80 <image id>`` create a container from image
``docker stop``
``docker start``
``docker exec -t <container id> /bin/sh`` exec into a running container
``docker rm <container id>`` remove container
``docker rmi <image id>`` remove image
