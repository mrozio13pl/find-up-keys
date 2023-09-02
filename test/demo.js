const findUpKeys = require('..')

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
}

// eslint-disable-next-line no-console
console.log(findUpKeys(obj, 'description'))