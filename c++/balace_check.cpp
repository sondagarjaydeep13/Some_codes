#include<iostream>
using namespace std;
int main()
{
    float balance,rate,duration,cost,balance1;
    cout<<"Enter Your current Balance :";
    cin>>balance1;
    cout<<"Enter Your Calling rate :";
    cin>>rate;
    cout<<"Enter your Calling Duration :";
    cin>>duration;
    cost=duration*rate;
    balance=balance1-cost;
    cout<<"Your Final Calling Balace Detail"<<endl;
    cout<<"call Duration :"<<duration<<endl;
    cout<<"Balace :"<<balance<<endl;
    return 0;
}
