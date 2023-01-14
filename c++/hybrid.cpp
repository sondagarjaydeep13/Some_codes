#include<iostream>
using namespace std;
class Base{
    public :
    void BaseDisplay(){
        cout<<"Base Class calling.."<<endl;
    }
};
class Base1:public Base{
    public :
    void Base1Display(){
        cout<<"Base 1 class is calling.."<<endl;
    }
};
class Base2{
    public :
    void Base2Display(){
        cout<<"Base 2 class is calling .."<<endl;
    }
};
class Base3:public Base1,public Base2{
    public:
    void Base3Display(){
        cout<<"Base 3 class is calling.."<<endl;
    }
};
int main(){
    Base3 b1;
    b1.Base1Display();
    b1.Base2Display();
    b1.Base3Display();
    b1.BaseDisplay();
    return 0;
}