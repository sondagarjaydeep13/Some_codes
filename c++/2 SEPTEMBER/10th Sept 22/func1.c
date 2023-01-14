#include<stdio.h>
// define and declaration of the function
void Greet1(){
    printf("Hello Everyone..!!\n");
}
void Greet2(){
    Greet1();
    printf("How are you?..!!\n");
}

int main()
{
    Greet1();
    Greet2();     //  function calling..
    Greet1();
    Greet1();

    return 0;
}