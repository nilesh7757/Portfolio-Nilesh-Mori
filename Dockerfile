# Use an official Node.js runtime as parent image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock/pnpm-lock.yaml
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your source code
COPY . .

# Build your Next.js app
RUN npm run build

# Expose port 3000 (the default for Next.js)
EXPOSE 3000

# Start the app
CMD [ "npm", "run","dev" ]
