let favorites = readFromLocalStorage("favorites") || []
console.log(favorites);





fetch("/data/destinations.json")
.then(response => response.json())
.then(data => {

    let sectionElm = document.createElement("section")
sectionElm.innerHTML = data.destinations.map(destination => {
  return `
<div class ="test">
<figure class="card__image">
    <img src="/img/${destination.image}">
    </figure>
    <button class="card__favoritebtn ${favorites.includes(destination.id.toString()) ? "card__favoritebtn--selected" : ""}" data-favid="${destination.id}">heart</button>
    <div class="testagain">
        <a href="destination.html?id=${destination.id}" >
        More
        </a>
          </div>
        </div>`



      
}).join("")

sectionElm.querySelectorAll(".card__favoritebtn").forEach(function(button){

  button.addEventListener("click", function(event){
  let currentID = event.target.dataset.favid;
if (favorites.includes(currentID)) {
  let newFavorites = favorites.filter(id => id != currentID)
  favorites = newFavorites
  event.target.classlist.remove("card__favoritebtn--selected")
  console.log(favorites);
} else {

  favorites.push(currentID)
  event.target.classlist.add("card__favoritebtn--selected")
  console.log(favorites);
}
savetoLocalStorage("favorites", favorites)





})


})

        document.querySelector("#root").append(sectionElm)
})