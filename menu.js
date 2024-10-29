document.addEventListener("DOMContentLoaded", function () {
  const a = document.getElementById("menuToggle"),
    b = document.querySelector(".menu-aberto");
  a.addEventListener("change", function () {
    a.checked ? b.classList.add("active") : b.classList.remove("active");
  });
});
