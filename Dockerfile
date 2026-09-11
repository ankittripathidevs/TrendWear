# Use Node.js 26 Alpine image
FROM node:26-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application code
COPY . .

# Vite runs on port 5173
EXPOSE 5173

# Start React/Vite app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]