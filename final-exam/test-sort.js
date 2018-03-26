'use strict';

const test = require('tape');
const sortMyArray = require('./final-exam.ts');

test('return the second biggest number', (t) => {
  const actual = sortMyArray([9, -1, 5, 4, 8]);
  const expected = 8;

  t.equal(actual, expected);
  t.end();
});

test('with empty list', (t) => {
  const actual = sortMyArray([]);
  const expected = undefined;

  t.equal(actual, expected);
  t.end();
});

test('test with one element', (t) => {
  const actual = sortMyArray([5]);
  const expected = undefined;

  t.equal(actual, expected);
  t.end();
});

test('test with string', (t) => {
  const actual = sortMyArray(['9', '1', '5', '4', '8']);
  const expected = '8';

  t.equal(actual, expected);
  t.end();
});
