module.exports = waitFor = (object, key, fn) =>
  key in object
    ? fn(object[key])
    : setTimeout(() => waitFor(object, key, fn), 10)
