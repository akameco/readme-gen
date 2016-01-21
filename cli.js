#!/usr/bin/env node
'use strict';
const meow = require('meow');
const readmeGen = require('./');

meow(`
  Usage
  $ readme-gen
`);

readmeGen();
