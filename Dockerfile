FROM node:14-slim AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build


FROM node:14-slim AS dependency

WORKDIR /prepare

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production


FROM gcr.io/distroless/nodejs:14

WORKDIR /app

COPY --from=builder /app/package*.json /app/yarn.lock /app/
COPY --from=builder /app/public /app/public
COPY --from=builder /app/.next /app/.next
COPY --from=dependency /prepare/node_modules /app/node_modules

CMD ["node_modules/.bin/next", "start"]

