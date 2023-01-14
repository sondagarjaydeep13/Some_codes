#include<iostream>
using namespace std;
int Pattern();        // Here We Declare The Function......
int main()
{
    Pattern();
    cout<<"..............."<<endl;
      Pattern();
    return 0;
}
int Pattern(){
    int i,j;
    for(i=1;i<=5;i++){
        for(j=1;j<=i;j++){
            cout<<" *";
        }
        cout<<endl;
    }
}