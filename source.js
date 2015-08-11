var essentialsSelection = document.getElementById("essentials");
var milkSelection = essentialsSelection.firstElementChild.firstElementChild;
var wineSelection = milkSelection.nextElementSibling.nextElementSibling.nextElementSibling;


console.log(wineSelection);

milkSelection.addEventListener("click",function() {
  (alert("MILK"))});

wineSelection.addEventListener("click", function() {
  wineSelection.style.color = 'red'});
