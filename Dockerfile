# Base image
FROM node:18-alpine AS base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app

# Copy package files and install dependencies for the base image
COPY package*.json ./
RUN npm install

# Expose the port for the application
EXPOSE 3000

# Builder stage
FROM base AS builder
# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM base AS production
# Set environment variable for production
ENV NODE_ENV=production

# Create a user and group for running the application
RUN addgroup -g 1001 -S nodejs \
    && adduser -S nextjs -u 1001

# Set the working directory
WORKDIR /app

# Install production dependencies only
COPY package*.json ./
RUN npm ci --only=production

# Copy built files and necessary directories from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Switch to the new user
USER nextjs

# Start the application
CMD ["npm", "start"]

# Development stage
FROM base AS dev
# Set environment variable for development
ENV NODE_ENV=development

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Start the development server
CMD ["npm", "run", "dev"]
