# Dockerfile
FROM node:22
WORKDIR /app
COPY . /app

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

# 安装
RUN npm set registry https://registry.npmmirror.com
RUN npm  install 

# 启动
CMD npm  run  prd-dev && npx pm2 log #阻塞控制台的程序

# 环境变量
ENV SERVER_NAME="biz-editor-server"
ENV AUTHOR_NAME="zeng"
