"use strict";
const form = document.querySelector("form");
const usernameField = document.querySelector("#username-field");
const passwordField = document.querySelector("#password-field");

const grantedElement = `
<div class="granted">
  correct credentials
</div>
`;
const deniedElement = `
<div class="denied">
  incorrect credentials
</div>
`;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const url = "http://localhost";
  const requestBody = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "text/html"
    },
    body: JSON.stringify({
      login: usernameField.value,
      password: passwordField.value
    })
  };

  fetch(url, requestBody)
    .then(response => {
      if (response.ok) {
        form.innerHTML = grantedElement;
      } else {
        form.innerHTML = deniedElement;
      }
    })
    .catch(error => console.log(error));
});
