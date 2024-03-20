FROM node

WORKDIR /app/customer

# First, copy only the package.json and package-lock.json (or npm-shrinkwrap.json)
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 8001

CMD ["npm", "start"]
