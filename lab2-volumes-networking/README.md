# Lab 1: Volumes and networking

## Goal 
* learnt why a file ends up gone, even with a container and where a container stores data it writes

when a file is written in a container, it goes into that container's own writable layer, on top of the image. the image didn't contain the file because they are read-only and the image was never touched So the new container, built from the unchanged image, had no such file. The deletion only explains why the first container’s copy was lost.

* what problem does a volume solve and how a volume is different from a bind mount in Lab 1

Volumes live outside any one container, so the data survives when containers are deleted.

A bind mount points at a specific folder on the host that you choose (like your site folder). You manage it yourself, and it’s great for live editing.

A volume is created and managed by Docker (docker volume create), and you don’t care where it physically lives. It’s the better choice for data a container owns, like a database.

* comparing a webserver and a database using a volume

a database gets a volume and a webserver does not because, a database’s data is state that has to survive restarts and upgrades. a web server is stateless: its files are baked into the image, so you can delete and recreate it anytime and lose nothing. “Live link” describes a bind mount, which isn’t what a production web server uses.

* understanding a custom network and a default network