function isObject(obj) {
    if (typeof obj === 'object') {
        return true;
    } 
    return false;
}

function hasKey(obj, key) {
    if(obj.hasOwnProperty(key)) return true;
    return false;
}

function isFunction(F) {
    if (typeof F === 'function') return true;
    return false;
}

function isUndefined(V) {
    if (typeof(V) === 'undefined') return true;
    return false;
} 

function isNull(V) {
    if (V === null) return true;
    return false;
}

function isNullOrUndefined(V) {
    return isNull(V) || isUndefined(V);
}

function isArray(A) {
    if (A instanceof Array) {
        return true;
    }
    return false;
}

function isArrayEmpty(A) {
    if (isArray(A)) {
        if(A.length === 0) return true;
        return false;
    } else {
        throw new Error("Argument is not an array");
    }
}

function first(A) {
    if(isArray(A) && !isArrayEmpty(A)) return A[0];
    else {
        throw new Error("Argument must be a non-empty array");
    }
}

function last(A) {
    if(isArray(A) && !isArrayEmpty(A)) return A[A.length-1];
    else {
        throw new Error("Argument must be a non-empty array");
    }
}

function partition(A, idx) {
    if(isArray(A)) {
        const length = A.length;
        if (idx < 0 || idx > length) {
            throw new Error("Invalid index provided");
        } else {
            const first = A.slice(0, idx);
            const second = A.slice(idx, length+1);
            return {
                first, 
                second
            };
        }
    } else {
        throw new Error("Argument must be an array");
    }
}

function getName(arg) {
    if(isObj(arg)) return arg.constructor.name;
    else if(isFunction(arg)) return arg.name;
}

module.exports = {
    isObject: isObject,
    hasKey: hasKey,
    isFunction: isFunction,
    isNull: isNull,
    isUndefined: isUndefined,
    isNullOrUndefined: isNullOrUndefined,
    isArray: isArray,
    isArrayEmpty: isArrayEmpty,
    first: first,
    last: last,
    partition: partition,
    getName: getName
};