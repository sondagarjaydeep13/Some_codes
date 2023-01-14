// Using scope of resulution to check the number is armstong or not,,
#include<iostream>
using namespace std;
class  Armstrong{
          public:
       void ArmstrongNo();
};
void Armstrong::ArmstrongNo()
{
    int number,sum=0,rem,temp;
    cout<<"Enter the Number :";
    cin>>number;
    temp=number;
    while(number!=0){                  
          rem=number%10;
          sum=sum+rem*rem*rem;
          number=number/10;
    }
    
        if(sum==temp){
            cout<<"Number is armstorng"<<endl;
        }
        else{
            cout<<"Number is not armstrong";
        }
    
}
int main(){
    Armstrong object;
    object.ArmstrongNo();
    return 0;
}
