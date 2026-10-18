// ------------------------------------------------------------
// script.js - form checking for the MUST portal (login + sign up)
// both pages load this same file, so I check which form exists first
// ------------------------------------------------------------


// ---------- small helper functions I reuse a lot ----------

// shows an error under a field and turns its border red
function showError(inputId, errorId, message) {
  document.getElementById(errorId).textContent = message;
  document.getElementById(inputId).classList.add("invalid");
}

// clears the error when the field is fine
function clearError(inputId, errorId) {
  document.getElementById(errorId).textContent = "";
  document.getElementById(inputId).classList.remove("invalid");
}

// simple email pattern: something@something.something, no spaces
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// ---------- LOGIN PAGE ----------
const loginForm = document.getElementById("loginForm");

// this only runs if the login form is on the page
if (loginForm) {

  // show / hide password button
  const toggleBtn = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  toggleBtn.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";      // reveal it
      toggleBtn.textContent = "Hide";
    } else {
      passwordInput.type = "password";  // hide it again
      toggleBtn.textContent = "Show";
    }
  });

  // when the user clicks Sign in
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stops the page from refreshing

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;
    let allGood = true; // turns false if any check fails

    // check the email
    if (email === "") {
      showError("email", "emailError", "Please enter your email address.");
      allGood = false;
    } else if (!isValidEmail(email)) {
      showError("email", "emailError", "That email does not look right.");
      allGood = false;
    } else {
      clearError("email", "emailError");
    }

    // check the password
    if (password === "") {
      showError("password", "passwordError", "Please enter your password.");
      allGood = false;
    } else {
      clearError("password", "passwordError");
    }

    // no real server yet, so I just show a message to prove it works
    const message = document.getElementById("loginMessage");
    if (allGood) {
      message.textContent = "Details look good. (Demo only, there is no server connected yet.)";
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  });
}


// ---------- CREATE ACCOUNT PAGE ----------
const signupForm = document.getElementById("signupForm");

// this only runs if the sign up form is on the page
if (signupForm) {

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const surname = document.getElementById("surname").value.trim();
    const otherNames = document.getElementById("otherNames").value.trim();
    const countryCode = document.getElementById("countryCode").value;
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    let allGood = true;

    // names: letters, spaces, hyphens and apostrophes only (so no numbers)
    const namePattern = /^[A-Za-z][A-Za-z\s'-]*$/;

    // check surname
    if (surname === "") {
      showError("surname", "surnameError", "Please enter your surname.");
      allGood = false;
    } else if (!namePattern.test(surname)) {
      showError("surname", "surnameError", "Use letters only, no numbers.");
      allGood = false;
    } else {
      clearError("surname", "surnameError");
    }

    // check other names
    if (otherNames === "") {
      showError("otherNames", "otherNamesError", "Please enter your other names.");
      allGood = false;
    } else if (!namePattern.test(otherNames)) {
      showError("otherNames", "otherNamesError", "Use letters only, no numbers.");
      allGood = false;
    } else {
      clearError("otherNames", "otherNamesError");
    }

    // check phone: digits only, and 9 to 10 digits long
    // (0770000000 is 10 digits with the zero, 770000000 is 9 without it)
    if (phone === "") {
      showError("phone", "phoneError", "Please enter your phone number.");
      allGood = false;
    } else if (!/^\d{9,10}$/.test(phone)) {
      showError("phone", "phoneError", "Enter 9 or 10 digits, numbers only.");
      allGood = false;
    } else {
      clearError("phone", "phoneError");
    }

    // check email
    if (email === "") {
      showError("email", "emailError", "Please enter your email address.");
      allGood = false;
    } else if (!isValidEmail(email)) {
      showError("email", "emailError", "That email does not look right.");
      allGood = false;
    } else {
      clearError("email", "emailError");
    }

    // everything passed, so show the success message
    const message = document.getElementById("successMessage");
    if (allGood) {
      // drop the leading zero so the full number reads like +256770000000
      const cleanPhone = phone.startsWith("0") ? phone.slice(1) : phone;
      message.textContent =
        "Thank you " + otherNames + "! A temporary password will be sent to " +
        email + " (phone: " + countryCode + cleanPhone + "). Demo only.";
      message.style.display = "block";
      signupForm.reset(); // empties the form
    } else {
      message.style.display = "none";
    }
  });
}