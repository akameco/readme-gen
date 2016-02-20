'use strict';
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const readPkgUp = require('read-pkg-up');

module.exports = () => {
  readPkgUp().then(result => {
    const configPath = path.resolve(process.env.HOME || process.env.USERPROFILE, '.readme-genrc');
    const file = fs.existsSync(configPath) ? configPath : path.resolve(__dirname, 'fixture/README.ejs');
    ejs.renderFile(file, result.pkg, (err, output) => {
      if (err) {
        console.log(err);
      }
      fs.writeFileSync(path.resolve('README.md'), output);
    });
  });
};

