#include<iostream>
using namespace std;
class Animal{
    public:
    void Animalsound(){
        cout<<"Animal sound....!!!"<<endl;
    }
};
class Cow:public Animal{
    public:
    void Cowsound(){
        cout<<"Cow-Hmmm Hmmm Hmmm"<<endl;
    }
};
class Dog:public Animal{
    public:
    void Dogsound(){
        cout<<"Dog-How How How "<<endl;
    }
};
int main()
{
    Animal objanimal;
    Cow objcow;
    Dog objdog;
    objcow.Animalsound();
    objcow.Cowsound();
    objdog.Animalsound();
    objdog.Dogsound();
    return 0;
}