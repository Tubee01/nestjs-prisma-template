###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:16-alpine As development
WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node .env.production ./.env

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

# Bundle app source
COPY --chown=node:node . .

# Generate Prisma database client code
RUN npm run prisma:generate

COPY --chown=node:node . .

USER node
###################
# BUILD FOR PRODUCTION
###################

FROM node:16-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=development /usr/src/app/.env ./.env

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:16-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/.env ./.env

CMD [ "node", "dist/main.js" ]