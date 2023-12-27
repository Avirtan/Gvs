import { VerticalLineParams, PathCommandName, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class V_Line extends BaseCommand {
  protected override prefix: PathCommandName = PathCommandName.VerticalLine;
  protected override params: VerticalLineParams;

  public override getParams(): VerticalLineParams {
    return this.params;
  }

  public constructor(param: VerticalLineParams, isLocal: boolean = false) {
    super();
    this.prefix = isLocal ? PathCommandName.VerticalLineLocal : this.prefix;
    this.setObjectParam(param);
  }

  public override validate(): ValidateResponse {
    return {
      status: true,
    };
  }

  public override getCommandString(): string {
    return `${this.prefix}${this.params.x}`;
  }

  public override setObjectParam(param: VerticalLineParams): void {
    this.params = param;
  }
}
