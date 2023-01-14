#include<iostream>
using namespace std;
class Base{
    public :
    void Base1(){
        cout<<"Base class is call"<<endl;
    }
};
int main()
{
    Base b1;
    b1.Base1();
    return 0;
}