FROM node:8
MAINTAINER We Create Software <contact@wecreate.software>

# Create unpriviledged user named app
RUN useradd --user-group --create-home --shell /bin/false app

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
CMD ["yarn", "start"]
