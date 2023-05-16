// gsap.fromTo(".text", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });

// Timeline
const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: Power1.easeOut },
}); //here we can define how all the animations are going to behave
tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: Elastic.easeOut.config(1, 0.4), duration: 1.5 }
);
tl.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" },
  "<50%"
); // once the first animation finishes, the second is starting right away
tl.fromTo(".text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<"); // the "<" is going to make the animation sync up with the previous animation

// Cookie crumbs jump
tl.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 }
);

tl.fromTo("#crumbs", { y: 0 }, { y: -20, yoyo: true, repeat: -1 }, "<");

// Fading the cookie container out
const button = document.querySelector("button");
button.addEventListener("click", function () {
  gsap.to(".cookie-container", {
    opacity: 0,
    y: 100,
    duration: 0.75,
    ease: Power1.easeOut,
  });
});
