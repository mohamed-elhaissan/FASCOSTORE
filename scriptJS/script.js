
document.addEventListener('DOMContentLoaded', function () {
    window.onload = function () {
        document.getElementsByClassName('loading-hero')[0].style.display = 'none';

    }
    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin()
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
    }, {
        duration: 1, ease: 'back', opacity: 1,
        y: 0, stagger: {
            amount: 1, from: "center"
        }
    })
    // scrolling using gsap scroll trigger

    gsap.registerPlugin(ScrollTrigger);

    // scroll trigger on scrolling
    var contDownTime = new Date('2024-9-25').getTime();
    setInterval(() => {
        var nowTime = new Date().getTime();
        var timeDiff = contDownTime - nowTime;
        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var min = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
        var second = Math.floor(timeDiff % (1000 * 60) / (1000));
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('min').innerHTML = min;
        document.getElementById('second').innerHTML = second;
    }, 1000);
    // initailze the tilt librarie hover fot all products card
    document.querySelectorAll('.produit').forEach(item => {
        VanillaTilt.init(item)
    });
    // arrow scroll to top
    document.querySelector("ion-icon[name = 'arrow-up-outline']").addEventListener('click',()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });
    gsap.fromTo('.slide-item img',{
        y:100,ease:'back',opacity:0
    },{
        y:0,ease:'back',opacity:1,
        stagger:{
            amount:1,from:"center"
        },
        scrollTrigger:{
            start:"-100px bottom",
            end:'top center',
            trigger:'.slide-item img',
            toggleActions:'restart'
        }
    })
    gsap.fromTo('.left-side h2',{
        opacity:0,scale:0,ease:'power4'},{
            opacity:1,scale:1,ease:'power4',
            scrollTrigger:{
                start:'top center',
                start:"-100px bottom",
                end:'top top',
                trigger:'.left-side h2',
                toggleActions:'restart reverse restart reverse'
            }
        })
    gsap.fromTo('.produit',{
        opacity:0,x:400,scale:0,ease:'power4',delay:3},{
            opacity:1,scale:1,x:0,ease:'power4',
            scrollTrigger:{
                start:'top center',
                start:"-100px 80%",
                end:'bottom center',
                trigger:'.produit',
            }
        })

})