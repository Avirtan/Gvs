import { BindQuadraticCurveParams, PathCommandName, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class BindQuadraticCurve extends BaseCommand {
  protected override prefix: PathCommandName = PathCommandName.BindQuadraticCurve;
  protected override params: BindQuadraticCurveParams;

  public constructor(param: BindQuadraticCurveParams, isLocal: boolean = false) {
    super();
    this.prefix = isLocal ? PathCommandName.BindQuadraticCurveLocal : this.prefix;
    this.params = param;
    this.setObjectParam(param);
  }

  public override getParams(): BindQuadraticCurveParams {
    return this.params;
  }

  public override validate(): ValidateResponse {
    return {
      status: true,
    };
  }

  public override getCommandString(): string {
    return `${this.prefix}${this.params.x} ${this.params.y}`;
  }

  public override setObjectParam(param: BindQuadraticCurveParams): void {
    this.params = param;
  }
}
