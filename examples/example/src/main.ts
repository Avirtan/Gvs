import { AttributeType, Rect, Svg, SvgImg } from "gvs";
import { Attributes } from "../../../dist/attributes";
// const svgImg = await fetch("../public/rab.svg");
// const textSvgImg = await svgImg.text();
var svg = new Svg();
var imgSvg = await new SvgImg().FromUrl("../public/rab.svg");
var rect = new Rect(100, 200);
// rect.setAttribute(Attributes.Fill, "red")?.setAttribute(Attributes.X, "50")?.setAttribute(Attributes.Y, "50");
var attributes: AttributeType[] = [
  {
    name: Attributes.Fill,
    value: "green",
  },
  {
    name: Attributes.X,
    value: "50",
  },
];
rect.setAttributes(attributes);
// var rect = new Rect(100, 100);
svg.Element.appendChild(imgSvg.Element);
svg.Element.appendChild(rect.Element);
// var elemSvg = svg.createElement("test");
document.body.appendChild(svg.Element);
// document.querySelector("#app")?.appendChild(elemSvg);
