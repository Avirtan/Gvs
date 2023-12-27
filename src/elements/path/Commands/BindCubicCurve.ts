import { BindCubicCurveParams, PathCommandName, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class BindCubicCurve extends BaseCommand {
  protected override prefix: PathCommandName = PathCommandName.BindCubicCurve;
  protected override params: BindCubicCurveParams;

  public constructor(param: BindCubicCurveParams, isLocal: boolean = false) {
    super();
    this.prefix = isLocal ? PathCommandName.BindCubicCurveLocal : this.prefix;
    this.params = param;
    this.setObjectParam(param);
  }

  public override getParams(): BindCubicCurveParams {
    return this.params;
  }

  public override validate(): ValidateResponse {
    return {
      status: true,
    };
  }

  public override getCommandString(): string {
    return `${this.prefix}${this.params.x2} ${this.params.y2} ${this.params.x} ${this.params.y}`;
  }

  public override setObjectParam(param: BindCubicCurveParams): void {
    this.params = param;
  }
}
