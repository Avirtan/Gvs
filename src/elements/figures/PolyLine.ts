import { Attributes, ElementNames, Point } from "../../types";
import { PointsToString } from "../../utils";
import { BaseElement } from "../impl/BaseElement";

export class PolyLine extends BaseElement {
  constructor(points: Point[], colorStroke: string = "red") {
    super();
    this._element = null;
    super.createElement(ElementNames.Polyline);
    super.setAttribute(Attributes.Points, PointsToString(points));
    super.setAttribute(Attributes.Stroke, colorStroke);
  }
}
