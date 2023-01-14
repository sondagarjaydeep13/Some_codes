#include <iostream>
using namespace std;

class Shop
{
    static int id;
    string name;
    int price;

public:
    void setData(string n, int p)
    {
        name = n;
        price = p;
    }
    void getData()
    {
        id++;
        cout << id << " " << name << " " << price << endl;
    }
};

int Shop::id=100;

int main()
{
    Shop s1, s2, s3, s4, s5;
    s1.setData("Sugar", 56);
    s2.setData("Salt", 30);
    s3.setData("Tea", 400);
    s4.setData("Coffee", 340);
    s5.setData("powder", 450);
    s1.getData();
    s2.getData();
    s3.getData();
    s4.getData();
    s5.getData();
    return 0;
}