// write a program for function overloading..!!
#include<iostream>
using namespace std;
class Operation{
    int a,b,c;
    public :
    Operation()
    {
        cout<<"Consructor is calling"<<endl;
    }
    Operation(int a,int b){
        this->a=a;
        this->b=b;
    }
    Operation(int a,int b,int c){
        this->a=a;
        this->b=b;
        this->c=c;
    }
    void Addition(){
        cout<<"Addition of a and b is :"<<a+b<<endl;
    }
    void multi(){
        cout<<"Multiplication of a and b and c is :"<<a*b*c<<endl;
    }
};
int main()
{
    
    Operation a1(10,5),a2(1,2,3);
    a1.Addition();
    a2.multi();
    return 0;
  

}