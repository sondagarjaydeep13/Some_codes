#include<iostream>
using namespace std;
int main()
{
    int number;
    cout<<"Enter number :";
    cin>>number;
    while (number>0){

    
    if(number%2==0){
        cout<<"Number is even"<<endl;
    }
    else{
        cout<<"Number is odd"<<endl;
    }
    break;
    }
    return 0;
}