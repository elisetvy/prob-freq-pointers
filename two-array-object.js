/**
 * input:  two arrays, keys and values
 * output: object of both combined
 *
 * ['x', 'y', 'z'], [1, 2]);
  // {'x': 1, 'y': 2, 'z': null}

  ['a', 'b', 'c'], [1, 2, 3, 4]);
  // {'a': 1, 'b': 2, 'c': 3}

  loop over keys array
  add all keys and corresponding values
  if no values present, value of key (at corresponding index) is set to null
 */



function twoArrayObject(keys, values) {
  const combinedObject = {};

  for (let i = 0; i < keys.length; i++) {
    if (!values[i]) {
      combinedObject[keys[i]] = null;
    }
    else {
      combinedObject[keys[i]] = values[i];
    }
  }
  return combinedObject;
}
