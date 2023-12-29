import { Attributes } from "./attribute";

export interface FieldComponent {
  name: Attributes;
  value: FieldValue;
}

export interface FieldValue {
  getValueString(): string;
  getValueObject(): object;
  setValue(data: any): void;
}
