#include<iostream>
using namespace std;
class Area{
    int r,l,w,L,B,H;
    public :
    Area()
    {
        cout<<"cunstructor is calling..!!"<<endl;
    }
    Area(int r){
        this->r=r;
    }
    Area(int l,int w){
        this->l=l;
        this->w=w;
    }
    Area(int L,int B,int H){
        this->L=L;
        this->B=B;
        this->H=H;
    }
    void areaCircle(){
        cout<<"Area of Circle is :"<<3.14*r*r<<endl;
    }
    void areaRectangle(){
        cout<<"Area of Rectangle :"<<l*w<<endl;
    }
    void areaCuboid(){
        cout<<"Area of Cuboid is :"<<2*(L*B+B*H+H*L)<<endl;
    }
};
int main()
{
    int r,l,w,L,B,H;
    cout<<"Enter the r for Area of Circle :"<<endl;
    cin>>r;
    cout<<"Enter the l and w for Area of Rectangle :"<<endl;
    cin>>l;
    cin>>w;
    cout<<"Enter the L,B and H for Area of Cuboid :"<<endl;
    cin>>L;
    cin>>B;
    cin>>H;
    Area a1(r),a2(l,w),a3(L,B,H);
    a1.areaCircle();
    a2.areaRectangle();
    a3.areaCuboid();
    return 0;
    
}