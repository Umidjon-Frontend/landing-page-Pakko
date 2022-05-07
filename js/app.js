const btn = document.querySelector(".menu");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    nav.classList.toggle("active");
});

