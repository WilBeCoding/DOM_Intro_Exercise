var essentialsSelection = document.getElementById("essentials");
var milkSelection = essentialsSelection.firstElementChild.firstElementChild;
var wineSelection = milkSelection.nextElementSibling.nextElementSibling.nextElementSibling;
var beerSelection = wineSelection.nextElementSibling;

console.log(milkSelection);
console.log(wineSelection);

milkSelection.addEventListener("click",function() {
  (alert("MILK"))});

wineSelection.addEventListener("click", function() {
  wineSelection.style.color = 'red'});

beerSelection.addEventListener("click", function() {
var imageToAdd = document.createElement("img"); 
imageToAdd.src = "Cage.gif"; 
essentialsSelection.appendChild(imageToAdd);
})