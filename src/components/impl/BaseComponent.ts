import { FieldComponent } from "../../types/Components";

export abstract class BaseComponent {
  protected _fields: FieldComponent[] = [];

  public get Fields(): FieldComponent[] {
    return this._fields;
  }
}
