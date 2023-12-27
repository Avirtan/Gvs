import { Attributes, FigureNames } from "../../types";
import { BaseElement } from "../BaseElement";

export class Circle extends BaseElement {
  constructor(cx: number, cy: number, r: number) {
    super();
    this.element = null;
    super.createElement(FigureNames.Circle);
    super.setAttribute(Attributes.CenterX, `${cx}`);
    super.setAttribute(Attributes.CenterY, `${cy}`);
    super.setAttribute(Attributes.Radius, `${r}`);
  }
}
