
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();


// Navbar //
const navBarToggleBtn = document.getElementById("navbar-profile-btn");

function clicked() {
  let popup = document.getElementById("navbar-popup");
  if (popup.style.display !== "block") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}
navBarToggleBtn.addEventListener("click", clicked);






