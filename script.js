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
  console.log(cent);
  //graphic:
  main.style.setProperty("--counter", `${num.innerText - cent}%`);
  console.log(main.style.getPropertyValue("--counter"));
}

function countKey(event) {
  //only with space or enter
  if (event.code === "Enter" || event.code === "Space") {
    count();
  }
}

document.addEventListener("click", count);
document.addEventListener("keydown", countKey);

//reset
button.addEventListener("click", () => (num.innerText = -1));
