function validate()
{
    var strValidate=form.username.value.search(/[@".com"]/);
    if(strValidate==-1)
    {
        alert("Email invalid");
        
    }
    else{
        
        window.location.assign("tablecolo.html",'_blank');alert("email valid");
        
    }
    

}