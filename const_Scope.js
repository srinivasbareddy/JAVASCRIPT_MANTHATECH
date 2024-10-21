
/* const a = 30;
console.log(a);
const a = 40; */


// Ex:- Block Scope of const
const x = 22;
{
    const x = 30;
    console.log(x);
    {
        const x = 40;
        console.log(x);
    }
    {
        const x = 50;
        console.log(x);
    }
}
console.log(x);


//Ex:- var must be assigned at the time of declaration
/* const x;
x = 20; */



