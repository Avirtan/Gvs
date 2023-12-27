import { ValidateResponse } from "../../../types";
import { PathCommandName } from "../../../types/path/PathCommandName";

export abstract class BaseCommand {
  protected prefix: PathCommandName = PathCommandName.None;
  protected params: any;

  public getParams(): any {
    return this.params;
  }

  public validate(): ValidateResponse {
    return {
      status: true,
      msg: "",
    };
  }

  public setObjectParam(param: any) {}

  public getCommandString(): string {
    return "";
  }
}
