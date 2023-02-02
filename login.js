function validate()
{
    var strValidate=form.username.value.search(/[a-z@".com"]/);
    if(strValidate==-1)
    {
        document.getElementById("user").focus();
        document.getElementById("user").select();
        alert("Email invalid");
        
        
    }
    else{
        
       
        window.location.assign("home1.html",'_blank');alert("Logged in Successfully!");
        
    }
}

