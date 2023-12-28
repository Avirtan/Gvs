import { PathCommandName, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class Z_ClosePath extends BaseCommand {
  protected override prefix: PathCommandName = PathCommandName.ClosePath;

  public constructor(isLocal: boolean = false) {
    super();
    this.prefix = isLocal ? PathCommandName.ClosePathLocal : this.prefix;
  }

  public override validate(): ValidateResponse {
    return {
      status: true,
    };
  }

  public override getCommandString(): string {
    return `${this.prefix}`;
  }
}
