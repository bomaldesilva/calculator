
function add(){
    let number1=parseFloat(document.getElementById("number01").value);
    let number2=parseFloat(document.getElementById("number02").value);
    document.getElementById("ans").innerHTML=number1+number2;;
}
function sub(){
    let number1=parseFloat(document.getElementById("number01").value);
    let number2=parseFloat(document.getElementById("number02").value);
    document.getElementById("ans").innerHTML=number1-number2;
}
function mul(){
    let number1=parseFloat(document.getElementById("number01").value);
    let number2=parseFloat(document.getElementById("number02").value);
    document.getElementById("ans").innerHTML=number1*number2;
}
function div(){
    let number1=parseFloat(document.getElementById("number01").value);
    let number2=parseFloat(document.getElementById("number02").value);
    document.getElementById("ans").innerHTML=number1/number2;
}