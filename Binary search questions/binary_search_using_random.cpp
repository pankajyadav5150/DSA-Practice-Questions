#include<iostream>
#include<vector>
#include <cstdlib>  // for rand(), srand()
#include <ctime>    // for time()
using namespace std;
int main(){
    
    cout<<"Enter Size of Array :";
    int n;
    cin>>n;
    cout<<"Enter Elements :" <<endl;
    vector<int> arr(n);
    vector<int> preMax(n);
    vector<int> sufMin(n);
    int value;
    for(int i=0;i<n;i++){
        cin>>value;
        arr[i]=value;
    }
    for(int i=0;i<n;i++){
      preMax[i]=(i==0)?arr[0]:max(arr[i],preMax[i-1]);
    }
    for(int i=n-1;i>=0;i--){
        sufMin[i]=(i==n-1)?arr[n-1]:min(arr[i],sufMin[i+1]);
    }
    // main finding the element who always findable
    int start=0;
    int end=n-1;
    int count=0;
    for(int i=0;i<n;i++){
        int leftMax=(i==0)?INT_MIN:preMax[i-1];
        int rightMin=(i==n-1)?INT_MAX:sufMin[i+1];
        if(arr[i] > leftMax && arr[i] < rightMin) count++;
    }
    cout<<"Searchable elementa are : "<<count;

    return 0;
}
