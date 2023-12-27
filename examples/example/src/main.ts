import { Attributes, Path, Svg, getCommandsFromString } from "gvs";
var svg = new Svg();
//path
//  <path d="M10 10 H90 V90 H10 L10 10" />

var str =
  "M 60.70955,-43 C 0.26276,1.442317 1.793,1.095455,  2.276409,0.226025 0.404045,0.65809 1.53162,1.520624 2.244118,-0.161449"; //"M 10,10 L 30, 30,40, 40,50 50, M2 10 Z";
var commands = getCommandsFromString(str);

var path = new Path(commands!); //lineCmd, hLineCmd, vLineCmd, hLineCmd2, zCmd]);
path.setAttribute(Attributes.Fill, "transparent");
path.setAttribute(Attributes.Stroke, "black");
svg.addChildren([path]);

// str = str.replaceAll(",", " ");
// const removeSpaceBetween = /[a-zA-Z]\d/g;
// str = str.replaceAll(removeSpaceBetween, (match) => {
//   return match[0] + " " + match[1];
// });
// const removeSpace = /\s{2}/g;
// str = str.replaceAll(removeSpace, (match) => {
//   return match[0];
// });
// var commands = [];
// var values = [];
// var value = "";
// console.log(str);
// str += " ";
// for (var char of str) {
//   if (char.match(/[a-zA-Z]/)) {
//     if (values.length > 0) {
//       commands.push(values);
//     }
//     values = [];
//     values.push(char);
//     continue;
//   }
//   if (char.match(/[0-9]/)) {
//     value += char;
//   }
//   if (char == " ") {
//     if (value != "") {
//       values.push(value);
//     }
//     value = "";
//   }
// }
// if (values.length > 0) {
//   commands.push(values);
// }
// console.log(commands);

document.body.appendChild(svg.Element);
