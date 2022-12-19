#include<iostream>
using namespace std;
class Maximum{
    int a,b;
    public :
    void input()
    {
        cout<<"Enter the two Value :"<<endl;
        cin>>a;
        cin>>b;
    }
    friend void Max(Maximum m);
};
void Max(Maximum m)
{
    if (m.a>m.b)
    {
        cout<<"Maximum is :"<<m.a<<endl;
    }
    else
    {
        cout<<"Maximum is :"<<m.b<<endl;
    }
}
int main()
{
    Maximum m;
    m.input();
    Max(m);
    return 0;
}