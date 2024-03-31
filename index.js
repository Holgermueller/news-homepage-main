"use strict";

function openNav() {
  console.log("click");
  document.getElementById("mobileNav").style.marginLeft = "0";
}

function closeNav() {
  document.getElementById("mobileNav").style.marginLeft = "100%";
}
