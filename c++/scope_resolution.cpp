#include<iostream>
using namespace std;
class Base{
    public :
    void Base1();
};
void Base::Base1(){
   cout<<"Base1 is calling "<<endl;
}
int main()
{
    Base b1;
    b1.Base1();
    return 0;
}