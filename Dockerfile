FROM node:8
MAINTAINER Shawn Seymour <shawn@devshawn.com>

# Create unpriviledged user named app
RUN useradd --user-group --create-home --shell /bin/false app

# Set environment variables
ENV HOME=/home/app

# Copy over our package information
COPY package.json yarn.lock $HOME/password/
RUN chown -R app:app $HOME/*

# Set our working directory
USER app
WORKDIR $HOME/password

# Install dependencies
RUN yarn

# Copy application build
COPY dist/ dist/

# Expose port and assign start command
EXPOSE 8080
CMD ["node", "dist/server.js"]
