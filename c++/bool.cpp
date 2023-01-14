#include<iostream>
using namespace std;
class matrixA{
    public:
    int a[2][2];
    void A_input(){
         for( int i=0;i<2;i++){
            for(int j=0;j<2;j++){
               cout<<"enter elements value :";
               cin>>a[i][j];
            } 
         }
    }
    void A_output(){
        for(int i=0;i<2;i++){
            for(int j=0;j<2;j++){
                cout<<a[i][j]<<"\t";
            }
              cout<<endl;
        }
    }
};
class matrixB{
    public:
    int b[2][2];
    void B_input(){
            for(int i=0;i<2;i++){
                for(int j=0;j<2;j++){
                    cout<<"enter second matrix elements:";
                    cin>>b[i][j];
                }
            }              
    }
    void B_output(){
        for(int i=0;i<2;i++){
            for(int j=0;j<2;j++){
                cout<<b[i][j]<<"\t";
            }
            cout<<endl;
        }
    }
};
class matrixC:public matrixA,public matrixB{
    public:
    int c[2][2];
    void C_output(){
        for(int i=0;i<2;i++){
            for(int j=0;j<2;j++){
                c[i][j]=a[i][j]+b[i][j];
            }
        }
        for(int i=0;i<2;i++){
            for(int j=0;j<2;j++){
                  cout<<c[i][j]<<"\t";
            }
            cout<<endl;
        }
    }
};
int main()
{
        matrixC C_object;
        cout<<".........A matrix input......"<<endl;
        C_object.A_input();
        cout<<".........B matrix input......."<<endl;
        C_object.B_input();
        cout<<"......A matrix output is........"<<endl;
        C_object.A_output();
        cout<<"......B matrix output is.........."<<endl;
        C_object.B_output();
        cout<<".....Sum of matrix A and matrix B is......"<<endl;
        C_object.C_output();
        return 0;
}