function foo(){
    let b = 1;
    function inner(){
        return b;
    }
    return inner;
}
let greet = foo();
console.log(greet());

let getInner = foo();
console.log(getInner());
