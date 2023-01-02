# [Dvd Screensaver][website] &middot; [![GitHub license]](./LICENSE) ![CI Action]

<!-- Table of Contents -->

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

The first step will be to clone the repo

```shell
git clone https://github.com/rmenai-lab/dvd-screensaver.git
```

### For development

The requirements are:

- [Node.js]
- [Yarn]

1. Install the dependencies
   ```shell
   yarn
   ```
2. Optionally, you can install playwright to run the e2e tests
   ```shell
   npx playwright install --with-deps
   ```

## Environment Variables

To run this project, create a `.env` file in the root directory and add the following environment variables:

| Variable | Description             | Default |
|----------|-------------------------|---------|
| SITE_URL | The url of your website | ""      |

## Usage

In order to start the website, you will need to run the NPM scripts that are available in the package.json file,
using `yarn` or `npm run`. Here are the most important ones:

- **`dev`**: Starts the development server in http://localhost:3000.
- **`build`**: Builds your application for production. The output folder is `.output`.
- **`preview`**: Previews the production build from `.output` locally.
- **`test:unit`**: Runs the unit tests using [Vitest].
- **`test:e2e`**: Runs the end-to-end tests using [Playwright].
- **`lint`**: Lints the project using [ESLint].

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

<!-- Packages links -->

[eslint]: https://eslint.org
[node.js]: https://nodejs.org/en/
[playwright]: https://playwright.dev
[vitest]: https://vitest.dev
[yarn]: https://yarnpkg.com/

<!-- Repository links -->

[website]: https://github.com/rmenai-lab/dvd-screensaver

<!-- Shields.io links -->

[github license]: https://img.shields.io/badge/license-MIT-blue.svg
[ci action]: https://github.com/rmenai-lab/dvd-screensaver/actions/workflows/ci.yaml/badge.svg
