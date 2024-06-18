document.addEventListener("DOMContentLoaded", function() {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });

    // Update ScrollTrigger on Locomotive Scroll events
    scroll.on("scroll", ScrollTrigger.update);

    // Set Locomotive Scroll as the default scroller for ScrollTrigger
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // Create your ScrollTriggers
    gsap.from(".infiniteloop", {
        scale: 0,
        scrollTrigger: {
            trigger: ".imgmain",
            scroller: ".main",
            start: "top 150%",
            end: "top 100%",
            scrub: 2
        }
    });

    gsap.from(".innerimgmain1", {
        x: "200%",
        scrollTrigger: {
            trigger: ".innerimgmain",
            scroller: ".main",
            start: "bottom 90%",
            end: "bottom 200",
            scrub: 2,
            pin: true
        }
    });

    gsap.from(".innerimgmain2", {
        x: "-200%",
        scrollTrigger: {
            trigger: ".innerimgmain1",
            scroller: ".main",
            start: "bottom 80%",
            end: "bottom 200%",
            scrub: 1,
            pin: true
        }
    });

    gsap.from(".innerimgmain3", {
        x: "200%",
        scrollTrigger: {
            trigger: ".innerimgmain2",
            scroller: ".main",
            start: "bottom 80%",
            end: "bottom 200%",
            scrub: 1,
            pin: true
        }
    });

    gsap.from(".innerimgmain4", {
        x: "-200%",
        scrollTrigger: {
            trigger: ".innerimgmain3",
            scroller: ".main",
            start: "bottom 80%",
            end: "bottom 200%",
            scrub: 2,
            pin: true
        }
    });

    // Refresh ScrollTrigger and Locomotive Scroll on window update
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();
});

gsap.from(".top",{
    y: "-100%",
    delay:0.4,
    duration: 0.5,
    ease: "bounce.out"
})

gsap.from("#hoverasus",{
    x:"-140%",
    delay:1,
    duration: 1,
    ease: "back.out(5)"
})

gsap.from(".hotdeals",{
    scale:0,
    duration:0.8,
    ease: "bounce.out",
    trigger:"innerimgmain4"
})

