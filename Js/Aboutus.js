const toggleButton = document.getElementById("toggleButton");
const moreInfo = document.getElementById("moreInfo");

toggleButton.addEventListener("click", function () {
  if (moreInfo.classList.contains("hidden")) {
    moreInfo.classList.remove("hidden");
    toggleButton.textContent = "Hide Info";
  } else {
    moreInfo.classList.add("hidden");
    toggleButton.textContent = "Show More";
  }
});
