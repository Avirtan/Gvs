import { Attributes, FigureNames } from "../../types";
import { BaseElement } from "../BaseElement";

export class Line extends BaseElement {
  constructor(x1: number, y1: number, x2: number, y2: number, colorStroke: string = "red") {
    super();
    this.element = null;
    super.createElement(FigureNames.Line);
    super.setAttribute(Attributes.X1, `${x1}`);
    super.setAttribute(Attributes.Y1, `${y1}`);
    super.setAttribute(Attributes.X2, `${x2}`);
    super.setAttribute(Attributes.Y2, `${y2}`);
    super.setAttribute(Attributes.Stroke, colorStroke);
  }
}
