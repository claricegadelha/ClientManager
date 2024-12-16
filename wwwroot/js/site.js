// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const form = document.querySelector("#Cpf");

const re = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

function cpfValidation(input) {
  const ok = re.exec(input.value);

  output.textContent = ok
    ? ``
    : `Invalid format. Please use the following format: 000.000.000-00 or 000.000.000/0000-00`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  cpfValidation(input);
});