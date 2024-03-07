const message =
  "Merci pour votre message je reviendrais vers vous dès que possible";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
