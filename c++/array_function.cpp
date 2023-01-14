#include<iostream>
using namespace std;
void array(int a[5]){
    for(int i=0;i<5;i++){
       cout<<a[i]<<endl;
    }
}
int main()
{
    int a[5]={10,11,12,13,14};
    a[5];
    array(a);
    return 0;
}