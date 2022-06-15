const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};

function deepEqual(object1, object2) {
  const properties1 = Object.getOwnPropertyNames(object1);
  const properties2 = Object.getOwnPropertyNames(object2);

  if (properties1.length !== properties2.length) {
    return false;
  }

  for (let i = 0; i < properties1.length; i += 1) {
    const prop = properties1[i];
    const bothAreObjects = typeof object1[prop] === 'object' && typeof object2[prop] === 'object';

    if (
      (!bothAreObjects && object1[prop] !== object2[prop])
        || (bothAreObjects && !deepEqual(object1[prop], object2[prop]))) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual(obj1, obj2));
