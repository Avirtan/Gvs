import { Attributes } from "../../types";
import { NumberField } from "../fields";
import { BaseComponent } from "../impl";

export class CircleComponent extends BaseComponent {
  public constructor() {
    super();
    this._fields.push({
      name: Attributes.CenterX,
      value: new NumberField(0),
    });
    this._fields.push({
      name: Attributes.CenterY,
      value: new NumberField(0),
    });
    this._fields.push({
      name: Attributes.Radius,
      value: new NumberField(0),
    });
  }

  public setCenterX(x: number): void {
    var field = this._fields.find((value) => value.name == Attributes.CenterX);
    field?.value.setValue(x);
  }

  public setCenterY(y: number): void {
    var field = this._fields.find((value) => value.name == Attributes.CenterY);
    field?.value.setValue(y);
  }

  public setCenter(x: number, y: number): void {
    this.setCenterX(x);
    this.setCenterY(y);
  }

  public setRadius(r: number): void {
    var field = this._fields.find((value) => value.name == Attributes.Radius);
    field?.value.setValue(r);
  }
}
