var sidenavbar = document.querySelector(".side-navbar")
function showNavbar() {
    sidenavbar.style.left = "0"
}

function closeNavbar() {
    sidenavbar.style.left = "-60%"
}

var productscollection = document.getElementById("products")
var productlist = productscollection.querySelectorAll("div")
var search = document.getElementById("search")

search.addEventListener("keyup", function () {

    var enteredvalue = event.target.value.toUpperCase()

    for (var i = 0; i < productlist.length; i++) {

        var productname = productlist[i].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[i].style.display = "none"
        }
        else {
            productlist[i].style.display = "block"
        }
    }
}
)