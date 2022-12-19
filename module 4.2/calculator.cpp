#include<iostream>
using namespace std;
class A{
    int a,b;
    public :
    void setData(int a,int b){
        this->a=a;
        this->b=b;
    }
    void Addition(){
        cout<<"Addition of a and b :"<<a+b<<endl;
    }
    void Subtraction(){
        cout<<"Subtraction of a and b :"<<a-b<<endl;
    }
    void Multi(){
        cout<<"Multiplication of a and b :"<<a*b<<endl;
    }
    void Division(){
        cout<<"Division of a and b :"<<a/b<<endl;
    }
};
int main()
{
    A a1;
    a1.setData(10,5);
    a1.Addition();
    a1.Subtraction();
    a1.Multi();
    a1.Division();
    return 0;

}