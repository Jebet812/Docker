
## Container
A way to package an application with everything they need inside the package including dependencies and configuration.
* It is packaged with all needed configuration.
* Only one command used to install the app
* It is its own isolated environment.
* You can run the same application with two different versions.
Containers are made up of images.

## Docker
* **Docker Image** is the actual package that is movable and carries the configuration together with the dependencies.
* **Docker Container** when you pull the image and the application actually starts on the machine it creates the container environment.

### Docker vs Virtual Machine
Docker and virtual machine are both virtualization tools. However their difference are: </br>
* Docker virtualizes the application layer of the operations system and uses the OS kernel of the host. The virtual machine on the other hand has the application layer and its own OS kernel.</br>
* The size of Docker images are smaller compared to VM images.</br>
* It is faster to run Docker containers as compared to VM.</br>
* You can run a virtual machine image of any operation system on any other operation system host.

### Basic Docker Commands
* ``docker pull`` Pulls image from the repository to the local environment.
* ``docker run`` combines ``docker pull`` and ``docker start`` It pulls the image if not locally available and starts it.
* ``docker run -d`` runs container in detached mode.
* ``docker ps -a`` lists all containers whether running or not.
* ``docker images`` lists all images you have locally.
* ``docker start`` used to start an existing container and retains all the attributes that was used when using `` docker run``
* ``docker stop`` 

### Docker Commands for Troubleshooting
* ``docker logs`` used to see what logs the container is producing.
* ``docker exec -it`` used to get the terminal of the running container.


