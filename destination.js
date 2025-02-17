let search = window.location.search
let params = new URLSearchParams(search)
console.log(params);
let id = params.get("id")
console.log(id);

let mainElm = document.createElement("main")
document.querySelector("#root").append(mainElm)

fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then(data => {

        let sectionElm = document.createElement("section")

        let facilitylist = data.facilities.map(facility => `<li>${facility}</li>`).join("");

        sectionElm.innerHTML = `
        <div class="grid">
<figure>
    <img class="imagetest" src="${data.image}" alt="">
    </figure>
    <div class="text">
    <h1>${data.destination}</h1>
    <h1>${data.title}</h1>

    <h3>${data.subtitle}</h3>
    <p>${data.text}</p>
    <section class="facilitylist">
  <h3>facilities:</h3>
  <ul>${facilitylist}</ul>
  </section>
  </div>
  </div>
`

        mainElm.append(sectionElm)


    })