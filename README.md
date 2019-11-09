# vue-template

Built from the vue-cli. Modified to include bootstrap-vue.

## System Requirements

- **Node** 10.16.x
- **NPM** 6.9.x
- **Python2** 2.7.x
- **make** latest
- **g++** latest

Easiest way to install Node/NPM is to use NVM.

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install 10.16
nvm use 10.16
```

### Installing on Windows / Mac OS / Linux

```bash
cd ./vue-template
```

Proceed to **Project Setup**.

### Installing on Android

Install `node-gyp` via NPM first:

```bash
cd ./vue-template
npm install node-gyp
```

Then open `common.gypi` with a text editor such as Nano:

```bash
nano ~/.node-gyp/YOUR_INSTALLED_VERSION/include/node/common.gypi
```

Search for the first occurrence of `"android"`, and replace `'-fPIE'` with `'-fPIC'` for both `'cflags'` and `'ldflags'`. Remove the `-pie` flag from `'ldflags'` as well. Search for the second occurrence of `"android"` and repeat the steps above. Save the file, and be sure to `cd` back into the vue-template directory if necessary.

You may now proceed to **Project Setup**.

## Project Setup

### Install dependencies

```bash
npm install
```

### Launch development server with hot-reload support

```bash
npm run serve
```

### Compile and minify for production

```bash
npm run build
```

### Lint and fix files

```bash
npm run lint
```

### Run all tests (end-to-end and unit)

```bash
npm run test
```

### Run end-to-end tests manually

```bash
npm run test:e2e
```

### Run end-to-end tests automatically

```bash
npm run test:e2e-auto
```

### Run end-to-end tests without the GUI

```bash
npm run test:e2e-nogui
```

### Run unit tests

```bash
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
