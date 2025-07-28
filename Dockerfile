FROM node:22-alpine3.21

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev"]