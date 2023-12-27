import { HorizontalLineParams, PathCommandName, ValidateResponse } from "../../../types";
import { BaseCommand } from "./BaseCommand";

export class ClosePath extends BaseCommand {
  protected override prefix: PathCommandName = PathCommandName.ClosePath;

  public constructor() {
    super();
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
