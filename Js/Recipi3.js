document.addEventListener("DOMContentLoaded", function () {
  const changeContentButton = document.getElementById("fullRecipeButton");
  const contentDiv = document.getElementById("directionDiv");

  // Add a click event listener to the button
  changeContentButton.addEventListener("click", function () {
    contentDiv.innerHTML = ` <h1>Directions</h1>
      <h2>Step 1</h2>
      <p>
      Preheat oven to 350°F. Coat a 12-cup muffin tin with cooking spray.
      </p>
      <h2>Step 2</h2>
        <p>
        Whisk whole-wheat flour, all-purpose flour, baking soda, baking powder, cinnamon, salt and ginger together in a medium bowl until combined.
        </p>
  
        <h2>Step 3</h2>
        <p>
        Place mashed bananas, honey, cottage cheese, peanut butter, milk, egg and vanilla in a large bowl; beat with an electric mixer on medium speed until well combined, about 1 minute. Add the flour mixture; beat on low speed until just combined and a thick batter forms, about 45 seconds. Using a rubber spatula, gently fold in blueberries until evenly distributed. Spoon the batter into the prepared muffin cups, about 1/3 cup each.
        </p>`;
  });
});

function navigateToPage3() {
  window.location.href = "./Recipe3.html";
}
