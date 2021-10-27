const form = document.getElementById("form");
const header = document.getElementById("header");

const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else if (usernameValue.length < 6 || usernameValue.length > 12) {
    setErrorFor(username, "Username must be between 6 and 12 characters");
  } else if (!isUserName(usernameValue)) {
    setErrorFor(username, "Username should not contain special characters");
  } else {
    setSuccessFor(username);
  }
  if (phoneValue === "") {
    setErrorFor(phone, "Phone Number cannot be blank");
  } else if (!isPhone(phoneValue)) {
    setErrorFor(phone, "Phone Number is not valid");
  } else {
    setSuccessFor(phone);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "Password should be at least 6 characters");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password2 cannot be blank");
  } else if (password2Value.length < 6) {
    setErrorFor(password2, "Password2 should be at least 6 characters");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  header.className = "header error";
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  header.className = "header success";
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhone(phone) {
  return /^\d{10}$/.test(phone);
}

function isUserName(username) {
  return /^[a-zA-Z]([._-]?[a-zA-Z0-9]+)*$/.test(username);
}
