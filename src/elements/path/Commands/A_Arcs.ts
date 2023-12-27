import { ArcsParams, BindCubicCurveParams, PathCommandName, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class A_Arcs extends BaseCommand {
  protected override prefix: PathCommandName = PathCommandName.Arcs;
  protected override params: ArcsParams;

  public constructor(param: ArcsParams, isLocal: boolean = false) {
    super();
    this.prefix = isLocal ? PathCommandName.ArcsLocal : this.prefix;
    this.params = param;
    this.setObjectParam(param);
  }

  public override getParams(): ArcsParams {
    return this.params;
  }

  public override validate(): ValidateResponse {
    return {
      status: true,
    };
  }

  public override getCommandString(): string {
    return `${this.prefix}${this.params.rx} ${this.params.ry} ${this.params.xAxiosRot} ${this.params.largeArcFlag} ${this.params.seepFlag} ${this.params.x} ${this.params.y}`;
  }

  public override setObjectParam(param: ArcsParams): void {
    this.params = param;
  }
}
