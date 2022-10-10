let username = document.getElementById("user");
let password = document.getElementById("password");
let flag = 1;

function validateform(){
    
    //e.preventDefault();
    
    if(username.value==""){
       document.getElementById("userError").innerHTML = "user name is empty"
       flag=0;
    }else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "user name is required more than 3 latter"
        flag=0;
    }
    else{
        document.getElementById("userError").innerHTML = "";
        flag=1;
    }

    if(password.value==""){
        document.getElementById("passError").innerHTML = "Password is empty"
        flag=0;
     }else{
        document.getElementById("passError").innerHTML = "";
        flag=1;
     }
     
   if(flag){
       return true;
   }else {
       return false;
   }

   
    
}