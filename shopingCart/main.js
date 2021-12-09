// console.log("linked");**

// import of the variables
const btnPlus = document.querySelectorAll(".btn-plus");
const btnMinus = document.querySelectorAll(".btn-moins");
const qte = document.querySelectorAll(".quantity");
// delete variables
const btnDelete = Array.from(document.getElementsByClassName("btn-delete"));
// const productDiv = Array.from(document.getElementsByClassName("product-div"));
const btnLike = document.querySelectorAll(".btn-like");
const like = document.querySelectorAll(".like");

// -------------------------------------------------------------
// events + functions
// events to the btn blus buttons
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
  });
}

for (let i = 0; i <= btnMinus.length - 1; i++) {
  btnMinus[i].addEventListener("click", function () {
    if (qte[i].innerHTML > 0) {
      qte[i].innerHTML--;
    }
  });
}

// delete function
for (let i = 0; i < btnDelete.length; i++) {
  btnDelete[i].addEventListener("click", function () {
    // productDiv[i].remove();
    btnDelete[i].parentElement.parentElement.remove();
  });
}

for (let i = 0; i < btnLike.length; i++) {
  btnLike[i].addEventListener("click", function () {
    if (like[i].style.fill === "red") {
      like[i].style.fill = "black";
    } else {
      like[i].style.fill = "red";
    }
  });
}
