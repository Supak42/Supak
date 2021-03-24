window.onload = pageLoad;
var Input_regis = [];
function pageLoad(){
	var form = document.getElementById("myForm");
 	form.onsubmit = validateForm;
    
}
function validateForm() {
    var p = document.forms["myForm"]["password"];
    var rp = document.forms["myForm"]["repassword"];
    if(p.value == rp.value)
    {
        alert("Save ! ! !");
    }
    else if(p.value != rp.value)
    {
        alert("try your password again ! ! !");
        return false;
    }   
    
}
