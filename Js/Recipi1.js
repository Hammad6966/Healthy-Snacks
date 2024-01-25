document.addEventListener("DOMContentLoaded", function () {
  const changeContentButton = document.getElementById("fullRecipeButton");
  const contentDiv = document.getElementById("directionDiv");

  // Add a click event listener to the button
  changeContentButton.addEventListener("click", function () {
    contentDiv.innerHTML = ` <h1>Directions</h1>
    <h2>Step 1</h2>
    <p>
      Place cottage cheese in a 16-ounce container. Top with cucumber and
      chickpeas.
    </p>
    <h2>To make ahead</h2>
      <p>
        Place cottage cheese and cucumber in the jar. Cover and refrigerate
        for up to 3 days. Top with chickpeas before serving.
      </p>

      <h2>Note</h2>
      <p>
        You can find crunchy chickpeas, sometimes labeled chickpea snacks, at
        most well-stocked grocery stores.
      </p>`;
  });
});

function navigateToPage() {
  window.location.href = "./Recipe1.html";
}
