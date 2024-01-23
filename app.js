const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("cpassword");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateInput()
})

function validateInput(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();

    if(usernameVal===""){
        setError(username,"Username is Required")
    }else{
        setSuccess(username)
    }

    if(emailVal===""){
        setError(email,"Email is Requires")
    }else if(!validateEmail(emailVal)){
        setError(email,"Please Enter Valid Email")
    }else{
        setSuccess(email)
    }

    if(passwordVal===""){
        setError(password,"Password is required")
    }else if(passwordVal.length<8){
        setError(password,"Password is atleast 8 letters")
    }else{
        setSuccess(password)
    }

    if(cpasswordVal===""){
        setError(cpassword,"Confirm Password is Requires");
    }else if(passwordVal!=cpasswordVal){
        setError(password,"Password does not match")
    }else{
        setSuccess(cpassword)
    }

}

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error");

    errorElement.innerText=message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}

function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error");

    errorElement.innerText="";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}

const validateEmail=(mail)=>{
    return mail.toLowerCase().match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );
}