import { MatrixParam } from "../types";
import { roundN } from "../utils";

export class MatrixSVG {
  //a - это может быть коэффициент масштабирования в направлении x, обычно обозначаемый как sx или значение косинуса cos (α) угла поворота.
  private _a: number;
  //b - это может быть коэффициент отклонения tan(α) в направлении y или значение синуса sin(α) угла поворота.
  private _b: number;
  //c - это может быть коэффициент отклонения tan(α) в направлении x или значение синуса -sin(α) угла поворота.
  private _c: number;
  //d – это может быть масштабный коэффициент в направлении y, обычно обозначаемый как sy или значение косинуса cos(α) угла поворота.
  private _d: number;
  //e – сдвиг в направлении x обычно обозначается как tx
  private _e: number;
  //f – translation along the y-direction is usually denoted as ty
  private _f: number;

  public constructor(param?: MatrixParam) {
    this._a = param?.a ?? 1;
    this._b = param?.b ?? 0;
    this._c = param?.c ?? 0;
    this._d = param?.d ?? 1;
    this._e = param?.e ?? 0;
    this._f = param?.f ?? 0;
  }

  public setPosition(x: number, y: number): this {
    this._e = x;
    this._f = y;
    return this;
  }

  public addPosition(x: number, y: number): this {
    this.setPosition(this._e + x, this._f + y);
    return this;
  }

  public setScale(x: number, y: number, pivot?: { x?: number; y?: number }): this {
    this._a = x;
    this._d = y;
    var x = pivot?.x ?? 0;
    var y = pivot?.y ?? 0;
    if (x != 0 || y != 0) {
      x = x * (1 - x);
      y = y * (1 - y);
    }
    this._e = x;
    this._f = y;
    return this;
  }

  public skewinX(angel: number): this {
    var rad = angel * (Math.PI / 180);
    this._c = roundN(Math.tan(rad), 5);
    return this;
  }

  public skewinY(angel: number): this {
    var rad = angel * (Math.PI / 180);
    this._b = roundN(Math.tan(rad), 5);
    return this;
  }

  public rotate(angel: number, option?: { x?: number; y?: number }): this {
    var rad = angel * (Math.PI / 180);
    var cosA = roundN(Math.cos(rad), 5);
    var sinA = roundN(Math.sin(rad), 5);
    this._a = cosA;
    this._b = sinA;
    this._c = -sinA;
    this._d = cosA;
    var x = option?.x ?? 0;
    var y = option?.y ?? 0;
    if (x != 0 || y != 0) {
      x = x * (1 - cosA) + y * sinA;
      y = y * (1 - cosA) - x * sinA;
    }
    this._e = x;
    this._f = y;
    return this;
  }

  public getStringMatrixExpression(): string {
    return `matrix(${this._a}, ${this._b}, ${this._c}, ${this._d}, ${this._e}, ${this._f})`;
  }
}
