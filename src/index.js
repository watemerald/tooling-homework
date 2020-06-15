import _ from "lodash";
import "./style.css";
import Icon1 from "./icons/icon.png";
import Icon2 from "./icons/icon.svg";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon1 = new Image();
  myIcon1.src = Icon1;

  element.appendChild(myIcon1);

  const myIcon2 = new Image();
  myIcon2.src = Icon2;

  element.appendChild(myIcon2);

  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
