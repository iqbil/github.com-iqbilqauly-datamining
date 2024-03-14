document.getElementById("gombalButton").addEventListener("click", function () {
  const gombalText = document.getElementById("gombalText");
  gombalText.innerHTML = "Aku Sayang Kamu";

  const heart = document.querySelector(".heart");

  gsap.to(heart, { duration: 0.5, opacity: 1, scale: 1.2, ease: "power2.out" });
  gsap.to(heart, {
    duration: 0.5,
    opacity: 0,
    scale: 1,
    delay: 0.5,
    ease: "power2.in",
  });
});
