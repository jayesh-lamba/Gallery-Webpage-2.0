const overlay = document.getElementById("overlay");
const zoomedImage = document.getElementById("zoomedImage");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    zoomedImage.src = img.src;
    setTimeout(() => overlay.classList.add("show"), 10);
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
  setTimeout(() => overlay.style.display = "none", 300);
});
