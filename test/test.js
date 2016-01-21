import test from 'ava';
import fs from 'fs';
import readmeGen from '../';

test(t => {
  readmeGen();
  t.same(fs.readFileSync('README.md'), fs.readFileSync('./fixture/README.md'));
});
