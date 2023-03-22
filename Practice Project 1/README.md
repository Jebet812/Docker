This is a practice to create a Docker image.
It is a tiny web server to serve a webpage through NGINX. 
Steps:
1. ``FROM nginx:1.23.3-alpine`` to specify what baseImage we'll use for our image. Chose the latest nginx version but the alpine version since it is small.
2. 