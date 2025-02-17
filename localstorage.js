function savetoLocalStorage(key, value) {

    localStorage.setItem(key, JSON.stringify(value))
    return " data was saved with the key" + key
}

function readFromLocalStorage(key) {

    return value = JSON.parse(localStorage.getItem(key))
 
}

function deleteFromLocalStorage(key) {

 localStorage.removeItem(key)
 return "The element with key" + key + " was deleted";

}


let success = savetoLocalStorage("favorites", (1,5,8))
console.log(success);



let myFavorites = readFromLocalStorage("favorites")
console.log(myFavorites)

let deletedsuccess = deleteFromLocalStorage("favourites")
console.log(deletedsuccess)