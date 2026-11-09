# Docker Labs

Hands-on Docker labs built while training for a junior DevOps / cloud role. Each lab lives in its own folder with a README covering what I built, the commands I used and what I learned.

## Labs

| Lab | Topic | Status |
|-----|-------|--------|
| [Lab 1](./lab1-website) | Serving a static website with Nginx: bind mounts vs. baked images | Done |
| Lab 2 | Volumes and container networking | Done |
| Lab 3 | Docker Compose (multi-container apps) | Done |
| Lab 4 | Better Dockerfiles: multi-stage builds, non-root user, image scanning | Planned |
| Lab 5 | Azure Container Registry (ACR) | Planned |
| Lab 6 | Azure Container Instances (ACI) | Planned |
| Lab 7 | CI/CD pipeline: GitHub Actions to ACR to ACI | Planned |

## Tools

Docker, Nginx, GitHub Codespaces, GitHub Actions, Microsoft Azure

## Related projects

- [docker-node-api](https://github.com/G-bot001/docker-node-api): containerized Node.js API with a GitHub Actions pipeline that builds the image, smoke-tests it and publishes it to GitHub Container Registry.
- [azure-function-http-api](https://github.com/G-bot001/azure-function-http-api): serverless HTTP API on Azure Functions with a CI workflow.