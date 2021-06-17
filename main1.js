var a=0;
var b1;
var aa="";
function fun(x,name1){
a=a+x;
b1=a;

aa=aa+"<br>"+name1;
localStorage.setItem("key2",aa);

//alert(a);
localStorage.setItem("key",a);
}

function fun3(y){
    
    document.getElementById(y).style.backgroundColor='Pink';  
                   
}

function fun5(){
    b1= localStorage.getItem("key2")+"<br><br>Total is:"+localStorage.getItem("key");

    document.getElementById("parae").innerHTML=b1;
}
fun5();