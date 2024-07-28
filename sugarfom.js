function login() {
    document.getElementById('inputbox').style.display ="none"
     document.getElementById('inputbox2').style.display ="block"

}  
function signup() {
    document.getElementById('inputbox').style.display ="block"
     document.getElementById('inputbox2').style.display ="none"

}  
   function eye(){
   let password = document.getElementById('Password')
   let eyeicon = document.getElementById('eye-icon')

   if(password.type === "password"){
    password.type = "text"
    eyeicon.classList.remove('fa-eye-slash')
    eyeicon.classList.add('fa-eye')
   }
   else{
    password.type = "password";
    eyeicon.classList.remove('fa-eye')
    eyeicon.classList.add('fa-eye-slash')
   }
   }
