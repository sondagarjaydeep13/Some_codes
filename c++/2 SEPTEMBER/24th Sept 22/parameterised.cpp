#include<iostream>
using namespace std;

class A{
    int a,b;
    public:
    A(int a,int b){
        this->a=a;
        this->b=b;
    }
    void Addition(){
        cout<<"Addition of "<<a<<" and "<<b<<" is "<<a+b<<endl;
    }
};

int main()
{
    //A a1(5,6);  //   implicit call
    A a1 = A(5,6);   // Explicit call
    a1.Addition();
return 0;
}
