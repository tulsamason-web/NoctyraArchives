function loadPage(page) {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      document.getElementById("viewer").innerHTML = data;
    });
}

function unlockSovenna() {
  let code = prompt("Enter access code:");

  if (code === "FIRSTVISION") {
    loadPage("content/sovenna.html");
  } else {
    alert("Access denied.");
  }
}

function unlockTyriel() {
  let code = prompt("Enter access code:");

  if (code === "THECREEK") {
    loadPage("content/tyriel.html");
  } else {
    alert("Access denied.");
  }
}
