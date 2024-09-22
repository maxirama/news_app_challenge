    # Stage 1: Build Stage
    FROM node:18 AS build-stage

    # Set working directory
    WORKDIR /app

    # Copy package.json and package-lock.json
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    # Copy the rest of the application code
    COPY . .

    # Build the app for production
    RUN npm run build

    # Stage 2: Production Setup
    FROM nginx:alpine AS production-stage

    # Set environment variables
    ENV REACT_APP_NEWS_API_KEY=8ab9f6a80b5241b4ba7f0b3938ea683e
    ENV REACT_APP_NEWS_API=https://newsapi.org/v2/everything

    # Copy built app from Stage 1
    COPY --from=build-stage /app/build /usr/share/nginx/html

    # Expose port 3000
    EXPOSE 3000

    # Start NGINX
    CMD ["nginx", "-g", "daemon off;"]

    # Stage 3: Development Setup
    FROM node:18 AS development-stage

    # Set working directory
    WORKDIR /app

    # Copy package.json and package-lock.json
    COPY package*.json ./

    # Install development dependencies
    RUN npm install

    # Copy the rest of the application code
    COPY . .

    # Expose port 3000 for development
    EXPOSE 3000

    # Start the development server
    CMD ["npm", "start"]
