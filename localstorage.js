
/**
 * 
 * @typedef {string | number | boolean | object | any[] } LocalStorageData
 */

    /**
     * save an item to local storage
     * @param {string} key - key to be used in local storage
     * @param {string | number | boolean | object | any[] } value - value to be saved
     * @returns {string}
     */

function savetoLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
    return " data was saved with the key" + key
}


/**
 * 
 * @param {string} key - key to be read from local storage
 * @returns {string | number | boolean | object | any[] }
 */

function readFromLocalStorage(key) {

    return value = JSON.parse(localStorage.getItem(key))
 
}

function deleteFromLocalStorage(key) {

 localStorage.removeItem(key)
 return "The element with key" + key + " was deleted";

}


// let success = savetoLocalStorage("favorites", (1,5,8))
// console.log(success);



// let myFavorites = readFromLocalStorage("favorites")
// console.log(myFavorites)

// let deletedsuccess = deleteFromLocalStorage("favourites")
// console.log(deletedsuccess)