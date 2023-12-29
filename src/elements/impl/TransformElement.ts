import { TransformComponent } from "../../components";
import { BaseElement } from "./BaseElement";

export abstract class TransformElement extends BaseElement {
  protected _transfomrComponent: TransformComponent;

  public constructor(nameElement: string) {
    super();
    this._element = null;
    super.createElement(nameElement);
    this._transfomrComponent = new TransformComponent();
    this._components.push(this._transfomrComponent);
  }

  public setPosition(x: number, y: number): void {
    this._transfomrComponent.setPosition(x, y);
    this.setFieldToAttributeByComponent(this._transfomrComponent);
  }

  public addPosition(x: number, y: number): void {
    this._transfomrComponent.addPosition(x, y);
    this.setFieldToAttributeByComponent(this._transfomrComponent);
  }

  public setScale(x: number, y: number, pivot?: { x?: number; y?: number }) {
    this._transfomrComponent.setScale(x, y, pivot);
    this.setFieldToAttributeByComponent(this._transfomrComponent);
  }

  public skewinX(angel: number) {
    this._transfomrComponent.skewinX(angel);
    this.setFieldToAttributeByComponent(this._transfomrComponent);
  }

  public skewinY(angel: number) {
    this._transfomrComponent.skewinY(angel);
    this.setFieldToAttributeByComponent(this._transfomrComponent);
  }

  public rotate(angel: number, option?: { x?: number; y?: number }) {
    this._transfomrComponent.rotate(angel, option);
    this.setFieldToAttributeByComponent(this._transfomrComponent);
  }
}
