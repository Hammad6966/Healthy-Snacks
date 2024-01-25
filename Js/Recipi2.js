document.addEventListener("DOMContentLoaded", function () {
  const changeContentButton = document.getElementById("fullRecipeButton");
  const contentDiv = document.getElementById("directionDiv");

  // Add a click event listener to the button
  changeContentButton.addEventListener("click", function () {
    contentDiv.innerHTML = ` <h1>Directions</h1>
      <h2>Step 1</h2>
      <p>
        Place 1 cheese quarter on top of each cracker. Top each with 3 apple
        slices.
      </p>
      <h2>Step 2</h2>
        <p>
        Place 1 cheese quarter on top of each cracker. Top each with 3 apple
          slices.
        </p>
  `;
  });
});

function navigateToPage2() {
  window.location.href = "./Recipi2.html";
}
