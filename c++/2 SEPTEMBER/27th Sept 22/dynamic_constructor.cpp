#include <iostream>
using namespace std;

class Area
{
    int r, l, w, L, B, H;
    float x,y;

public:
 ~Area(){
        cout<<"Destructor is calling.!!"<<endl;
    }
    Area()
    {
        cout << "constructor is calling..." << endl;
    }
    Area(int r)
    {
        this->r = r;
    }
    Area(int l, int w)
    {
        this->l = l;
        this->w = w;
    }
    Area(float x, float y)
    {
        this->x = x;
        this->y = y;
    }
    Area(int L, int B, int H)
    {
        this->L = L;
        this->B = B;
        this->H = H;
    }
    void areaCircle()
    {
        cout << "Area of circle is " << 3.14 * r * r << endl;
    }
    void areaRectangle()
    {
        cout << "Area of Rectangle is " << l * w << endl;
    }
    void areaCuboid()
    {
        cout << "Area of Cuboid is " << 2 * (L * B + B * H + H * L) << endl;
    }
   
};

int main()
{
    Area a1(5, 6), a2, a3(4, 5, 6), a4(3),a5(float(4.5),float(2.3));
    a1.areaRectangle();
    a3.areaCuboid();
    a4.areaCircle();

    return 0;
}