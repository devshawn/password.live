# password.live

🔒 Generate simple or complex passwords directly from your web browser. [https://password.live][password]

[![Build Status](https://travis-ci.org/devshawn/password.live.svg?branch=master)](https://travis-ci.org/devshawn/password.live)  [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/devshawn/react-dayjs/blob/master/LICENSE.md)

<p align="center">
  <img src="https://i.imgur.com/eg0QMuS.png"/>  
</p>

## Overview
Password.live is a web-based password generator written in React. The main idea was to create a simple web-based application to generate both simple and complex passwords. The application does not log or store any passwords that are created and is secured by SSL. A docker image is also provided to easily run password.live locally as well.

## Development
Ensure you have [node/npm][node] installed. Then, install dependencies by running:
```bash
npm install
```

### Run the application
Start the application by running:
```bash
npm run serve
```
Visit [localhost:8080][localhost] to view the application.

### Run tests
To run all tests, run the following in the root directory:
```bash
npm run test
```

### Building for production
To build the application for production (as it does in our continuous integration builds), run:
```bash
npm run build
```

This will generate a static website which can be viewed using the generated `index.html` file.

## Contributing

Interested in contributing? Read [CONTRIBUTING.md][contributing] to learn more.

## License

This software is released under the MIT license. See [LICENSE][license] for more details.

[password]: https://password.live
[node]: https://nodejs.org
[localhost]: http://localhost:8080
[contributing]: https://github.com/devshawn/password.live/blob/master/CONTRIBUTING.md
[license]: https://github.com/devshawn/password.live/blob/master/LICENSE
