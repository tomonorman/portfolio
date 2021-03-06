const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text1", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".text2", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".avatar", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".social-media", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".index-btn", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
