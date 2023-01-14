#include<iostream>
using namespace std;

class Base{
    protected:
    int a, b;
    public:
    void setData(int a,int b){
        this->a=a;
        this->b=b;
    }
};

class Derived:public Base{
    public:
    void display(){
        cout<<"the value of a is "<<a<<endl;
        cout<<"the value of b is "<<b<<endl;
    }
};

int main()
{
    Derived d1;
    d1.setData(4,5);
    d1.display();
return 0;
}