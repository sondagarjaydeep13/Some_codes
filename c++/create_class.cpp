#include<iostream>
using namespace std;

class twosqure{
    int a,b,squre;
    public:
    void abvalue(){
        cout<<"Enter value of a:";
        cin>>a;
        cout<<"Enter value of b:";
        cin>>b;
    }
    void findsqure(){
          squre=(a+b)*(a+b);
          cout<<squre;
    }
};
int main()
{
    twosqure t1;
    t1.abvalue();
    t1.findsqure();
    
    return 0;
}