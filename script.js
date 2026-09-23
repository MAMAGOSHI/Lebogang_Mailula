
// ===============================
// PORTFOLIO INTERACTIONS
// ===============================


// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // Add a small animation when the page loads
    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(20px)";

    setTimeout(function () {

        hero.style.transition = "all 0.8s ease";

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    }, 200);


    // ===============================
    // NAVBAR SHADOW ON SCROLL
    // ===============================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 10px 30px rgba(16, 24, 40, 0.08)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });


    // ===============================
    // PROJECT CARD ANIMATION
    // ===============================

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.transition = "all 0.4s ease";

        });

    });

});

