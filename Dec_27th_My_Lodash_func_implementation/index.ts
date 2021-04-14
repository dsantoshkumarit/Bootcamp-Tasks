//------------1.Chunk function--------------//
function myChunk(arr, chunkSize) {
  let newArr = [];
  if (chunkSize) {
    let j = 0;
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (j < chunkSize) {
        tempArr.push(arr[i]);
        j++;
      } else {
        newArr.push(tempArr);
        tempArr = [];
        tempArr.push(arr[i]);
        j = 1;
      }
    }
    newArr.push(tempArr);
    return newArr;
  } else {
    return [];
  }
}

//---------2.Reduce function----------//
function myReduce(arr, func, initval) {
  let [result, i] = initval === undefined ? [arr[0], 1] : [initval, 0];
  for (; i < arr.length; i++) {
    result = func(result, arr[i], i);
  }
  return result;
}

//------------3. Filter function---------------//

function myFilter(collection, predicate) {
  let resultarr = [];

  if (typeof predicate === "function") {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        resultarr.push(collection[i]);
      }
    }
    return resultarr;
  } else if (predicate instanceof Object) {
    let keys = Object.keys(predicate);
    for (let i = 0; i < collection.length; i++) {
      for (let j = 0; j < keys.length; j++) {
        if (predicate[keys[j]] === collection[i][keys[j]]) {
          resultarr.push(collection[i]);
        }
      }
    }
  } else if (predicate instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[predicate[0]] === predicate[1]) {
        resultarr.push(collection[i]);
      }
    }
  } else if (predicate instanceof String) {
    let splitstr = predicate.split(".");
    for (let i = 0; i < collection.length; i++) {
      let val = collection[splitstr[i]];
      for (let j = 1; j < splitstr.length; j++) {
        val = collection[val];
      }
      resultarr.push(val);
    }
  }
}

//------------4. Find function---------------//

function myFind(collection, predicate, fromIndex = 0) {
  let resultarr = [];
  if (typeof predicate === "function") {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        resultarr.push(collection[i]);
      }
    }
  } else if (predicate instanceof Object) {
    let keys = Object.keys(predicate);
    for (let i = 0; i < collection.length; i++) {
      for (let j = 0; j < keys.length; j++) {
        if (predicate[keys[j]] === collection[i][keys[j]]) {
          resultarr.push(collection[i]);
        }
      }
    }
  } else if (predicate instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[predicate[0]] === predicate[1]) {
        resultarr.push(collection[i]);
      }
    }
  } else if (predicate instanceof String) {
    let splitstr = predicate.split(".");
    for (let i = 0; i < collection.length; i++) {
      let val = collection[splitstr[i]];
      for (let j = 1; j < splitstr.length; j++) {
        val = collection[val];
      }
      resultarr.push(val);
    }
  }
}

//------------5. Sum function---------------//

function mySum(collection) {
  let result = 0;
  for (let i = 0; i < collection.length; i++) {
    result += collection[i];
  }
  return result;
}
