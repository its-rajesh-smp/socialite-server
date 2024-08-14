FROM ubuntu
RUN apt update
RUN apt install -y curl
RUN curl --version

RUN cd ~
RUN curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh

RUN apt install nodejs
RUN node -v
RUN npm -v

COPY package.json package.json
COPY package-lock.json package-lock.json

COPY tsconfig.json tsconfig.json
COPY tsconfig.build.json tsconfig.build.json
COPY nest-cli.json nest-cli.json
COPY src src
COPY constants constants
COPY utils utils


RUN npm install
RUN npm run prisma:generate

ENTRYPOINT [ "npm", "run", "start:dev" ]


