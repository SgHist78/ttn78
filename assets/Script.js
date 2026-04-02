/* Auto-detect portrait / landscape / square */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".img-frame img").forEach(img => {
    img.onload = () => {
      const frame = img.closest(".img-frame");
      if (img.naturalWidth > img.naturalHeight) {
        frame.classList.add("landscape");
      } else if (img.naturalWidth < img.naturalHeight) {
        frame.classList.add("portrait");
      } else {
        frame.classList.add("square");
      }
    };
  });
});