FROM node:20-alpine

WORKDIR opt/server

COPY package*.json ./

# 设置 node 阿里镜像
RUN npm config set registry https://registry.npm.taobao.org

RUN npm install

COPY . .

EXPOSE 8888
CMD [ "npm", "start" ]