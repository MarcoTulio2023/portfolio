document.addEventListener("DOMContentLoaded", function () {
  const a = document.getElementById("menuToggle"),
    b = document.querySelector(".menu-aberto"),
    c = document.querySelectorAll(".nav-menu a"),
    d = document.body;
  a.addEventListener("change", function () {
    a.checked
      ? (b.classList.add("active"), d.classList.add("no-scroll"))
      : (b.classList.remove("active"), d.classList.remove("no-scroll"));
  }),
    c.forEach((c) => {
      c.addEventListener("click", function () {
        (a.checked = !1),
          b.classList.remove("active"),
          d.classList.remove("no-scroll");
      });
    });
});
