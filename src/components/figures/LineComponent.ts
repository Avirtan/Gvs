import { Attributes } from "../../types";
import { NumberField } from "../fields";
import { BaseComponent } from "../impl";

export class LineComponent extends BaseComponent {
  public constructor() {
    super();
    this._fields.push({
      name: Attributes.X1,
      value: new NumberField(0),
    });
    this._fields.push({
      name: Attributes.Y1,
      value: new NumberField(0),
    });
    this._fields.push({
      name: Attributes.X2,
      value: new NumberField(0),
    });
    this._fields.push({
      name: Attributes.Y2,
      value: new NumberField(0),
    });
  }

  public setX1(x: number): void {
    var field = this._fields.find((value) => value.name == Attributes.X1);
    field?.value.setValue(x);
  }

  public setY1(x: number): void {
    var field = this._fields.find((value) => value.name == Attributes.Y1);
    field?.value.setValue(x);
  }

  public setX2(x: number): void {
    var field = this._fields.find((value) => value.name == Attributes.X2);
    field?.value.setValue(x);
  }

  public setY2(x: number): void {
    var field = this._fields.find((value) => value.name == Attributes.Y2);
    field?.value.setValue(x);
  }
}
