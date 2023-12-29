import { LineComponent } from "../../components/figures/LineComponent";
import { Attributes, ElementNames } from "../../types";
import { BaseElement } from "../impl/BaseElement";

export class Line extends BaseElement {
  private _lineComponent: LineComponent;

  constructor(x1: number, y1: number, x2: number, y2: number, colorStroke: string = "black") {
    super();
    this._element = null;
    super.createElement(ElementNames.Line);
    this._lineComponent = new LineComponent();
    this._lineComponent.setX1(x1);
    this._lineComponent.setY1(y1);
    this._lineComponent.setX2(x2);
    this._lineComponent.setY2(y2);
    this._components.push(this._lineComponent);
    super.setAttribute(Attributes.Stroke, colorStroke);
    this.setFieldsToAttribute();
  }

  public setX1(x: number): void {
    this._lineComponent.setX1(x);
    this.setFieldToAttributeByComponent(this._lineComponent);
  }

  public setY1(y: number): void {
    this._lineComponent.setY1(y);
    this.setFieldToAttributeByComponent(this._lineComponent);
  }

  public setX2(x: number): void {
    this._lineComponent.setX2(x);
    this.setFieldToAttributeByComponent(this._lineComponent);
  }

  public setY2(y: number): void {
    this._lineComponent.setY2(y);
    this.setFieldToAttributeByComponent(this._lineComponent);
  }
}
