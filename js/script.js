document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("sidebar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("sidebar-container").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });
});
