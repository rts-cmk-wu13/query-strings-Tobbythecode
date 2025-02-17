fetch("/data/destinations.json")
.then(response => response.json())
.then(data => {

    let sectionElm = document.createElement("section")
sectionElm.innerHTML = data.destinations.map(destination => `
<div class ="test">
<figure class="card__image">
    <img src="/img/${destination.image}">
    </figure>
    <div class="testagain">
        <a href="destination.html?id=${destination.id}" >
        More
        </a>
          </div>
        </div>`).join("")

        document.querySelector("#root").append(sectionElm)
})