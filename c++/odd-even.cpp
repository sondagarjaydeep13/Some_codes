#include<iostream>
using namespace std;
int main(){
    int odd,even,number;
    cout<<"Enter Number :";
    cin>>number;
    if(number==0){
        cout<<"Number is Zero"<<endl;
    }
    else if(number%2==0){
        cout<<"Number is odd"<<endl;
    }
    else{
        cout<<"number is even"<<endl;
    }
    return 0;
}