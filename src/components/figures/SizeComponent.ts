import { Attributes, SizeUnits } from "../../types";
import { NumberField } from "../fields";
import { BaseComponent } from "../impl";

export class SizeComponent extends BaseComponent {
  public constructor() {
    super();
    this._fields.push({
      name: Attributes.Width,
      value: new NumberField(0),
    });
    this._fields.push({
      name: Attributes.Height,
      value: new NumberField(0),
    });
  }

  public setWidth(value: number, sizeUnit: SizeUnits = SizeUnits.Pixels): void {
    var field = this._fields.find((value) => value.name == Attributes.Width);
    field?.value.setValue(value);
  }

  public setHeight(height: number, sizeUnit: SizeUnits = SizeUnits.Pixels): void {
    var field = this._fields.find((value) => value.name == Attributes.Height);
    field?.value.setValue(height);
  }
}
