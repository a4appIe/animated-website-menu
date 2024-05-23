let menuBtn = document.getElementById("menuBtn");
let closeBtn = document.getElementById("closeBtn");
let menu = document.getElementById("menu");
let h2 = document.querySelectorAll("h2");

let tl = gsap.timeline({ paused: true });

// tl.to(menu, {
//     right: 0,
// })

tl.to(menu, {
  right: 0,
  duration: 0.3,
});
tl.from(h2, {
  x: 100,
  opacity: 0,
  stagger: 0.1,
});
tl.from("#menu i", {
  opacity: 1,
});

menuBtn.addEventListener("click", () => {
  tl.play();
});
closeBtn.addEventListener("click", () => {
  tl.reverse();
});
