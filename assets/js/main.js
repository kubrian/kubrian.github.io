// Add active class to current page for nav bar styling
document.addEventListener("DOMContentLoaded", function() {
    var currentPath = window.location.pathname.split("/").pop();
    if (currentPath === "" || currentPath === "index.html") {
        currentPath = "index.html";
    }
    var navLinks = document.querySelectorAll(".nav-bar a");
    navLinks.forEach(function(link) {
        var linkPath = link.getAttribute("href").split("/").pop();
        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
});
