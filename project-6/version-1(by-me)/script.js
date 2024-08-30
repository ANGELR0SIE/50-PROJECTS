const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);
function checkBoxes() {
  boxes.forEach((box) => {
      box.classList.add("show");
  });

}
