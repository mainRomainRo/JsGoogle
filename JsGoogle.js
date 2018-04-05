// 1.Création du bouton magique

  var overCenter = document.getElementById('toggleCenter')
  overCenter.addEventListener('click',(e) => {

    var centerDiv = document.getElementById("search")
    centerDiv.classList.remove("hidden")
    overCenter.style.display = "none"
    console.log(centerDiv)
})

// 2.
// La barre
var monInput = document.getElementById("input")
// le bouton
var rechercher = document.getElementById("recherche")


rechercher.onclick = function(){

  var saisie = monInput.value
  var monUrl = "https://www.google.fr/#q="
  var maRecherche = monUrl + saisie
  console.log(saisie)
  if (saisie !== ""){
      window.location.replace(maRecherche)
  }


  //
}
