import { Attributes, SizeUnits } from "../../types";
import { BaseElement } from "../BaseElement";

export class Rect extends BaseElement {
  constructor(width: number, hight: number, sizeUnit: SizeUnits = SizeUnits.Pixels) {
    super();
    this.element = null;
    super.createElement("rect");
    super.setAttribute(Attributes.Width, `${width}${sizeUnit}`);
    super.setAttribute(Attributes.Height, `${hight}${sizeUnit}`);
  }
}
