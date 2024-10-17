gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Draggable);

gsap.timeline()
    .from(".salute", {
        delay: 0.1,
        y: -100,  
        opacity: 0,
        duration: 0.75,
    })

    .from(".welcome", {
        delay: 0.5,
        x: -100,  
        opacity: 0,
        duration:1,
    })

    .from(".name", {
        delay: 0.2,
        opacity: 0,
        duration: 1,
        y: 150,
        ease: "power1.out",
    })

    .from("header", {
        opacity: 0,
        y: -100,
        duration: 1.5,
    });

    gsap.to(".salute", {
    color: "red",
    delay: 1,
    duration: 0.5
})

gsap.from(".title", {
    delay: 1.5,
    x: 100,
    opacity: 0,
    duration:1,
})

gsap.fromTo(".professional-info", 
    { scaleX: 0 },   
    { scaleX: 1,     
    delay: 2,
    duration: 1,   
    ease: "power2.out"  
})

gsap.from(".profession-l", {
    delay: 3.8,
    opacity: 0,
    duration: 1.2,
    x: 500,
    ease: "back",
})

gsap.from(".profession-r", {
    delay: 3.8,
    opacity: 0,
    duration: 1.2,
    x: -500,
    ease: "back",
})
