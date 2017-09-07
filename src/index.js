import _ from "lodash";
import "./styles.css";
import dogeify from "./doge";

function component() {
  var element = document.createElement("div");

  var input = document.createElement("input");
  input.type = "text";
  element.appendChild(input);

  var btn = document.createElement("button");
  btn.innerText = "Dogeify!";
  btn.onclick = function() {
    var suchValue = input.value;
    var muchText = dogeify(suchValue);

    var h1 = document.createElement("h1");
    h1.innerText = _.join(["Doge says:", muchText], " ");
    element.appendChild(h1);

    input.value = "";
  };
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
