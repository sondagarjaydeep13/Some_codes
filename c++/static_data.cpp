#include<iostream>
using namespace std;
class Shop{
    static int id;
    string name;
    int price;
    public:
    void setData(string n,int p){
        n=name;
        p=price;
    }
    void input(){
        cout<<"Enter the Food Name :"<<endl;
        cin>>name;
        cout<<"Enter the Price :"<<endl;
        cin>>price;
    }
    void diplay(){
        id++;
        cout<<"Food id Number is :"<<id<<endl;
        cout<<"Your Selected Food name is :"<<name<<endl;
        cout<<"Your Food Price is :"<<price<<endl;
    }
};
int Shop::id;
int main()
{
    Shop s1;
    s1.input();
    s1.diplay();
    return 0;
}