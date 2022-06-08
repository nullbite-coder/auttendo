"use strict";

var navListItems = document.getElementsByClassName("navigation__item");

for (var i = 0; i < navListItems.length; i++) {
    navListItems[i].onclick = function() {
        document.getElementById("navi-toggle").checked = false;
    };
}