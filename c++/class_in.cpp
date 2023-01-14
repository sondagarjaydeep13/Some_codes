#include<iostream>
using namespace std;
class Base{
    public:
    void input(){
        cout<<"Base class is calling..!!"<<endl;
    }
};
int main()
{
    Base object;
    object.input();
    return 0;
}
