const input =document.getElementById("input")

function reverseString(str){
return str.split("").reverse().join("")
}


function check(){
    const value=input.value
    const reverse=reverseString(value)
    if(value===reverseString(value)){
        alert("palindrom")
    }
    else{
        alert("not a palindrom")
    }
    input.value=""
}