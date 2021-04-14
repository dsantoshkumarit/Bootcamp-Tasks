//------------1.Chunk function--------------//
function myChunk(arr, chunkSize) {
    var newArr = [];
    if (chunkSize) {
        var j = 0;
        var tempArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (j < chunkSize) {
                tempArr.push(arr[i]);
                j++;
            }
            else {
                newArr.push(tempArr);
                tempArr = [];
                tempArr.push(arr[i]);
                j = 1;
            }
        }
        newArr.push(tempArr);
        return newArr;
    }
    else {
        return [];
    }
}
//---------2.Reduce function----------//
function myReduce(arr, func, initval) {
    var _a = initval === undefined ? [arr[0], 1] : [initval, 0], result = _a[0], i = _a[1];
    for (; i < arr.length; i++) {
        result = func(result, arr[i], i);
    }
    return result;
}
//------------3. Filter function---------------//
function myFilter(collection, predicate) {
    var resultarr = [];
    if (typeof predicate === "function") {
        for (var i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                resultarr.push(collection[i]);
            }
        }
        return resultarr;
    }
    else if (predicate instanceof Object) {
        var keys = Object.keys(predicate);
        for (var i = 0; i < collection.length; i++) {
            for (var j = 0; j < keys.length; j++) {
                if (predicate[keys[j]] === collection[i][keys[j]]) {
                    resultarr.push(collection[i]);
                }
            }
        }
    }
    else if (predicate instanceof Array) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[predicate[0]] === predicate[1]) {
                resultarr.push(collection[i]);
            }
        }
    }
    else if (predicate instanceof String) {
        var splitstr = predicate.split(".");
        for (var i = 0; i < collection.length; i++) {
            var val = collection[splitstr[i]];
            for (var j = 1; j < splitstr.length; j++) {
                val = collection[val];
            }
            resultarr.push(val);
        }
    }
}
//------------4. Find function---------------//
function myFind(collection, predicate, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    var resultarr = [];
    if (typeof predicate === "function") {
        for (var i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                resultarr.push(collection[i]);
            }
        }
    }
    else if (predicate instanceof Object) {
        var keys = Object.keys(predicate);
        for (var i = 0; i < collection.length; i++) {
            for (var j = 0; j < keys.length; j++) {
                if (predicate[keys[j]] === collection[i][keys[j]]) {
                    resultarr.push(collection[i]);
                }
            }
        }
    }
    else if (predicate instanceof Array) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[predicate[0]] === predicate[1]) {
                resultarr.push(collection[i]);
            }
        }
    }
    else if (predicate instanceof String) {
        var splitstr = predicate.split(".");
        for (var i = 0; i < collection.length; i++) {
            var val = collection[splitstr[i]];
            for (var j = 1; j < splitstr.length; j++) {
                val = collection[val];
            }
            resultarr.push(val);
        }
    }
}
//------------5. Sum function---------------//
function mySum(collection) {
    var result = 0;
    for (var i = 0; i < collection.length; i++) {
        result += collection[i];
    }
    return result;
}
