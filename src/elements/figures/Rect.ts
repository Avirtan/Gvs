import { RectComponent, SizeComponent } from "../../components";
import { Attributes, ElementNames, SizeUnits } from "../../types";
import { TransformElement } from "../impl";

export class Rect extends TransformElement {
  private _rectComponent: RectComponent;
  private _sizeComponent: SizeComponent;

  constructor(width: number, hight: number, sizeUnit: SizeUnits = SizeUnits.Pixels) {
    super(ElementNames.Rect);
    this._rectComponent = new RectComponent();
    this._sizeComponent = new SizeComponent();
    this._sizeComponent.setHeight(hight, sizeUnit);
    this._sizeComponent.setWidth(width, sizeUnit);
    this._components.push(this._rectComponent);
    this._components.push(this._sizeComponent);
    this.setFieldsToAttribute();
  }

  public setX(value: number) {
    this._rectComponent.setX(value);
    this.setFieldToAttributeByComponent(this._rectComponent);
  }

  public setY(value: number): void {
    this._rectComponent.setY(value);
    this.setFieldToAttributeByComponent(this._rectComponent);
  }

  public setRX(value: number) {
    this._rectComponent.setRX(value);
    this.setFieldToAttributeByComponent(this._rectComponent);
  }

  public setRY(value: number): void {
    this._rectComponent.setRY(value);
    this.setFieldToAttributeByComponent(this._rectComponent);
  }

  public setWidth(value: number): void {
    this._sizeComponent.setWidth(value);
    this.setFieldToAttributeByComponent(this._sizeComponent);
  }

  public setHeight(value: number): void {
    this._sizeComponent.setHeight(value);
    this.setFieldToAttributeByComponent(this._sizeComponent);
  }
}
