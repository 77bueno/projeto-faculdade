class NavBarMobile {
    constructor(menuMobile, ListaNav, Linksnav) {
        this.menuMobile = document.querySelector(menuMobile);
        this.ListaNav = document.querySelector(ListaNav);
        this.Linksnav = document.querySelectorAll(Linksnav);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animacaoLinks() {
        this.Linksnav.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "") 
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`); 
        });
    }

    handleClick() {
        this.ListaNav.classList.toggle(this.activeClass);
        this.menuMobile.classList.toggle(this.activeClass);
        this.animacaoLinks();
    }

    addClickEvent() {
        this.menuMobile.addEventListener("click", this.handleClick);
        
    }

    init() {
        if (this.menuMobile) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new NavBarMobile(
    ".menu-mobile",
    ".menu-listas",
    ".menu-listas li",
);

mobileNavBar.init();