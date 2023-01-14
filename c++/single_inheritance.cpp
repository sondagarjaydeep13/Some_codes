#include<iostream>
using namespace std;
class A{
    public:
    int a;
    void SetDataA(int a){
        this->a=a;
    }
};
class B:public A{
    public:
    int b;
    void SetDataB(int b){
        this->b=b;
    }
};
class C:public B{
    public:
    void Display(){
        cout<<"Addition of a and b is :"<<a+b<<endl;
    }
};
int main()
{
    C c_object;
    c_object.SetDataA(10);
    c_object.SetDataB(20);
    c_object.Display();
    return 0;
}