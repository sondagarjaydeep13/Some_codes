#include<iostream>
using namespace std;
int main()
{
    int day,option;
    cout<<"Enter 1 to 7 for day";
    cin>>option;
    switch(option)
    {
    case 1:
     cout<<"Monday"<<endl;
     break;
    case 2:
    cout<<"Tuesday"<<endl;
     break;
     case 3:
     cout<<"Wendsday"<<endl;
     break;
     default:
     cout<<"Wrong Entery";
    }
    return 0;

}