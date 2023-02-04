// const student=(a)=>{
//      console.log(a);
// }
// student(2);

const squre=(a,b)=>{
    b(a*a)
}
const cube=(c,b)=>{
    b(c*c*c)
}
squre(2,(b)=>{
    console.log(b);
    cube())
})
