import "./formJSValidation.css";

const form = document.querySelector("form");
const userEmail = document.getElementById("user_email");
const userEmailError = document.querySelector("#user_email + span.error");
const userCountry = document.getElementById("user_country");
const userPostalCode = document.getElementById("user_postal_code");
const userPostalCodeError = document.querySelector(
  "#user_postal_code + span.error",
);
const userPassword = document.getElementById("user_password");
const userPasswordError = document.querySelector("#user_password + span.error");
const userPasswordConfirm = document.getElementById("user_password_confirm");
const userPasswordConfirmError = document.querySelector(
  "#user_password_confirm + span.error",
);

// For each country, defines the pattern that the postal code has to follow
const postalCodeConstraints = {
  ch: [
    "^(CH-)?\\d{4}$",
    "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
  ],
  fr: [
    "^(F-)?\\d{5}$",
    "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
  ],
  de: [
    "^(D-)?\\d{5}$",
    "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
  ],
  nl: [
    "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
    "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
  ],
};

const passwordConstraint = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

userEmail.addEventListener("input", () =>
  validateField(userEmail, userEmailError, getEmailError),
);
userPostalCode.addEventListener("input", () =>
  validateField(userPostalCode, userPostalCodeError, getPostalCodeError),
);
userPassword.addEventListener("input", () =>
  validateField(userPassword, userPasswordError, getPasswordError),
);
userPasswordConfirm.addEventListener("input", () =>
  validateField(
    userPasswordConfirm,
    userPasswordConfirmError,
    getPasswordConfirmError,
  ),
);
form.addEventListener("submit", (event) => handleSubmit(event));

function validateField(field, errorField, getErrorMessage) {
  const errorMessage = getErrorMessage(field);
  if (errorMessage) {
    showError(errorField, errorMessage);
  } else {
    clearError(errorField);
  }
}

function getEmailError(field) {
  if (field.validity.valueMissing) return "Email address can't be empty";
  if (field.validity.typeMismatch)
    return "Entered value needs to be an email address.";
  if (field.validity.tooShort)
    return `Email should be at least ${field.minLength} characters; you entered ${field.value.length}.`;
  if (field.validity.tooLong)
    return `Email should be at most ${field.maxLength} characters; you entered ${field.value.length}.`;
  return ""; // No errors
}

function getPostalCodeError(field) {
  const constraint = new RegExp(
    postalCodeConstraints[userCountry.value][0],
    "",
  );

  if (constraint.test(field.value)) {
    userPostalCode.setCustomValidity("");
    return "";
  } else {
    // The postal code doesn't follow the constraint
    // give a message about the format required for this country
    userPostalCode.setCustomValidity(
      postalCodeConstraints[userCountry.value][1],
    );
    return postalCodeConstraints[userCountry.value][1];
  }
}

function getPasswordError(field) {
  const constraint = new RegExp(passwordConstraint);
  if (constraint.test(field.value)) {
    userPassword.setCustomValidity("");
    return "";
  } else {
    userPassword.setCustomValidity(
      "Must contain: at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
    );
    return "Must contain:\n- At least one number\n- One uppercase and lowercase letter\n- At least 8 or more characters";
  }
}

function getPasswordConfirmError(field) {
  if (userPassword.value === field.value) {
    userPasswordConfirm.setCustomValidity("");
    return "";
  } else {
    userPasswordConfirm.setCustomValidity("Passwords do not match");
    return "Passwords do not match";
  }
}

function handleSubmit(event) {
  // Check validity before button submission
  validateField(userEmail, userEmailError, getEmailError);
  if (!userEmail.validity.valid) {
    event.preventDefault();
  }

  validateField(userPostalCode, userPostalCodeError, getPostalCodeError);
  if (!userPostalCode.validity.valid) {
    event.preventDefault();
  }

  validateField(userPassword, userPasswordError, getPasswordError);
  if (!userPassword.validity.valid) {
    event.preventDefault();
  }

  validateField(
    userPasswordConfirm,
    userPasswordConfirmError,
    getPasswordConfirmError,
  );
  if (!userPasswordConfirm.validity.valid) {
    event.preventDefault();
  }
}

// Error display functions
function showError(errorField, message) {
  errorField.innerHTML = message.replace(/\n/g, "<br>"); // Replace newline characters with <br> tags
  errorField.className = "error active";
}

function clearError(errorField) {
  errorField.textContent = "";
  errorField.className = "error";
}
