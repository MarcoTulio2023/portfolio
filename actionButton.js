document.addEventListener("DOMContentLoaded", function () {
  "#inicio" !== window.location.hash && (window.location.hash = "#inicio");
  const a = document.getElementById("backToTop"),
    b = document.getElementById("whatsappButton");
  document.addEventListener("scroll", function () {
    const c = window.scrollY;
    100 < c
      ? ((a.style.display = "flex"),
        (b.style.display = "flex"),
        setTimeout(() => {
          (a.style.opacity = "1"), (b.style.opacity = "1");
        }, 10))
      : ((a.style.opacity = "0"),
        (b.style.opacity = "0"),
        setTimeout(() => {
          (a.style.display = "none"), (b.style.display = "none");
        }, 500));
  }),
    a.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }),
    b.addEventListener("click", function () {
      const a = encodeURIComponent(
        "Ol\xE1! Gostaria de saber mais sobre seus servi\xE7os."
      );
      window.location.href = `https://wa.me/5534993386937?text=${a}`;
    });
});
