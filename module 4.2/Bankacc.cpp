#include<iostream>
#include<string.h>
using namespace std;
class Bank{
    int Acno;
    char name[50],Actype[50];
    float Balance;
    public :
    Bank(int Acno,char *name1,char *Actype1,float Balance){      //Here use String copy function for the Display
        this->Acno=Acno;
        strcpy(name,name1);
        this->Balance=Balance;
        strcpy(Actype,Actype1);
    }
    void deposit();
    void withdraw();
    void display();
};
void Bank::deposit()
{
    int Deposit;
    cout<<"\nEnter the Deposit Ammount : ";
    cin>>Deposit;
    Balance+=Deposit;
}
void Bank::withdraw()
{
    int Withdraw;
    cout<<"\nEnter The Withdraw Ammount : ";
    cin>>Withdraw;
    if (Withdraw>Balance){
     cout<<"Un avilable Balanece"<<endl;
     Balance-=Balance;
    }
}
void Bank::display()
{
    cout<<"\n_________Transaction Detail_________"<<endl;
    cout<<"\nAccount Number :"<<Acno<<endl;
    cout<<"\nAccount Holder Name :"<<name<<endl;
    cout<<"\nAccount type :"<<Actype<<endl;
    cout<<"\nAccount Balance :"<<Balance<<endl;
}
int main()
{
    int Acno;
    char name[50],Actyp[50];
    float Balance;
    cout<<"\n_____Enter The Bank Detail____"<<endl;
    cout<<"\n *****************************"<<endl;
    cout<<"\nEnter Account Number :"<<endl;
    cin>>Acno;
    cout<<"\nEnter Account Holder Name :"<<endl;
    cin>>name;
    cout<<"\nEnter Account Type :"<<endl;
    cin>>Actyp;
    cout<<"\nEnter Account Balance :"<<endl;
    cin>>Balance;
    
    Bank b1(Acno,name,Actyp,Balance);
    b1.deposit();
    b1.withdraw();
    b1.display();
    return 0;

}