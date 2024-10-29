document.addEventListener("DOMContentLoaded", function () {
  const a = document.getElementById("headline-scroll"),
    b = a.cloneNode(!0);
  a.parentNode.appendChild(b);
  const c = a.scrollWidth;
  (a.style.width = `${c}px`), (b.style.width = `${c}px`);
});
const styleSheet = document.createElement("style");
(styleSheet.type = "text/css"),
  (styleSheet.innerText = `
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}`),
  document.head.appendChild(styleSheet);
