(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
});

// tax-toggle option

// Index-Page-Card //
let taxSwitch = document.getElementById("flexSwitchCheckDefault");
taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }
});

// nav bar

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
