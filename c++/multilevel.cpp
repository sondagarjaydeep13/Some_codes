#include<iostream>
using namespace std;
class Base1{
    protected :
    int a;
    public :
    void A(int a){
        this->a=a;
    }
};
class Base2:public Base1{
    protected :
    int b;
    public :
    void B(int b){
        this->b=b;
    }
};
class Addition:public Base2{
    public :
    void Display(){
        cout<<"Addition of a and b is :"<<a+b<<endl;
    }
};
int main()
{
    Addition a1;
    a1.A(10);
    a1.B(50);
    a1.Display();
    return 0; 
}