#include<stdio.h>
int* printarr(int a[])
{   for(int i=0; i<3;i++)
        printf("%d",a[i]);
    for(int i=0; i<3;i++)
        a[i]*=2;
    for(int i=0; i<3;i++)
        printf("%d",a[i]);
    return a;
}
int main()
{
    int a[3]={2,3,4};

    int *b =printarr(a);
    for(int i=0; i<3;i++)
        printf("%d",a[i]);
    for(int i=0; i<3;i++)
        printf("%d",*(b+i));
    return 0;
}