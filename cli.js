#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const meow = require('meow');
const readmeGen = require('./');

meow(`
  Usage
  $ readme-gen
`);

if (fs.existsSync(path.resolve('README.md'))) {
  console.log('README.md already exists');
} else {
  readmeGen();
}
