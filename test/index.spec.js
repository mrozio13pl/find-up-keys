const { test } = require('uvu')
const { equal } = require('uvu/assert')

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

test('find keys in the object', () => {
  equal(findUpKeys(obj, 'description'), ['Hi!', 'more desc', null])
})

test.run()