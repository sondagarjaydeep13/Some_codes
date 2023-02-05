// Create class

class Demo{
   function(){
    console.log("Class is calling..!!");
   }

}
// call the function using class

var a=new Demo();
a.function();

// create another class for addition

class addition{
    add(a,b)
    {
        console.log(a+b);
    }
}
var b=new addition();
b.add(10,20);
