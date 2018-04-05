var overCenter = document.getElementById('toggleCenter')
overCenter.addEventListener('click',(e) => {
  var centerDiv = document.getElementById("search")
  centerDiv.classList.remove("hidden")
  overCenter.style.display = "none"
  console.log(centerDiv)
})
