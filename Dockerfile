# Uses Node 14 as base image
FROM node:14
ENV NODE_ENV=production

# Set the working directory inside the container when run, here it is /app
WORKDIR /app

# Copy the package.json so I can run an npm install
COPY . /app/
RUN npm run build   

# Exposing Port 3000 since thats what the server listens to
EXPOSE 3000

# Use the npm start command
CMD [ "npm", "start" ]

###################################################