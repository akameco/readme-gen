# readme-gen [![Build Status](https://travis-ci.org/akameco/readme-gen.svg?branch=master)](https://travis-ci.org/akameco/readme-gen)

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/readme-gen.svg)](https://greenkeeper.io/)

> README generator for node.js.

## Installation
```sh
$ npm install --global readme-gen
```

## Usage

After `npm init`, run `readme-gen` or `rdm`.

For example, in the case of a package.json such as the following,  output is like this.

package.json
```json
{
  "name": "sample-app",
  "version": "0.0.1",
  "description": "sample, sample, sample",
  "author": "akameco",
  "license": "MIT"
}
```

README.md
```md
# sample-app

> sample, sample, sample

## Installation

## Usage

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
```

If you want to use custom templete, put the `.readme-genrc` in the home directory.

.readme-genrc
```ejs
# <%= name %>

> <%= description %>

## Install

## Usage

## License

<%= license %> © <%= author %>
```

## Tests

```
$ npm test
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
