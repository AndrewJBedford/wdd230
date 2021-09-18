const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textCotent = Date().getFullYear();
const dateTimeObject = new Date();
const fullYear = dateTimeObject.getFullYear();
const currentYear = document.getElementById("currentYear");
currentYear.textContent = fullYear;
const lastUpdated = document.getElementById("lastUpdated").textContent = document.lastmodified;