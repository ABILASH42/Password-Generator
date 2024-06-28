

function generate(){
    
    const length = document.getElementById("length").value;
    const lowercase = document.getElementById("lowercase");
    const uppercase = document.getElementById("uppercase");
    const number = document.getElementById("number");
    const symbol = document.getElementById("symbol");
    const para = document.getElementById("password");
    

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=.,/?";

    allowedchars = "";
    password = "";

    includelowercase = lowercase.checked ? true : false;
    includeuppercase = uppercase.checked ? true : false;
    includenumber = number.checked ? true : false;
    includesymbol = symbol.checked ? true : false;

    allowedchars += includelowercase ? lowercasechars : "";
    allowedchars += includeuppercase ? uppercasechars : "";
    allowedchars += includenumber ? numbers : "";
    allowedchars += includesymbol ? symbols : "";

    if(length<=0){
        para.innerHTML = 'Password length must be atleast 1.';
        return;
    }

    if(allowedchars.length === 0){
        para.innerHTML =  'At least 1 set of character need to be selected';
        return;
    }

    for(let i=0;i<length;i++){
        const randomindex = Math.floor(Math.random()*allowedchars.length);
        password += allowedchars[randomindex];

    }
    
    para.innerHTML =`Your password is : ${password}` ;
    allowedchars = "";
}