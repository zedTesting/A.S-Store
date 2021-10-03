// menu-List-ul->
const btnUl = document.getElementById("toggle");
const menuItems = document.getElementById("MenuItems");
menuItems.style.right = "900px";

btnUl.onclick = function () {

    if (menuItems.style.right === "900px") {

        menuItems.style.right = "0";
    } else {
        menuItems.style.right = "900px";
    }
}

menuItems.onclick = function () {

    if (menuItems.style.right === "900px") {

        menuItems.style.right = "0";
    } else {
        menuItems.style.right = "900px";
    }
}

// scrolling button
const btnScroll = document.getElementById("btnscroll");
window.onscroll = function () {
    if (window.scrollY >= "600") {
        btnScroll.style.display = "block";
    }
    else {
        btnScroll.style.display = "none";
    }

}
btnScroll.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
