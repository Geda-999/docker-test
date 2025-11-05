# node-server

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).



## Docker

```bash
docker build -t vite-server .
docker run -d --name vite-server -p 8888:8888 vite-server
docker ps -a
docker start vite-server
docker stop vite-server
docker logs vite-server
docker rm vite-server


docker build -t vite-server .
docker tag vite-server yourusername/vite-server:latest
docker login
docker push yourusername/vite-server:latest


docker tag vite-server tsalita/vite-server:latest
docker push tsalita/vite-server:latest


set HTTP_PROXY=http://127.0.0.1:10809
set HTTPS_PROXY=http://127.0.0.1:10809
```