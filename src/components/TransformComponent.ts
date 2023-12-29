import { MatrixSVG } from "../math";
import { Attributes } from "../types";
import { BaseComponent } from "./impl/BaseComponent";

export class TransformComponent extends BaseComponent {
  private _matrix: MatrixSVG;

  public constructor() {
    super();
    this._matrix = new MatrixSVG();
    this._fields.push({
      name: Attributes.Transform,
      value: this._matrix,
    });
  }

  public setPosition(x: number, y: number): void {
    this._matrix.setPosition(x, y);
  }

  public addPosition(x: number, y: number): void {
    this._matrix.addPosition(x, y);
  }

  public setScale(x: number, y: number, pivot?: { x?: number; y?: number }) {
    this._matrix.setScale(x, y, pivot);
  }

  public skewinX(angel: number) {
    this._matrix.skewinX(angel);
  }

  public skewinY(angel: number) {
    this._matrix.skewinY(angel);
  }

  public rotate(angel: number, option?: { x?: number; y?: number }) {
    this._matrix.rotate(angel, option);
  }
}
