import { CircleComponent } from "../../components";
import { ElementNames } from "../../types";
import { TransformElement } from "../impl";

export class Circle extends TransformElement {
  private _circleComponent: CircleComponent;

  constructor(cx: number, cy: number, r: number) {
    super(ElementNames.Circle);
    this._circleComponent = new CircleComponent();
    this._circleComponent.setCenter(cx, cy);
    this._circleComponent.setRadius(r);
    this._components.push(this._circleComponent);
    this.setFieldsToAttribute();
  }

  public setCenterX(x: number): void {
    this._circleComponent.setCenterX(x);
    this.setFieldToAttributeByComponent(this._circleComponent);
  }

  public setCenterY(y: number): void {
    this._circleComponent.setCenterY(y);
    this.setFieldToAttributeByComponent(this._circleComponent);
  }

  public setCenter(x: number, y: number): void {
    this._circleComponent.setCenter(x, y);
    this.setFieldToAttributeByComponent(this._circleComponent);
  }

  public setRadius(r: number): void {
    this._circleComponent.setRadius(r);
    this.setFieldToAttributeByComponent(this._circleComponent);
  }
}
