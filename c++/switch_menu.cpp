#include<iostream>
using namespace std;
int main()
{
    int  number;
    cout<<":Select Menu:"<<endl;
    cout<<"Press 1 For Panjabi:"<<endl;
    cout<<"press 2 for Guajarati:"<<endl;
    cout<<"press 3 for Kathiyavadi:"<<endl;
    cin>>number;
    switch(number){
           case 1:
           cout<<".......Todays Available Menu........"<<endl;
           cout<<"Panir Tikka masala,Panir bhuji,Panir angare"<<endl;
           break;
           case 2:
           cout<<"........Todays Available Menu........"<<endl;
           cout<<"Roti,dal,began,aalo Sabaji"<<endl;
           break;
           case 3:
           cout<<".........Todays Available Menu........."<<endl;
           cout<<"Kadhi khichadi,roti,puri ,sev tameta"<<endl;
           break;
           default:
           cout<<"Invalide input..!!"<<endl;
    }
    return 0;
}