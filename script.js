gsap.registerPlugin(ScrollTrigger);

let previousScroll = 0;

gsap.timeline()
    .from(".salute", {
        delay: 0.5,
        y: -100,  
        opacity: 0,
        duration: 0.75,
    })

    .to(".salute", {
        color: "#CC100D",
        delay: 0,
        duration: 0.5
    })

    .from(".welcome", {
        delay: -0.25,
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

    .to(".salute", {
        delay: 1,
        opacity: 0,
        duration: 0.75,
    })

    .to(".welcome", {
        delay: -0.5,
        opacity: 0,
        duration: 0.75,
    })

    .to(".title", {
        delay: -0.5,
        opacity: 0,
        duration: 0.75,
    })

    .to(".welcome-message", {
        opacity: 0,
        duration: 0,
        z: -1000,
        ease: "power1.in"
    })
    
    .fromTo(".home-info",
        { scaleX: 0 },
        {   scaleX: 1,   
            duration: 1,   
            ease: "power1.inOut"  
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

    .from(".header", {
        opacity: 0,
        y: -100,
        duration: 1.5,
        ease: "power1.inOut"
    });

const AboutTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#About", 
        start: "top 75%", 
        toggleActions: "play none none none",
        }
});

AboutTimeline
.from(".about", {
    delay: 0.5,
    opacity: 0, 
    duration: 1, 
    x: -100,  
})

.to(".red-about", {
    color: "#CC100D",
    delay: 0,
    duration: 0.5
})

.fromTo(".about-border",
    { scaleX: 0 },
    {   scaleX: 1,
        delay: -0.75,  
        duration: 1.5,   
        ease: "power1.inOut"  
}) 

.from("#p1", {
    delay: -0.75,
    opacity: 0,
    duration: 0.8,
    y: 150,
    ease: "power4.inOut",
}) 

.from("#p2", {
    delay: -0.5,
    opacity: 0,
    duration: 0.8,
    y: 125,
    ease: "power4.inOut",
}) 

.from("#p3", {
    delay: -0.5,
    opacity: 0,
    duration: 0.8,
    y: 100,
    ease: "power4.inOut",
})

.from("#p4", {
    delay: -0.5,
    opacity: 0,
    duration: 0.8,
    y: 75,
    ease: "power4.inOut",
})

.from("#p5", {
    delay: -0.5,
    opacity: 0,
    duration: 0.8,
    y: 50,
    ease: "power4.inOut",
})

.from(".details-title", {
    delay: 1,
    opacity: 0,
    duration: 1,
    y: -50,
    ease: "power4.inOut",
})

.from(".sk1, .sch1", {
    delay: -0.5,
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".sk2, .sch2", {
    delay: -0.5,
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".sk3", {
    delay: -0.5,
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".sk4", {
    delay: -0.5,
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".sk5", {
    delay: -0.5,
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".sk6", {
    delay: -0.5,
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".sk7", {
    delay: -0.5,
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
});

const PortfolioTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#Portfolio", 
        start: "top 75%", 
        toggleActions: "play none none none",
        }
});

PortfolioTimeline
.from(".portfolio", {
    delay: 0.5,
    opacity: 0, 
    duration: 1, 
    x: -100,  
})

.to(".red-portfolio", {
    color: "#CC100D",
    delay: 0,
    duration: 0.5
})

.fromTo(".portfolio-border",
    { scaleX: 0 },
    {   scaleX: 1,
        delay: -0.75,  
        duration: 1.5,   
        ease: "power1.inOut"   
}) 

.from("#p6", {
    delay: -0.75,
    opacity: 0,
    duration: 0.8,
    y: 75,
    ease: "power4.inOut",
}) 

.from("#p7", {
    delay: -0.5,
    opacity: 0,
    duration: 0.8,
    y: 50,
    ease: "power4.inOut",
}) 

.from(".portfolio-more", {
    delay: 0.75,
    opacity: 0,
    duration: 1,
    y: -50,
    ease: "power4.inOut",
})

.from("#horizontal", {
    delay: -0.5,
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
});

const contents = gsap.utils.toArray("#horizontal .portfolio-image")

gsap.to(contents, {
    xPercent: -68 * (contents.length - 1),
    scrollTrigger: {
        trigger: "#horizontal",
        pin: true,
        scrub: 1
    }
});

const ContactTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#Contact", 
        start: "top 75%", 
        toggleActions: "play none none none",
        }
});

ContactTimeline
.from(".contact", {
    delay: 0.5,
    opacity: 0, 
    duration: 1, 
    x: -100,  
})

.to(".red-contact", {
    color: "#CC100D",
    delay: 0,
    duration: 0.5
})

.from(".first-name, .last-name", {
    delay: 0,
    opacity: 0,
    duration: 0.8,
    y: 125,
    ease: "power4.inOut",
}) 

.from(".e-mail", {
    delay: -0.5,
    opacity: 0,
    duration: 0.8,
    y: 100,
    ease: "power4.inOut",
})
.from(".phone-number", {
    delay: -0.5,
    opacity: 0,
    duration: 0.8,
    y: 75,
    ease: "power4.inOut",
}) 

.from(".message", {
    delay: -0.5,
    opacity: 0,
    duration: 0.8,
    y: 50,
    ease: "power4.inOut",
})
.from(".contact-button", {
    delay: -0.5,
    opacity: 0,
    duration: 0.8,
    y: 25,
    ease: "power4.inOut",
});

gsap.timeline()
.from(".projects-title", {
    delay: 0.25,
    y: -75,  
    opacity: 0,
    duration: 1.5,
    ease: "power4.inOut",
})

.to("#red-projects", {
    color: "#CC100D",
    delay: 0.25,
    duration: 0.5
})

.from(".header-portfolio", {
    delay: -0.75,
    opacity: 0,
    y: -100,
    duration: 1.5,
})

.from(".proj1", {
    delay: -0.25, 
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".proj2", {
    delay: -0.25, 
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".proj3", {
    delay: -0.25, 
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".proj4", {
    delay: -0.25, 
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".proj5", {
    delay: -0.25, 
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".proj6", {
    delay: -0.25, 
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".proj7", {
    delay: -0.25, 
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".proj8", {
    delay: -0.25, 
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".proj9", {
    delay: -0.25, 
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
})

.from(".proj10", {
    delay: -0.25, 
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut",
});
