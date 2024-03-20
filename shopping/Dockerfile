FROM node

WORKDIR /app/shopping

# First, copy only the package.json and package-lock.json (or npm-shrinkwrap.json)
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 8003

CMD ["npm", "start"]
