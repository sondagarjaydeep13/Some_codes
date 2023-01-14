#include<iostream>
using namespace std;
class Cal{
    protected:
    int a;
    int b;
    public:
    void setDat(int a,int b){
        this->a=a;
        this->b=b;
    }
};
class Addition:public Cal{
    public:
    void Display(){
        cout<<"Sum of the a and b is :"<<a+b<<endl;
    }
};
int main()
{
    Addition object;
    object.setDat(10,20);
    object.Display();
    return 0;
}
