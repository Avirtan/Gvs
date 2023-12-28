import { Attributes, MatrixSVG, Path, Rect, Svg, getCommandsFromString } from "gvs";
var svg = new Svg();
//path
//  <path d="M10 10 H90 V90 H10 L10 10" />
svg.setAttribute(Attributes.Width, "1000");
svg.setAttribute(Attributes.Height, "1000");
// svg.setAttribute(Attributes.ViewBox, "0 0 200 200");
var rect = new Rect(50, 50);
svg.addChild(rect);
// svg.setAttribute(Attributes.ViewBox, "-70 -50 100 100");
var matrix = new MatrixSVG();
rect.setAttribute(Attributes.X, "0")?.setAttribute(Attributes.Y, "0");
rect.setAttribute(Attributes.Transform, matrix.rotate(45, { x: 5, y: 5 }).getStringMatrixExpression());
var str = "M 10,10,20,30, 50,50 z"; //"M 10,10 L 30, 30,40, 40,50 50, M2 10 Z";
// var commands = getCommandsFromString(str);

// var path = new Path(commands!); //lineCmd, hLineCmd, vLineCmd, hLineCmd2, zCmd]);
// path.setAttribute(Attributes.Fill, "transparent");
// path.setAttribute(Attributes.Stroke, "black");
// svg.addChildren([path]);

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
