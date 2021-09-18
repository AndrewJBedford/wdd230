let latestMod = document.lastModified;
let today = new Date();

document.getElementById('latestModified').innerText = latestMod;
const newLocal = document.getElementById('currentYear').textContent = today.getFullYear();