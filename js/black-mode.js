
document.addEventListener("DOMContentLoaded", ()=>{

  

    function turnMode( ){ 
        const body = document.body
        const currentClass = body.className;
    
        if (currentClass === "light-mode") {
            body.className = "dark-mode";
            Toastify({
                text: "Black mode activated",
                className: "info",
                style: {
                  background: "linear-gradient(to left, #C3ACD0, #674188)",
                },
                offset: {
                    x: 200, 
                    y: 10 
                  }, 

               } ).showToast();
            localStorage.setItem('mode', 'dark-mode');
        } else {
            body.className = "light-mode";
            localStorage.setItem('mode', 'light-mode');
        } }
          document.body.className = "light-mode"
          const btnTurnMode = document.getElementById("btnBlack")
          btnTurnMode.addEventListener("click", turnMode)  });
            