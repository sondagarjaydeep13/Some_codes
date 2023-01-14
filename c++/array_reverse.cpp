#include<iostream>
using namespace std;
int main()
{
    int array[5]={1,2,3,4,5};
    cout<<"Simple Array"<<endl;
    for(int j=0;j<=4;j++){
        cout<<array[j]<<"\t";
    }
    cout<<"Reveres Array is"<<endl;
    for(int i=4;i>=0;i--){
   cout<<array[i]<<"\t";
    }

    return 0;
}