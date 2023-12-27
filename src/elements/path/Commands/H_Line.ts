import { HorizontalLineParams, PathCommandName, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class H_Line extends BaseCommand {
  protected override prefix: PathCommandName = PathCommandName.HorizontalLine;
  protected override params: HorizontalLineParams;

  public override getParams(): HorizontalLineParams {
    return this.params;
  }

  public constructor(param: HorizontalLineParams, isLocal: boolean = false) {
    super();
    this.prefix = isLocal ? PathCommandName.HorizontalLineLocal : this.prefix;
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

  public override setObjectParam(param: HorizontalLineParams): void {
    this.params = param;
  }
}
