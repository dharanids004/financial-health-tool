FROM node:18

WORKDIR /app

COPY package.json ./

# Use npm ci for stable, repeatable installs
RUN npm install --no-audit --no-fund

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
