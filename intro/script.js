// step1
// console.log("test if the HMTL is linked with JS");

// step2:
const btnPlus = document.querySelectorAll("button");
// [btn1,btn2,btn3....]
const qte = document.querySelectorAll("span");
// [qte1,qte2,qte3...]
console.log(btnPlus);
console.log(qte);
// step3 : add the event to an element
// btnPlus[5].addEventListener("click", function () {
//   // test if the event works
//   //   console.log("test if the event works");
//   //   <span>0</span>=<span>0</span>+1
//   //   qte.innerHTML = Number(qte.innerHTML) + 1;
//   qte[5].innerHTML++; //  qte.innerHTML = Number(qte.innerHTML) + 1;
//   //   qte.innerHTML = +qte.innerHTML + 1;
// });
// function increment(i) {
// }
for (let i = 0; i <= qte.length - 1; i++) {
  btnPlus[i].addEventListener("click", function () {
    qte[i].innerHTML++; //  qte.innerHTML = Number(qte.innerHTML) + 1;
  });
}
