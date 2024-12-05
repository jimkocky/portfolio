gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Draggable);

let previousScroll = 0;

ScrollTrigger.create({
    trigger: "body",              
    start: "top top",              
    end: "bottom bottom",           
    onUpdate: (self) => {
        let currentScroll = self.scroll(); 
        
        if (currentScroll > previousScroll) {
            
            gsap.to("header", { y: -200, duration: 0.5, ease: "power2.out" });
        } else {
            
            gsap.to("header", { y: 0, duration: 0.5, ease: "power2.out" });
        }
        
        previousScroll = currentScroll; 
    },
});


gsap.timeline()
    .from(".salute", {
        delay: 0.5,
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

    .from(".title", {
        delay: -0.75,
        x: 100,  
        opacity: 0,
        duration:1,
    })

    .to(".welcome-message", {
        delay: 1.5,
        opacity: 0,
        duration: 0.8,
        y: -500,
        z: -1000,
        ease: "power1.in"
    })
    
    .fromTo(".home-info",
        { scaleX: 0 },
        {   scaleX: 1,   
            duration: 1,   
            ease: "power2.inOut"  
    }) 

    .from(".firstname", {
        delay: -0.1,
        opacity: 0,
        duration: 1,
        y: 30,
    })

    .from(".lastname", {
        delay: -0.75,
        opacity: 0,
        duration: 1,
        y: 30,
    })

    .from(".social-link-ig", {
        delay: -0.25,
        opacity: 0,
        duration:0.5,
        y: -30,
    })

    .from(".social-link-fb", {
        delay: -0.25,
        opacity: 0,
        duration:0.5,
        y: -30,
    })

    .from(".social-link-x", {
        delay: -0.25,
        opacity: 0,
        duration:0.5,
        y: -30,
    })

    .from(".social-link-gh", {
        delay: -0.25,
        opacity: 0,
        duration:0.5,
        y: -30,
    })

    .to(".lastname", {
        color: "#CC100D",
        delay: -0.75,
        duration: 0.5
    })

    .from("header", {
        opacity: 0,
        y: -100,
        duration: 1.5,
    });
    
gsap.to(".salute", {
    color: "#CC100D",
    delay: 1.5,
    duration: 0.5
})