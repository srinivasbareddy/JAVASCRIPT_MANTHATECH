const promise = new Promise((resolve,reject)=>(
    setTimeout(()=>{
        resolve("Successful operation")
    },3000)
));

promise.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
});