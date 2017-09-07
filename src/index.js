import _ from "lodash";
import "./styles.css";

function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "World"], " ");

  return element;
}

document.body.appendChild(component());
