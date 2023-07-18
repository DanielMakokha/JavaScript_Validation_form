const form=document.querySelector('.form');
const name=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');;

form.addEventListener('submit',e=>{
    e.preventDefault();
    validatedInputs();
})
const setError=(element,message) =>{
    const input=element.parentElement;
    const error=input.querySelector('.error');
    error.textContent =message;
    input.classList.add('error');
    input.classList.remove('success');
}

const success=element =>{
    const input=element.parentElement;
    const error=input.querySelector('.error');
    error.textContent ='';
    input.classList.remove('error');
    input.classList.add('success');
}
// Checking if the input is email
const validemail= email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

//Trimming all white spaces
const validatedInputs=() =>{
    const nameValue=name.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
}
