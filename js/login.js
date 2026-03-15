const signInBtn = document.getElementById("sign-in-btn");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");


const signIn = () => {
    const inputValue1 = inputUsername.value;
    const inputValue2 = inputPassword.value;
    if(inputValue1 == "admin" && inputValue2 == "admin123"){
        alert("Successful!")
        window.location.assign("home.html")
    }else{
        alert("invalid value!")
    }
}