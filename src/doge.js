import { join } from "lodash";

var niceArray = [
  "such",
  "wow",
  "so",
  "bes",
  "much",
  "very",
  "plz",
  "nice",
  "many",
  "how"
];

function dogeify(suchInput) {
  var soRandom = parseInt(Math.random() * niceArray.length);
  return join([niceArray[soRandom], suchInput], " ");
}

export default dogeify;
