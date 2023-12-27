import { PathCommandName, QuadraticCurveParams, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class Q_Curve extends BaseCommand {
  protected override prefix: PathCommandName = PathCommandName.QuadraticCurve;
  protected override params: QuadraticCurveParams;

  public constructor(param: QuadraticCurveParams, isLocal: boolean = false) {
    super();
    this.prefix = isLocal ? PathCommandName.QuadraticCurveLocal : this.prefix;
    this.params = param;
    this.setObjectParam(param);
  }

  public override getParams(): QuadraticCurveParams {
    return this.params;
  }

  public override validate(): ValidateResponse {
    return {
      status: true,
    };
  }

  public override getCommandString(): string {
    return `${this.prefix}${this.params.x1} ${this.params.y1} ${this.params.x} ${this.params.y}`;
  }

  public override setObjectParam(param: QuadraticCurveParams): void {
    this.params = param;
  }
}
