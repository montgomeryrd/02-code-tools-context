'use strict'

function sumIterative(n) {
    let agg = 0;
    let x = n;

    for(n ; n > 0 ; n--) {
        agg += n
    }
    return agg;
}

function sumRecursive(n) {
    return n === 0 ? 0 : n + sumRecursive(n - 1);
}

function sumRecurse() {
    if(count === 10) return 
    count++
    sumRecurse();
}

let sumOneLineRecurse