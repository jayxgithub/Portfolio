document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const text = ["Hi, I'm Jay Bombatkar", "Embedded Engineer", "PCB Designer"];
let i = 0, j = 0;
let currentText = "", isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    document.getElementById("typing").innerHTML = currentText;

    if (j == text[i].length) isDeleting = true;
    if (j == 0) {
      isDeleting = false;
      i++;
    }
  } else {
    i = 0;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();