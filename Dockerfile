FROM node:8
MAINTAINER Shawn Seymour <shawn@devshawn.com>

RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app
ENV NODE_ENV=production
ENV PORT=8080
RUN chown -R app:app $HOME

USER app
WORKDIR $HOME/password

COPY dist/ dist/
COPY node_modules/ node_modules/

EXPOSE 8080
CMD ["node", "dist/server.js"]
