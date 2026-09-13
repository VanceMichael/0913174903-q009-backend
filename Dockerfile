FROM node:22-bookworm
WORKDIR /app
COPY . .
CMD ["sh", "-c", "echo 请先完成服务实现"]
