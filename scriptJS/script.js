
document.addEventListener('DOMContentLoaded', function () {
    gsap.fromTo('header', {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "power1.out",

    }, {
        y: 0,
        opacity: 1
        , ease: 'back'
    })
    gsap.fromTo('.hero > div', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "back",

    }, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: 'back'
    })
    gsap.to('.org', {
        duration: 1, x: 100, ease: 'back'
    })
    gsap.fromTo('.hero img', {
        duration: 1, ease: 'back', opacity: 0
    }, { duration: 1, ease: 'back', opacity: 1 })
    gsap.fromTo('.slide-item img', {
        duration: 1, ease: 'back', opacity: 0,
        y: -100, stagger: {
            amount: 1, from: "center"
        }
    },{duration: 1, ease: 'back', opacity: 1,
        y: 0, stagger: {
            amount: 1, from: "center"
        }})
        // scroll trigger on scrolling
        gsap.registerPlugin(scrolltrigger);
        
})