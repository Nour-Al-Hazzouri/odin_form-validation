const form = document.querySelector("form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postalCode = document.querySelector("#code");
const passwordOne = document.querySelector("#password");
const passwordTwo = document.querySelector("#password-2");
const submit = document.querySelector("#submit-btn");

const emailError = document.querySelector("#email-error");
const countryError = document.querySelector("#country-error");
const postalCodeError = document.querySelector("#code-error");
const passwordError = document.querySelector("#password-error");

let emailPass = false;
let countryPass = false;
let postalCodePass = false;
let passwordPass = false;

function validateEmail() {
  const emailValidity = email.validity;
  if (!email.checkValidity()) {
    emailPass = false;
    if (emailValidity.typeMismatch) {
      emailError.textContent = "Not a correct email format";
    } else if (emailValidity.valueMissing) {
      emailError.textContent = "Email cannot be empty";
    }
  } else {
    emailError.textContent = "";
    emailPass = true;
  }
}

function validateCountry() {
  const countryValidity = country.validity;
  if (!country.checkValidity()) {
    countryPass = false;
    if (countryValidity.tooShort || countryValidity.tooLong) {
      countryError.textContent =
        "Country name should be between 4 and 52 characters";
    } else if (countryValidity.valueMissing) {
      countryError.textContent = "Country name cannot be empty";
    }
  } else {
    countryError.textContent = "";
    countryPass = true;
  }
}

function postalCodeValidity() {
  const postalCodeValidity = postalCode.validity;
  if (!postalCode.checkValidity()) {
    postalCodePass = false;
    if (postalCodeValidity.tooShort || postalCodeValidity.tooLong) {
      postalCodeError.textContent =
        "Postal code length should be between 3 and 10";
    } else if (postalCodeValidity.valueMissing) {
      postalCodeError.textContent = "Postal Code cannot be empty";
    }
  } else {
    postalCodeError.textContent = "";
    postalCodePass = true;
  }
}

function passwordValidity() {
  const passwordOneValidity = passwordOne.validity;
  const passwordTwoValidity = passwordTwo.validity;
  if (!passwordOne.checkValidity() || !passwordTwo.checkValidity()) {
    passwordPass = false;
    if (passwordOneValidity.tooShort || passwordTwoValidity.tooShort) {
      passwordError.textContent = "Password must be at least 8 characters";
    }
    if (passwordOne.value !== passwordTwo.value) {
      passwordError.textContent = "Passwords do not match";
    } else if (
      passwordOneValidity.valueMissing ||
      passwordTwoValidity.valueMissing
    ) {
      passwordError.textContent = "Passwords cannot be empty";
    }
  } else {
    passwordError.textContent = "";
    passwordPass = true;
  }
}

email.addEventListener("blur", validateEmail);
country.addEventListener("blur", validateCountry);
postalCode.addEventListener("blur", postalCodeValidity);
passwordOne.addEventListener("blur", passwordValidity);
passwordTwo.addEventListener("blur", passwordValidity);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailPass || !countryPass || !postalCodePass || !passwordPass) {
    alert("Ensure all data is correct");
  } else {
    alert("High Five!");
  }
});
