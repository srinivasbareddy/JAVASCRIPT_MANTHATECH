function outer(){
    let arr=[];
    let i;
    for(i=0;i<4;i++){
    arr[i]=function(){
    return i;
    }
    }
    return arr;
}
let functionouter=outer();
console.log(functionouter[0]());
console.log(functionouter[1]());
console.log(functionouter[2]());
console.log(functionouter[3]());