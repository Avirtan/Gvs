import { Attributes, FigureNames } from "../../types";
import { BaseElement } from "../BaseElement";

export class Ellipse extends BaseElement {
  constructor(cx: number, cy: number, rx: number, ry: number) {
    super();
    this.element = null;
    super.createElement(FigureNames.Ellipse);
    super.setAttribute(Attributes.CenterX, `${cx}`);
    super.setAttribute(Attributes.CenterY, `${cy}`);
    super.setAttribute(Attributes.RadiusX, `${rx}`);
    super.setAttribute(Attributes.RadiusY, `${ry}`);
  }
}
