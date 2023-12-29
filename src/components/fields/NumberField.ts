import { Attributes } from "../../types";
import { FieldValue } from "../../types/Components";

export class NumberField implements FieldValue {
  private _value: number;
  private _cache: string;

  public constructor(value: number) {
    this._value = value;
    this._cache = value.toString();
  }

  public setValue(data: any) {
    var type = typeof data;
    switch (type) {
      case "object":
        this._value = data["value"];
        break;
      case "number":
        this._value = data;
        break;
    }
    this._cache = this._value.toString();
  }

  getValueString(): string {
    return this._cache;
  }

  getValueObject(): object {
    return {
      value: this._value,
    };
  }
}
