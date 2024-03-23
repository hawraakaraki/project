let mobilemenu = document.querySelector("#mobile-menu");
let mobileicon = document.querySelector("#mobile-btn");
mobileicon.addEventListener("click", () => {
  mobilemenu.classList.toggle("hidden");
});
let change = function (icon) {
    icon.classList.toggle('fa-times')
}