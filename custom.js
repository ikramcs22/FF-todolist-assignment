
function validateForm(){
        
    var inputEmail=document.forms["signIn"]["inputEmail"].value;
    var inputPassword=document.forms["signIn"]["inputPassword"].value;
    
    if(inputEmail == ""){
        alert("Please enter your email");
        
        return false;
    }
    if(inputPassword == ""){
        alert("Please enter your password");
        return false;
    }


}


