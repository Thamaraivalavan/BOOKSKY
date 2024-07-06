var container = document.querySelector(".container")
var over = document.querySelector(".overlay")
var popup = document.querySelector(".popupbox")
var but = document.getElementById("popup-but")
var cancel = document.getElementById("cancelbook")
var add = document.getElementById("addbook")
but.addEventListener("click", function () {
    over.style.display = "block"
    popup.style.display = "block"
})
cancel.addEventListener("click", function () {
    event.preventDefault()
    over.style.display = "none"
    popup.style.display = "none"

})
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdes = document.getElementById("book-des")
add.addEventListener("click", function () {
    event.preventDefault()

    var div = document.createElement("div")
    div.className = "book"
    div.innerHTML = `<h2>${booktitle.value}</h2>
                             <h3>${bookauthor.value}</h3>
                             <p>${bookdes.value}</p>
                             <button onclick='del(event)'>Delete</button>`
    container.append(div)
    booktitle.value=""
    bookauthor.value=""
    bookdes.value=""
    over.style.display = "none"
    popup.style.display = "none"
})
function del(event)
{
  event.target.parentElement.remove()
}
