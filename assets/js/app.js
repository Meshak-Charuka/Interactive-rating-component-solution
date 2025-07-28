let selectedNum = null;
let previouslySelected = null;

function selectRating(num, element) {
  selectedNum = num;
  console.log(selectedNum);

  // Reset previous selection background if any
  if (previouslySelected) {
    previouslySelected.style.backgroundColor = "";
  }

  // Highlight current selected button
  element.style.backgroundColor = "hsl(0, 100%, 100%)";

  // Store current selected for next reset
  previouslySelected = element;
}

document.getElementById("btn").addEventListener("click", function () {
  if (selectedNum !== null) {
    document.getElementById("Rating-Contner").style.display = "none";
    document.getElementById("after").style.display = "flex";
    document.getElementById("raredisplay").innerHTML = selectedNum;
  } else {
    alert("Please select a rating before submitting!");
  }
});
