const boxes = document.querySelectorAll(".box");
const draggable = document.querySelector(".draggable");

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.classList.add("hovered");
  });

  box.addEventListener("dragleave", (e) => {
    e.preventDefault();
    box.classList.remove("hovered");
  });

  box.addEventListener("drop", (e) => {
    e.preventDefault();
    box.classList.remove("hovered");
    box.appendChild(draggable);
  });
});
