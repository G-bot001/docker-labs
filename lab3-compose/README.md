# Lab 3: Docker compose

## Goal
* Learnt what Docker Compose up does and that it does lot more than launch containers:
** It builds your api image from the Dockerfile.
** It creates the network and puts both services on it.
** It creates the volume for Postgres.
** It starts the containers in the right order, and with your health check, api waits until db is actually ready.
** It passes in the environment variables from .env.

With plain Docker commands, that's about six separate steps. Compose puts them in one file you can commit, so anyone can run the setup with one command repeatedly

* Learnt why DB_HOST: db works
** it works because compose puts the services on one custom network automatically, so the API reaches the database by its service name. Compose’s built-in DNS on the custom network turns that name into the container’s IP address.

* Learnt what down -v does
** To be exact about the commands: docker compose down removes the containers and the network but keeps volumes by default. Adding -v removes the volumes too, which is why the count restarted at 1. That’s why it's good to be careful with -v on anything that holds real data.

* Learnt why db service had no ports entry
** this is because because it is not exposed to the host, only the API can reach it.
Not exposing the database means it can’t be reached from outside the Docker network, so only the API can talk to it. Fewer open ports means less attack surface, which is a habit that matters in security.