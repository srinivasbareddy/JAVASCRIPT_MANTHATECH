function foo(outerarg){
    function inner(innerarg){
    return outerarg+innerarg;
    }
    return inner;
}

let func=foo(5);
console.log(func(4));
console.log(func(3));