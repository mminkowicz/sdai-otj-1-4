document.addEventListener("DOMContentLoaded", function() {
    const headerImage = document.querySelector("header img");
    if (headerImage) {
        headerImage.addEventListener("click", function() {
            alert("Welcome to Dev Dish Food Truck & Restaurant!");
        });
    }

    const menuItems = document.querySelectorAll(".menu-item-title");
    menuItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            item.style.backgroundColor = "#f0f0f0";
        });
        item.addEventListener("mouseout", function() {
            item.style.backgroundColor = "";
        });
    });

    const favoriteImages = document.querySelectorAll(".gallery img");
    favoriteImages.forEach(function(img) {
        img.addEventListener("click", function() {
            alert("You clicked on one of the Developer's Favorites!");
        });
    });
});
const devFavorites = document.getElementById("dev-favorites");
if (devFavorites) {
    devFavorites.addEventListener("click", function() {
        alert("Welcome to Dev Dish Food Truck & Restaurant!");
    });
}
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navList.classList.toggle('active');
});

