import test from 'ava';
import fs from 'fs';
import readmeGen from '../';

test(t => {
  process.env.HOME = process.env.USERPROFILE = __dirname
  readmeGen();
  t.same(fs.readFileSync('README.md', 'utf8'), fs.readFileSync('./fixture/README.md', 'utf8'));
});
