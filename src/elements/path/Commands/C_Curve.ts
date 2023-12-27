import { CubicCurveParams, PathCommandName, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class C_Curve extends BaseCommand {
  protected override prefix: PathCommandName = PathCommandName.CubicCurve;
  protected override params: CubicCurveParams;

  public constructor(param: CubicCurveParams, isLocal: boolean = false) {
    super();
    this.prefix = isLocal ? PathCommandName.CubicCurveLocal : this.prefix;
    this.params = param;
    this.setObjectParam(param);
  }

  public override getParams(): CubicCurveParams {
    return this.params;
  }

  public override validate(): ValidateResponse {
    return {
      status: true,
    };
  }

  public override getCommandString(): string {
    return `${this.prefix}${this.params.x1} ${this.params.y1} ${this.params.x2} ${this.params.y2} ${this.params.x} ${this.params.y}`;
  }

  public override setObjectParam(param: CubicCurveParams): void {
    this.params = param;
  }
}
