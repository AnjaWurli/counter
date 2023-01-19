const num = document.querySelector("label");
const button = document.querySelector("button");
const main = document.querySelector("main");
let cent = 0; //sets the graphic back to 1 when number hits x01

function count() {
  //counter increases with click/key
  num.innerText = Number(num.innerText) + 1;

  if (num.innerText % 100 === 1 && num.innerText > 1) {
    cent += 100;
  }
  //graphic:
  main.style.setProperty("--counter", `${num.innerText - cent}%`);
}

main.addEventListener("click", count);
document.addEventListener("keydown", (event) => {
  if (event.code === "Enter" || event.code === "Space") {
    count();
  }
});

//reset
button.addEventListener("click", () => {
  num.innerText = 0;
  main.style.removeProperty("--counter");
});
