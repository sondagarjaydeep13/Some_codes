#include<iostream>
#include<conio.h>
using namespace std;
std :: string takePasswdFromUser(){
    string ipt=" ";
    char ipt_ch;
    while(true){
        ipt_ch=getch();
        if(ipt_ch<32){
            cout<<endl;
            return ipt;
        }
        ipt.push_back(ipt_ch);
    }
}
int main()
{
    string input;
    cout<<"Set The Password :";
    input=takePasswdFromUser();
    cout<<input<<endl;
}
