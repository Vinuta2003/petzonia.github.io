function validate()
{
    var strValidate=form.username.value.search(/[@".com"]/);
    if(strValidate==-1)
    {
        alert("Email invalid");
        
    }
    else{
        
       
        window.location.assign("home1.html",'_blank');alert("Logged in Successfully!");
        
    }
}

