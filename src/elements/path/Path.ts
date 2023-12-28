import { Attributes, ValidateResponse } from "../../types";
import { FigureNames } from "../../types/FigureNames";
import { BaseElement } from "../BaseElement";
import { BaseCommand } from "./Commands";

export class Path extends BaseElement {
  private _commands: BaseCommand[];
  private _isChecked: boolean = false;
  private _isDebug: boolean = false;

  public get Commands(): BaseCommand[] {
    return this._commands;
  }

  constructor(commands: BaseCommand[], isDebug: boolean = false) {
    super();
    this.element = null;
    super.createElement(FigureNames.Path);
    this._isDebug = isDebug;
    this.setCommands(commands);
  }

  public setupCommand() {
    var response = this.checkCommand();
    if (!response.status) {
      console.error(`ошибка установки комманд: ${response.msg}`);
      return;
    }
    var strCommand: string = "";
    for (let cmd of this.Commands) {
      strCommand += `${cmd.getCommandString()},`;
    }
    strCommand = strCommand.substring(0, strCommand.length - 1);
    super.setAttribute(Attributes.D, strCommand);
  }

  public setCommands(commands: BaseCommand[]) {
    this._isChecked = false;
    this._commands = commands;
    this.setupCommand();
  }

  public checkCommand(): ValidateResponse {
    if (this._isChecked) {
      return {
        status: true,
      };
    }
    var response: ValidateResponse;
    for (var command of this._commands) {
      response = command.validate();
      if (!response.status) {
        return response;
      }
    }
    this._isChecked = true;
    return {
      status: true,
    };
  }
}
