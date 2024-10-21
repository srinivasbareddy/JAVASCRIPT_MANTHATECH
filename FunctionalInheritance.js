function Parent(name){
    var obj={};
    obj.name=name;
    obj.sayHello=function(){
    console.log("Hello , my name is",this.name);
    };
    return obj;
}
function Child(name,age){
    var obj=Parent(name); // inheritance happens here
    obj.age=age;
    obj.sayGoodBye=function(){
    console.log("GoodBye from",this.name);
    };
    return obj;
}
// create child object
var childObj=Child('John Doe',30);
// call methods on child object
childObj.sayHello();
childObj.sayGoodBye();
console.log("Name",childObj.name);
console.log("Age",childObj.age);