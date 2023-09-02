# find-up-keys

> Find matching values for a given name key in an object.

## Install

```bash
npm i find-up-keys
```

## Usage

```js
const findUpKeys = require('find-up-keys');

// some random nested object
const obj = {
  title: 'Hello, World!',
  description: 'Hi!',
  info: {
    description: 'more desc',
    tags: ['...'],
    extras: {
      description: null
    }
  }
};

findUpKeys(obj, 'description'); // <= ['Hi!', 'more desc', null]
```

### findUpKeys (object, key)

Find matching values for a key in an object.

#### object

Type: `object`

Object to check.

#### key

Type: `string`

Keys to find.

## License

MIT