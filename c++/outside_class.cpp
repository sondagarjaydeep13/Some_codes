#include<iostream>
using namespace std;
class pattern{
    public:
    void mypattern();
};
void pattern::mypattern(){
    int i,j;
    for(i=1;i<=5;i++){
        for(j=1;j<=5;j++){
            cout<<" *"; 
        }
        cout<<endl;
    }
}
int main()
{
    pattern object_pattern;
    object_pattern.mypattern();
    return 0;
}