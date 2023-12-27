import { LineCmdParams, PathCommandName, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class LineCmd extends BaseCommand {
  protected override prefix: PathCommandName = PathCommandName.Line;
  protected override params: LineCmdParams;

  public override getParams(): LineCmdParams {
    return this.params;
  }

  public constructor(param: LineCmdParams, isLocal: boolean = false) {
    super();
    this.prefix = isLocal ? PathCommandName.LineLocal : this.prefix;
    this.setObjectParam(param);
  }

  public override validate(): ValidateResponse {
    return {
      status: true,
    };
  }

  public override getCommandString(): string {
    return `${this.prefix}${this.params.x} ${this.params.y}`;
  }

  public override setObjectParam(param: LineCmdParams): void {
    this.params = param;
  }
}
