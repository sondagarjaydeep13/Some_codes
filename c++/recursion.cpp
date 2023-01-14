#include<iostream>
using namespace std;
int sum(int k){
    if(k>0){
        return k+sum(k-1);
    }
    else{
        return 0;
    }
}
int main()
{
    int s1=sum(10);
    cout<<s1;
    return 0;
}