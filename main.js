//navbar closing
const iconToggle = document.querySelector(".uil-bars");
const navbarMenu = document.querySelector(".menu");
const menuLists = document.querySelectorAll(".menu_link");
const iconClose = document.querySelector(".uil-multiply");

iconToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});
iconClose.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
});
menuLists.forEach((menulist) => {
    menulist.addEventListener("click", () => {
        navbarMenu.classList.remove("active");
    })
})

//change background header
function scrollHeader() {
    const header = document.getElementById("header");
    this.scrollY >= 20 ? header.classList.add("active") : header.classList.remove("active");
}
window.addEventListener("scroll", scrollHeader);

//hero type effect //
const typed = document.querySelector(".typed");

if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

//scroll section active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add("active-link");
        } else {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove("active-link");
        }
    })
}

window.addEventListener("scroll", scrollActive)

//resume scroll
const pages = document.querySelectorAll(".page");
const resume = document.querySelector(".resume");

function resumeActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 120;

        let sectionId = page.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add("current");
        } else {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove("current");
        }
    })
}

window.addEventListener("scroll", resumeActive)

//portfolio
let filterItems = document.querySelectorAll(".portfolio_filters li")

function activePortfolio() {
    filterItems.forEach(e1 => {
        e1.classList.remove("filter-active")
        this.classList.add("filter-active")
    })
}

filterItems.forEach(e1 => {
    e1.addEventListener("click", activePortfolio)
})

//mixitup filter portfolio
let mixerPortfolio = mixitup(".portfolio_wrap-container", {
    selectors: {
        target: ".portfolio_item"
    },
    animation: {
        duration: 500,
        effects: 'fade translateZ(-100px) stagger(30ms)', // Enhance the animation effects
        easing: 'ease'
    }
})

//services
let modelBtns = document.querySelectorAll(".services_button"),
    modelViews = document.querySelectorAll(".services_model"),
    modelClose = document.querySelectorAll(".uil-multiply");

let model = function (modelClick) {
    modelViews[modelClick].classList.add("active-model");
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener("click", () => {
        model(i)
    })
})

modelClose.forEach(e1 => {
    e1.addEventListener("click", () => {
        modelViews.forEach(modelView => {
            modelView.classList.remove("active-model")
        })
    })
})