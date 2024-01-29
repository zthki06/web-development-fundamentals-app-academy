function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let idx = [];
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 === 1) {
            idx.push(arr[i]);
        }
    }
    return idx;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let idx = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        if(i % 2 === 1) {
            idx.push(arr[i]);
        }
    }
    return idx;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let idx = [];
    for(let i = 1; i < arr.length; i *= 2) {
        idx.push(arr[i]);
    }
    return idx;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let idx = [];
    for(let i = 1; i < arr.length; i *= n) {
        idx.push(arr[i]);
    }
    return idx;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let idx = [];
    let len_arr = arr.length / 2;
    for(let i = 0; i < len_arr; i++) {
        idx.push(arr[i]);
    }
    return idx;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let idx = [];
    let len_arr = Math.floor(arr.length / 2);
    for(let i = len_arr; i > 0; i--) {
        idx.push(arr[i]);
    }
    return idx;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}