import { Attributes } from "../../attributes";
import { BaseElement } from "../BaseElement";

export class Rect extends BaseElement {
  constructor(width: number, hight: number) {
    super();
    this.element = null;
    super.createElement("rect");
    super.setAttribute(Attributes.Width, width.toString());
    super.setAttribute(Attributes.Height, width.toString());
  }
}
