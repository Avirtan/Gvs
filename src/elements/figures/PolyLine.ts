import { Attributes, FigureNames, Point } from "../../types";
import { PointsToString } from "../../utils";
import { BaseElement } from "../BaseElement";

export class PolyLine extends BaseElement {
  constructor(points: Point[], colorStroke: string = "red") {
    super();
    this.element = null;
    super.createElement(FigureNames.Polyline);
    super.setAttribute(Attributes.Points, PointsToString(points));
    super.setAttribute(Attributes.Stroke, colorStroke);
  }
}
