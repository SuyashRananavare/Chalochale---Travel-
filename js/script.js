
function signup() {
    let email = document.getElementById("email").value
   let password = document.getElementById("password").value
    let error = document.getElementById("error");

    if(email.endsWith('@gmail.com')&& password.length>=8){
        if(email === 'admin1234@gmail.com' && password ==='12345678'){
        window.location.href='index.html';
        }
    }
    else{
        error.innerText='Invalid Credentials';
    }
}