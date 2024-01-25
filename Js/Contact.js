document.addEventListener("DOMContentLoaded", function () {
  const changeContentButton = document.getElementById("formFillingButton");
  const contentDiv = document.getElementById("formDiv");

  // Add a click event listener to the button
  changeContentButton.addEventListener("click", function () {
    contentDiv.innerHTML = `<form action="/submit_form" method="post">
    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" name="firstName" required><br><br>

    <label for="lastName">Last Name:</label>
    <input type="text" id="lastName" name="lastName" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="comments">Recipe Details:</label><br>
    <textarea id="comments" name="comments" rows="4" cols="50"></textarea><br><br>

    <input type="submit" value="Submit">`;
  });
});
