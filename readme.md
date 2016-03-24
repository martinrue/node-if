# node-if

## The Problem

Sick of writing `if` statements?

Who isn't.

Got an embarrassingly small list of dependencies?

Fear no more.

## Installation

```
npm install node-if
```

## Usage

```javascript
const nif = require('node-if');

nif(1 !== 2, () => {
  console.log('the universe is ok');
});
```

What about `else`? Easy, pass a second else function to `nif`:

```javascript
const nif = require('node-if');

nif(1 !== 1, () => {
  console.log('well, this *is* JavaScript I guess');
}, () => {
  console.log('the universe is ok');
});
```

What about `else if`? Easy, just add some `nif` to your `nif`:

```javascript
const nif = require('node-if');

nif(1 !== 1, () => {
  console.log('well, this *is* JavaScript I guess');
}, () => {
  nif(2 !== 2, () => {
    console.log('something is going down here');
  });
});
```

Q: Doesn't this cause a lot of nesting?

A: Birds do a lot of nesting, and they're pretty cool. Don't worry about it. There's probably an npm module to deal with it for you, anyway.