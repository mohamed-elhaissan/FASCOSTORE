document.addEventListener('DOMContentLoaded',function(){
    gsap.fromTo('header',{
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "power1.out",
        
    },{
        y:0,
        opacity:1
        ,ease:'back'
    })
    gsap.fromTo('.hero > div',{
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "back",
        
    },{
        y:0,
        duration:1,
        opacity:1,
        ease:'back'
    })
    gsap.to('.fake',{
        duration:1,x:100,ease:'back'
    })
    gsap.fromTo('.hero img',{
        duration: 1,ease:'back',opacity:0
    },{duration: 1,ease:'back',opacity:1})

})