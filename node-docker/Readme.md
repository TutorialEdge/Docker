Node Docker Tutorial
====================

## Using Volumes And Nodemon

With both nodemon and the use of volumes (soon to be deprecated for mount) we can automatically spin up our docker 

```
cd node-docker/
docker run -p 3001:3000 -v $(pwd):/app node-docker
```