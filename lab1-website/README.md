# Lab 1: Static Website with Nginx

## Goal

Serve a simple website with Docker two ways, and understand the difference between a bind mount and files baked into an image.

## Part A: Bind mount

Ran Nginx and mounted my local `site/` folder into the container:

```bash
docker run -d -p 8080:80 --name site \
  -v "$(pwd)/site":/usr/share/nginx/html:ro nginx
```

Editing `index.html` changed the page immediately, with no rebuild or restart. The container reads the original files on the host, not a copy.

## Part B: Baked image

Built a custom image with the site copied in:

```dockerfile
FROM nginx:alpine
COPY site/ /usr/share/nginx/html/
```

```bash
docker build -t my-site:1.0 .
docker run -d -p 8081:80 --name site2 my-site:1.0
```

Editing `index.html` after the build did not change the running site. To see changes I had to rebuild the image and replace the container.

## What I learned

- A **bind mount** links a host folder into the container. It is fast for development because there is nothing to rebuild.
- Files **baked into an image** make it self-contained and portable. It runs the same on any machine and a given version never changes, which is what you want for production.
- `docker exec -it <container> sh` opens a shell inside a running container, which is useful for debugging.
- Container names must be unique. `docker ps -a` shows stopped containers too, and `docker rm -f <name>` clears one.

## Cleanup

```bash
docker rm -f site site2
```