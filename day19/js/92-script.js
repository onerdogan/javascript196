document.getElementById("formLogin").addEventListener("submit",(e)=>{

    e.preventDefault();

    const inputEmail=document.getElementById("txtEmail")
    const inputPassword=document.getElementById("txtPassword")

    try {
        const emailValue=inputEmail.value;
        const passwordValue=inputPassword.value;
        if(!emailValue || !isEmailValid(emailValue)) throw new Error("Email addresi geçersiz")
        if(!passwordValue || !isPasswordValid(passwordValue)) throw new Error("şifre geçersiz")
        e.target.submit();
    } catch (error) {
        alert(error.message)
    }
})

const isEmailValid=(mail)=>{

    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexEmail.test(mail);
}

const isPasswordValid=(password)=>{
    let regexPassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return regexPassword.test(password);



}

/* let mail="deniz@gmail"
console.log(isEmailValid(mail)) 
console.log(isPasswordValid("Al.if1abah-Ca"))*/