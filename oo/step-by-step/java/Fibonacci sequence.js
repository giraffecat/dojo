function Fibonaccisequence(){
    var a=new Array();
    a[1]=1;
    a[2]=1
    for(var i=1;i<=98;i++)
        a[i+2]=a[i]+a[i+1];
    return a;
}
var result=Fibonaccisequence();
console.log(result);