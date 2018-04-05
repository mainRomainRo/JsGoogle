nbrChoisi = prompt("Nombre de carrés souhaités")

var grandCarre = document.getElementById('grandCarre')
coteGrandCarre = grandCarre.offsetWidth
console.log(coteGrandCarre)

for (var y = 0; y < nbrChoisi; y++){
  for(var i = 0; i < nbrChoisi; i++){
    var petit = document.createElement('div');
    petit.style.backgroundColor = "black"
    petit.style.width = `${coteGrandCarre / nbrChoisi}px`
    petit.style.height = `${coteGrandCarre / nbrChoisi}px`
    petit.style.border = ".1px solid white"
    petit.style.boxSizing = "border-box"
    grandCarre.appendChild(petit)
 }
}
