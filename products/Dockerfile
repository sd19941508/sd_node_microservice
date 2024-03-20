FROM node

WORKDIR /app/products

# First, copy only the package.json and package-lock.json (or npm-shrinkwrap.json)
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 8002

CMD ["npm", "start"]
