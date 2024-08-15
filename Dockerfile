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

WORKDIR /cluster

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install


COPY . .

RUN npm run prisma:generate

ENTRYPOINT [ "npm", "run", "start:dev" ]


