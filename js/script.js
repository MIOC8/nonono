const ButtonHeader = document.querySelector(".burger__button");
const Container = document.querySelector(".container");
const BurgerListItems = document.querySelectorAll(".burger__list-item");
ButtonHeader.addEventListener("click", function (e) {
    ButtonHeader.classList.add("burger__button-active")
    BurgerListItems.forEach(function (item) {
        item.classList.add("burger__list-item-active")
    })
})
document.addEventListener("click", function (e) {
    if (!e.target.closest(".burger__button")) {
        ButtonHeader.classList.remove("burger__button-active")
        BurgerListItems.forEach(function (item) {
            item.classList.remove("burger__list-item-active")
        })
    }
})

gsap.registerPlugin(ScrollTrigger);


gsap.to(".welocome__about", {
    scrollTrigger: {
        trigger: ".welocome__about",
        start: "20px 70%",
        end: "20px 20%",
        scroller: "body",
        toggleActions: "play none none none",
    },

    duration: 1,
    opacity: 1,
    scale: 1
})

gsap.to(".welocome__about", {
    scrollTrigger: {
        trigger: ".welocome__about",
        start: "20px 70%",
        end: "20px 20%",
        scroller: "body",
        toggleActions: "play none none none",
    },

    duration: 0.6,
    delay: 1,
    textShadow: "0px 0px 50px #FF7427"
})


gsap.to("#handyman", {
    scrollTrigger: {
        trigger: "#handyman",
        start: "20px 90%",
        end: "20px 20%",
        scroller: "body",
        toggleActions: "play none none none",
    },

    duration: 1,
    opacity: 1,
    scale: 1
})

gsap.to("#handyman", {
    scrollTrigger: {
        trigger: "#handyman",
        start: "20px 80%",
        end: "20px 20%",
        scroller: "body",
        toggleActions: "play none none none",
    },

    duration: 0.6,
    delay: 1,
    textShadow: "0px 0px 50px #FF7427"
})


gsap.to(".about__text-block span", {
    scrollTrigger: {
        trigger: ".about__text-block span",
        start: "20px 60%",
        end: "20px 20%",
        scroller: "body",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
    delay: 0.4,
})
gsap.to(".about__text-block i", {
    scrollTrigger: {
        trigger: ".about__text-block span",
        start: "20px 60%",
        end: "20px 20%",
        scroller: "body",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
    delay: 0.8,
})
gsap.to(".about__text-block em", {
    scrollTrigger: {
        trigger: ".about__text-block span",
        start: "20px 60%",
        end: "20px 20%",
        scroller: "body",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
    delay: 1.2,
})
gsap.to(".about__text-block b", {
    scrollTrigger: {
        trigger: ".about__text-block span",
        start: "20px 60%",
        end: "20px 20%",
        scroller: "body",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
    delay: 1.4,
})
gsap.to(".about__block-color1", {
    scrollTrigger: {
        trigger: ".about__img-block",
        start: "20px 60%",
        end: "20px 20%",
        scroller: "body",
        toggleActions: "play none none none",
        scrub: 1,
    },
    scale: 1,
})

gsap.to(".about__block-color2", {
    scrollTrigger: {
        trigger: ".about__img-block",
        start: "20px 70%",
        end: "20px 20%",
        scroller: "body",
        toggleActions: "play none none none",
        scrub: 1,
    },
    scale: 1.1,
})

gsap.to(".about__block-color3", {
    scrollTrigger: {
        trigger: ".about__img-block",
        start: "20px 80%",
        end: "20px 20%",
        scroller: "body",
        scrub: 1,
        toggleActions: "play none none none",
    },
    scale: 1.2,

})

