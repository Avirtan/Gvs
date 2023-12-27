import {
  Arcs,
  Attributes,
  ClosePath,
  CubicCurve,
  HorizontalLine,
  Line,
  LineCmd,
  MoveTo,
  Path,
  Svg,
  VerticalLine,
} from "gvs";
var svg = new Svg();
//path
//  <path d="M10 10 H90 V90 H10 L10 10" />
var moveCmd = new MoveTo({
  x: 10,
  y: 10,
});

var lineCmd = new LineCmd({
  x: 50,
  y: 50,
});

var hLineCmd = new HorizontalLine({
  x: 90,
});

var vLineCmd = new VerticalLine({
  x: 90,
});

var hLineCmd2 = new HorizontalLine({
  x: 10,
});
var cubicCurve = new CubicCurve({
  x1: 20,
  y1: 20,
  x2: 40,
  y2: 20,
  x: 50,
  y: 10,
});

var arc = new Arcs({
  rx: 30,
  ry: 50,
  largeArcFlag: 0,
  seepFlag: 0,
  xAxiosRot: 1,
  x: 162,
  y: 162,
});
var zCmd = new ClosePath();
var path = new Path([moveCmd, arc]); //lineCmd, hLineCmd, vLineCmd, hLineCmd2, zCmd]);
path.setAttribute(Attributes.Fill, "transparent");
path.setAttribute(Attributes.Stroke, "black");
svg.addChildren([path]);
document.body.appendChild(svg.Element);
