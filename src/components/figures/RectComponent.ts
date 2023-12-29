import { Attributes } from "../../types";
import { NumberField } from "../fields";
import { BaseComponent } from "../impl";

export class RectComponent extends BaseComponent {
  public constructor() {
    super();
    this._fields.push({
      name: Attributes.X,
      value: new NumberField(0),
    });
    this._fields.push({
      name: Attributes.Y,
      value: new NumberField(0),
    });
    this._fields.push({
      name: Attributes.RadiusX,
      value: new NumberField(0),
    });
    this._fields.push({
      name: Attributes.RadiusY,
      value: new NumberField(0),
    });
  }

  public setX(x: number): void {
    var field = this._fields.find((value) => value.name == Attributes.X);
    field?.value.setValue(x);
  }

  public setY(x: number): void {
    var field = this._fields.find((value) => value.name == Attributes.Y);
    field?.value.setValue(x);
  }

  public setRX(x: number): void {
    var field = this._fields.find((value) => value.name == Attributes.RadiusX);
    field?.value.setValue(x);
  }

  public setRY(x: number): void {
    var field = this._fields.find((value) => value.name == Attributes.RadiusY);
    field?.value.setValue(x);
  }
}
