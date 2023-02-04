// const student=(a)=>{
//      console.log(a);
// }
// student(2);

const squre=(a,b)=>{
    b(a*a)
}
const cube=(a,b)=>{
    b(a*a*a)
}
squre(2,(b)=>{
    console.log(b);
    cube(b,(data)=>{
        console.log(data);
    })
})

