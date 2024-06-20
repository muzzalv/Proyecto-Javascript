

document.addEventListener("DOMContentLoaded", ()=>{ 
    document.getElementById('submitButtonContact').addEventListener('click', () => {
    const name = document.getElementById('nameContact').value.trim().toLowerCase();
    const surname = document.getElementById('surnameContact').value.trim().toLowerCase();
    const email = document.getElementById('emailContact').value.trim().toLowerCase();
    const number = document.getElementById('numberContact').value.trim().toLowerCase();
    const promotions = document.getElementById('option2').checked;

    
    if (!name || !surname || !email || !number) {
        alert('Please, complete all fields.');
        return;
    }

    
    const formData = {
        name: name,
        surname: surname,
        email: email,
        number: number,
        promotions: promotions
    };

    
    localStorage.setItem('contactForm', JSON.stringify(formData));

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your form has been sent correct",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout( ()=>{location.reload()},1500 ) 
  })  })


