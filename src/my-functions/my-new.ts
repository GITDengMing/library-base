/* eslint-disable @typescript-eslint/ban-types */
export default function myNew (construtor: Function):Object {
  const obj = Object.create(construtor.prototype)
  return function (...args: []) {
    const ret = construtor.apply(obj, args)
    return ret instanceof Object ? ret : obj
  }
}
