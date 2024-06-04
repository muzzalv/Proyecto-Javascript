
document.addEventListener("DOMContentLoaded", ()=>{

    function turnMode( ){ 
        const body = document.body
        const currentClass = body.className;
    
        if (currentClass === "light-mode") {
            body.className = "dark-mode";
            localStorage.setItem('mode', 'dark-mode');
        } else {
            body.className = "light-mode";
            localStorage.setItem('mode', 'light-mode');
        }
    }
    
    
     document.body.className = "light-mode";
    
     const btnTurnMode = document.getElementById("btnBlack")
    
     btnTurnMode.addEventListener("click", turnMode)

     const form = document.getElementById("contactForm");
     const inputs = form.querySelectorAll('input');
     const btnSubmit = document.getElementById("submitButton");
 
     inputs.forEach(input => {
         input.addEventListener('change', (event) => {
             event.target.style.border = "2px solid blue"; 
         });
     });

   
 
     form.addEventListener('submit', (event) => {
         event.preventDefault(); 
 
         const formUser = {
             name: form.name.value,
             surname: form.surname.value,
             email: form.email.value,
             number: form.number.value,
             option2: form.option2.value
         };

         function submitUser() {
            localStorage.setItem("contactform", "formUser")
            alert("Submit sucess")
            window.location.reload()
    
        }


         btnSubmit.addEventListener("click", submitUser)

       
         


}
)   } ) 


 
 
 


