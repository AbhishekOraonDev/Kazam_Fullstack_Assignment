# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN npm run build

# Expose the port your client runs on when using preview
EXPOSE 4173

ENV VITE_SERVER_URL=http://localhost:5000

# Command to serve the built app
CMD ["npm", "run", "preview", "--", "--port", "4173", "--host"]

