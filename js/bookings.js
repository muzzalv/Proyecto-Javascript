document.addEventListener("DOMContentLoaded", () => {
  const btnPrice = document.querySelectorAll(".btn-booking");
  const reminderModal = document.getElementById("reminderModal");
  const closeButton = document.querySelector(".close-button");

  const room = document.getElementById("bookRoom");
  const descriptionRoom = document.getElementById("roomDescriptions");
  const roomPrice = document.getElementById("roomPrice");

  function saveBooking(event) {
      const card = event.target.closest('.card');
      const title = card.querySelector(".card-title").innerText;
      const description = card.querySelector(".card-text").innerText;
      const price = card.querySelector(".card-price").innerText;

      const list = {
          title: title,
          description: description,
          price: price
      };

      let saveData = JSON.parse(localStorage.getItem('bookings')) || [];

      saveData.push(list);

      localStorage.setItem('bookings', JSON.stringify(saveData));

    
      room.innerText = `Room: ${title}`;
      descriptionRoom.innerText = `Description: ${description}`;
      roomPrice.innerText = `Price: ${price}`;

      Swal.fire({
          position: "center",
          icon: "success",
          title: "Your booking has been saved",
          showConfirmButton: false,
          timer: 2000
      }).then(() => {
          reminderModal.style.display = "block";
      });
  }

  btnPrice.forEach(button => {
      button.addEventListener("click", saveBooking);
  });

  closeButton.addEventListener("click", () => {
      reminderModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
      if (event.target == reminderModal) {
          reminderModal.style.display = "none";
      }
  });
});











