
function Validate() {
    var strValidate = form.user_name.value.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (strValidate == -1) {
      document.getElementById("username").focus();
      document.getElementById("username").select();
      alert("Email invalid");
  
  
    }
    else {
  
  
      window.location.assign("home1.html", '_blank'); alert("Logged in Successfully!");
  
    }
  }
  
  
  