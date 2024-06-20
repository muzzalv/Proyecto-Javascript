
document.addEventListener("DOMContentLoaded", ()=>{

document.getElementById("submitButtonWork").addEventListener('click', ()=> {
             
    const name = document.getElementById('nameWork').value.trim().toLowerCase();
    const surname = document.getElementById('surnameWork').value.trim().toLowerCase();
    const email = document.getElementById('emailWork').value.trim().toLowerCase();
    const number = document.getElementById('numberWork').value.trim();
    const area = document.getElementById('area').value.trim();
    const archivo = document.getElementById('file').files[0];

    
    if (!name || !surname || !email || !number || !area) {
        alert('Please, complete all fields.');
        return;
    }

    const formData = {
        name: name,
        surname: surname,
        email: email,
        number: number,
        area: area,
        archivo: file ? file.name : '' 
    };

    
    localStorage.setItem('workFormData', JSON.stringify(formData));

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thank you so much for the interest in our hotel, will contact you soon. ",
      showConfirmButton: false,
      timer: 4000
    });
    setTimeout( ()=>{location.reload()},4000 )  })    })


