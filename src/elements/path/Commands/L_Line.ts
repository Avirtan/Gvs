import { LineCmdParams, PathCommandName, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class L_Line extends BaseCommand {
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
    var str: string = "";
    for (var point of this.params.points) {
      str += `${point.x} ${point.y} `;
    }
    str = str.substring(0, str.length - 1);
    return `${this.prefix}${str}`;
  }

  public override setObjectParam(param: LineCmdParams): void {
    this.params = param;
  }
}
