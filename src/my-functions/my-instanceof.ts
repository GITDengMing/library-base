/* eslint-disable @typescript-eslint/ban-types */
export default function myInstanceof (instance: Object, construtor:Function):boolean {
  if (instance === null) {
    return false
  }
  let prototype = Object.getPrototypeOf(instance)
  while (prototype != null) {
    if (prototype === construtor.prototype) {
      return true
    }
    prototype = Object.getPrototypeOf(prototype)
  }
  return false
}
