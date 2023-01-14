#include<iostream>
using namespace std;

class A{
    int a;
    public:
    A(){}
    A(int a){
        this->a=a;
    }
    void display(){
        cout<<a<<endl;
    }
    A operator+(A obj){
        A temp;
        temp.a = a+obj.a;
        return temp;
    }
};

int main()
{
    A a1(10),a2(20),a3(30),a4(40),a5(50);
    A a6 = a1+a2+a5;
    a6.display();
return 0;
}
