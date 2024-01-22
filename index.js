let user = document.querySelector("#user");
let userinvalid = document.querySelector("#userinvalid");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let pass = document.querySelector("#pass");
let Repass = document.querySelector("#Repass");
let Emailinvalid = document.querySelector("#EmailInvalid");
let Passinvalid = document.querySelector("#Passinvalid");
let passinvalid2 = document.querySelector("#Passinvalid2");
let submit = document.querySelector("#Submit");
let phoneInvalid=document.querySelector("#Phoneinvalid");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submit.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
        if (user.value.length < 3) {
            user.style.borderColor = 'red';
            userinvalid.innerHTML="At least 3 character ";
            userinvalid.style.display="block";
        } else {
            user.style.borderColor = 'green'; // Reset border color if condition is not met
        }
        
        if(!emailRegex.test(email.value))
        {
            email.style.borderColor='red';
            
            Emailinvalid.style.display='block';
            Emailinvalid.innerHTML="Invalid Email";
           
        }
        else{
            email.style.borderColor='green';
            Emailinvalid.style.display='none';
        }
        if(phone.value.length<10 || phone.value.length>10)
        {
            phoneInvalid.style.display='block';
            phoneInvalid.innerHTML="Phone Number Should be 10 digit ";
            phone.style.borderColor='red';

        }
        else
        {
            phone.style.borderColor='green';
            phoneInvalid.style.display='none';
        }

        if(pass.value.length<6 )
        {
            pass.style.borderColor='red';
            Passinvalid.style.display='Block';
            Passinvalid.innerHTML='The Password Should be at least 6 character';
        
             
        }
        else{
            pass.style.borderColor='green';
            Passinvalid.style.display='none';
        }
        if(pass.value===Repass.value)
        {
            Repass.style.borderColor='green';
            passinvalid2.style.display='none';
        }
        else{
            Repass.style.borderColor='red';
            passinvalid2.innerHTML="The password doesn't match";
            passinvalid2.style.display="Block";
        }


 
});




