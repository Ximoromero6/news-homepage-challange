(function () {
    const openMobileMenu = document.querySelector(".openMobileMenu");
    const menu = document.querySelector(".menu");

    openMobileMenu.addEventListener("click", () => {
        menu.classList.toggle("open");
        let isMenuOpen = menu.classList.contains("open");

        openMobileMenu.querySelector("img").src = isMenuOpen ? "assets/images/icon-menu-close.svg" : "assets/images/icon-menu.svg";

        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    });

})();