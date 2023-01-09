# 24/7 Website
---

## Install

```bash
# Clone repository from GitHub to <directory>
$ git clone https://github.com/wisnust/24-7-website.git < your directory>

# Switch to <your directory>
$ cd <your directory>

# Install all dependencies
$ npm install

# [optional] Check and update all dependencies
$ npm outdated
$ npm update
```

## Usage

```bash
# Build and minify both resources
$ npm run build

# Build and minify main.js file
$ npm run build:js

# Watch for changes in main.js file
$ npm run watch:js

# Build and minify main.scss file
$ npm run build:css

# Watch for changes in main.scss file
$ npm run watch:css

# Lint main.js file
$ lint:js

# Fix main.js file
$ lint:js:fix
```