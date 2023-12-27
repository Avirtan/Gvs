import { MoveToParams, PathCommandName, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class MoveTo extends BaseCommand {
  protected override prefix: PathCommandName = PathCommandName.MoveTo;
  protected override params: MoveToParams;

  public override getParams(): MoveToParams {
    return this.params;
  }

  public constructor(param: MoveToParams, isLocal: boolean = false) {
    super();
    this.prefix = isLocal ? PathCommandName.MoveToLocal : this.prefix;
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

  public override setObjectParam(param: MoveToParams): void {
    this.params = param;
  }
}
