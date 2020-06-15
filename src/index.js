import _ from "lodash";
import "./style.css";
import Icon1 from "./icons/icon.png";
import Icon2 from "./icons/icon.svg";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const children = document.createElement("div");

  const myIcon1 = new Image();
  myIcon1.src = Icon1;

  children.appendChild(myIcon1);

  const myIcon2 = new Image();
  myIcon2.src = Icon2;

  children.appendChild(myIcon2);

  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  children.appendChild(btn);

  element.appendChild(children);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept("./print.js", () => {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
