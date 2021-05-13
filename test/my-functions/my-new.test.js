import { myFunctions } from '../..'

describe('my-new', () => {
  test('[] does instanceof Array', () => {
    expect(myFunctions.Instanceof([], Array)).toBe(true)
  })
  test('bar does instanceof Foo', () => {
    function Foo () {}
    function Bar () { Foo.call(this) }
    Bar.prototype = Object.create(Foo.prototype)
    Bar.prototype.constructor = Foo

    const bar = new Bar()
    expect(myFunctions.Instanceof(bar, Foo)).toBe(true)
  })
})
