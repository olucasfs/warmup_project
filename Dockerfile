FROM node:12.6.0

RUN mkdir /app

WORKDIR /app

# install all cypress dependencies according to https://docs.cypress.io/guides/guides/continuous-integration.html#Dependencies
RUN apt-get update && \
    apt-get install --no-install-recommends -y \
    xvfb libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth \
    && rm -rf /var/lib/apt/lists/*
    
COPY ["package.json", "package-lock.json*", "./"]

# avoid million NPM install messages
ENV npm_config_loglevel warn

RUN npm install

CMD ["bin/bash]
