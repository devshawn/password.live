# password.live

🔒 Generate simple or complex passwords directly from your web browser. [https://password.live][password]

[![Build Status](https://travis-ci.org/devshawn/password.live.svg?branch=master)](https://travis-ci.org/devshawn/password.live)  [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/devshawn/react-dayjs/blob/master/LICENSE.md) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

* [Overview](#overview)
* [Development](#development)
* [Contributing](#contributing)
* [License](#license)

## Overview
Password.live is a web-based password generator written in React, Redux, and Node. The main idea was to create a simple web-based application to generate both simple and complex passwords. The application does not log or store any passwords that are created and is secured by SSL. A docker image is also provided to easily run password.live locally as well.

## Development
Password.live utilizes Lerna & npm for package management. This project is a monorepo, meaning the client and the server are in the same repository. Ensure you have [node/npm][node] installed. Then, install root dependencies by running:
```bash
npm install
```

Dependencies for subprojects are automatically installed through a postinstall hook running `lerna bootstrap`. You can manually bootstrap all dependencies by running:
```bash
npm run bootstrap
```

### Run the application
Start the client and the server by running:
```bash
npm run serve
```
Visit [localhost:5500][localhost-client] to view the application. The server will be running on [localhost:5501][localhost-server].

### Run tests
To run all tests, run the following in the root directory:
```bash
npm run test
```

To run tests for only the server:
```bash
npm run test:server
```

To run tests for only the client:
```bash
npm run test:client
```

### Building for production
To build the application for production (as it does in our continuous integration builds), run:
```bash
npm run compile
```

To then run the production server (which includes the client), run:
```bash
npm run start
```

The production server will then be running on [localhost:8080][localhost-production].

## Contributing

Interested in contributing? Read [CONTRIBUTING.md][contributing] to learn more.

## License

This software is released under the MIT license. See [LICENSE][license] for more details.

[password]: https://password.live
[node]: https://nodejs.org
[localhost-client]: http://localhost:5500
[localhost-server]: http://localhost:5501
[localhost-production]: http://localhost:8080
[contributing]: https://github.com/devshawn/password.live/blob/master/CONTRIBUTING.md
[license]: https://github.com/devshawn/password.live/blob/master/LICENSE
