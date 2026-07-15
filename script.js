document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll from hero button
    const heroBtn = document.querySelector(".btn");
    if (heroBtn) {
        heroBtn.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector("#experiments").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Card animation
    const cards = document.querySelectorAll(".exp-card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });

    // Hover effect
    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 20px 40px rgba(15,76,129,.20)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
        });

    });

    // Add search box
    const section = document.querySelector("#experiments");

    if (section) {

        const search = document.createElement("input");

        search.type = "text";
        search.placeholder = "Search Practical...";

        search.style.width = "100%";
        search.style.maxWidth = "500px";
        search.style.display = "block";
        search.style.margin = "0 auto 40px";
        search.style.padding = "14px";
        search.style.border = "1px solid #ccc";
        search.style.borderRadius = "10px";
        search.style.fontSize = "16px";

        section.insertBefore(search, section.querySelector(".grid"));

        search.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            cards.forEach(card => {

                if (card.innerText.toLowerCase().includes(value)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

    // Footer year
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML =
            "Engineering Mechanics Virtual Laboratory © " +
            new Date().getFullYear();
    }

});
