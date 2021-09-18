const dateTimeObject = new Date();
const fullYear = dateTimeObject.getFullYear();
const currentYear = document.getElementById("currentYear");
currentYear.textContent = fullYear;
document.getElementById("lastmodified").textContent = document.lastmodified;