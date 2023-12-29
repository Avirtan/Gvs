import { Attributes } from "../../types";
import { NumberField } from "../fields";
import { BaseComponent } from "../impl";

export class PointsComponent extends BaseComponent {
  public constructor() {
    super();
    this._fields.push({
      name: Attributes.Points,
      value: new NumberField(0),
    });
  }

  public setX1(x: number): void {
    var field = this._fields.find((value) => value.name == Attributes.X1);
    field?.value.setValue(x);
  }
}
