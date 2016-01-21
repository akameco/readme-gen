'use strict';
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const readPkgUp = require('read-pkg-up');

module.exports = () => {
  readPkgUp().then(result => {
    const pkg = result.pkg;
    const options = {
      appName: pkg.name,
      overview: pkg.description,
      license: pkg.license
    };

    const file = path.join(__dirname, 'fixture/README.ejs');
    ejs.renderFile(file, options, (err, output) => {
      if (err) {
        console.log(err);
      }
      fs.writeFileSync(path.join(process.cwd(), 'README.md'), output);
    });
  });
};
