import { EllipseComponent } from "../../components";
import { ElementNames } from "../../types";
import { TransformElement } from "../impl";

export class Ellipse extends TransformElement {
  private _ellipseComponent: EllipseComponent;

  constructor(cx: number, cy: number, rx: number, ry: number) {
    super(ElementNames.Ellipse);
    this._ellipseComponent = new EllipseComponent();
    this._ellipseComponent.setCenter(cx, cy);
    this._ellipseComponent.setRadiusX(rx);
    this._ellipseComponent.setRadiusY(ry);
    this._components.push(this._ellipseComponent);
    this.setFieldsToAttribute();
  }

  public setCenterX(x: number): void {
    this._ellipseComponent.setCenterX(x);
    this.setFieldToAttributeByComponent(this._ellipseComponent);
  }

  public setCenterY(y: number): void {
    this._ellipseComponent.setCenterY(y);
    this.setFieldToAttributeByComponent(this._ellipseComponent);
  }

  public setCenter(x: number, y: number): void {
    this._ellipseComponent.setCenter(x, y);
    this.setFieldToAttributeByComponent(this._ellipseComponent);
  }

  public setRadiusX(rx: number): void {
    this._ellipseComponent.setRadiusX(rx);
    this.setFieldToAttributeByComponent(this._ellipseComponent);
  }

  public setRadiusY(ry: number): void {
    this._ellipseComponent.setRadiusY(ry);
    this.setFieldToAttributeByComponent(this._ellipseComponent);
  }
}
