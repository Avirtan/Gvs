import {
  A_Arcs,
  BaseCommand,
  C_Curve,
  H_Line,
  L_Line,
  M_MoveTo,
  Q_Curve,
  S_BindCubicCurve,
  T_BindQuadraticCurve,
  V_Line,
  Z_ClosePath,
} from "../elements";
import { PathCommandName, Point } from "../types";

export function getCommandsFromString(str: string): BaseCommand[] | null {
  var commands: BaseCommand[] = [];
  var array = str.match(/[mMLlZzCcSsQqTtAaHhVv]|(-?)(\d+)(\.\d+)?/g)!;
  var arrayValues: any[][] = [];
  var values: any[] = [];
  for (var value of array) {
    if (value.match(/[a-zA-Z]/)) {
      if (values.length > 0) {
        arrayValues.push(values);
      }
      values = [];
      values.push(value);
      continue;
    }
    values.push(value);
  }
  if (values.length > 0) {
    arrayValues.push(values);
  }
  for (var arr of arrayValues) {
    var typeCommand: PathCommandName = arr.shift() as PathCommandName;
    var command = getCommandsByTypeAndArrayParams(typeCommand, arr);
    if (command == null || command.length == 0) {
      continue;
    }
    commands.push(...command);
  }
  return commands;
}

export function getCommandsByTypeAndArrayParams(typeCommand: PathCommandName, params: string[]): BaseCommand[] | null {
  var commands: BaseCommand[] = [];
  switch (typeCommand) {
    // M комманда
    case PathCommandName.MoveTo:
    case PathCommandName.MoveToLocal:
      if ((params.length & 1) != 0) {
        console.error("ошибка усановки параметров в M");
        return null;
      }
      var isLocal = typeCommand == PathCommandName.MoveToLocal;
      commands.push(
        new M_MoveTo(
          {
            x: parseFloat(params.shift()!),
            y: parseFloat(params.shift()!),
          },
          isLocal
        )
      );
      if (params.length == 0) break;
      typeCommand = isLocal ? PathCommandName.LineLocal : PathCommandName.Line;
      var commandsTmp = getCommandsByTypeAndArrayParams(typeCommand, params);
      if (commandsTmp == null || commandsTmp.length == 0) {
        break;
      }
      commands.push(...commandsTmp);
      break;
    // A комманда
    case PathCommandName.Arcs:
    case PathCommandName.ArcsLocal:
      if (params.length != 7) {
        console.error("ошибка усановки параметров в A");
        return null;
      }
      commands.push(
        new A_Arcs(
          {
            rx: parseFloat(params[0]),
            ry: parseFloat(params[1]),
            xAxiosRot: parseFloat(params[2]),
            largeArcFlag: parseFloat(params[3]),
            seepFlag: parseFloat(params[4]),
            x: parseFloat(params[5]),
            y: parseFloat(params[6]),
          },
          typeCommand == PathCommandName.ArcsLocal
        )
      );
      break;
    // S комманда
    case PathCommandName.BindCubicCurve:
    case PathCommandName.BindCubicCurveLocal:
      if (params.length != 4) {
        console.error("ошибка усановки параметров в S");
        return null;
      }
      commands.push(
        new S_BindCubicCurve(
          {
            x: parseFloat(params[0]),
            y: parseFloat(params[1]),
            x2: parseFloat(params[2]),
            y2: parseFloat(params[3]),
          },
          typeCommand == PathCommandName.BindCubicCurveLocal
        )
      );
      break;
    // T комманда
    case PathCommandName.BindQuadraticCurve:
    case PathCommandName.BindQuadraticCurveLocal:
      if (params.length != 2) {
        console.error("ошибка усановки параметров в T");
        return null;
      }
      commands.push(
        new T_BindQuadraticCurve(
          {
            x: parseFloat(params[0]),
            y: parseFloat(params[1]),
          },
          typeCommand == PathCommandName.BindQuadraticCurveLocal
        )
      );
      break;
    // Z комманда
    case PathCommandName.ClosePath:
    case PathCommandName.ClosePathLocal:
      if (params.length != 0) {
        console.error("ошибка усановки параметров в Z");
        return null;
      }
      commands.push(new Z_ClosePath(typeCommand == PathCommandName.ClosePathLocal));
      break;
    // C комманда
    case PathCommandName.CubicCurve:
    case PathCommandName.CubicCurveLocal:
      if (params.length % 6 != 0) {
        console.error("ошибка усановки параметров в C");
        return null;
      }
      for (let i = 0; i < params.length; i += 6) {
        commands.push(
          new C_Curve(
            {
              x1: parseFloat(params[i]),
              y1: parseFloat(params[i + 1]),
              x2: parseFloat(params[i + 2]),
              y2: parseFloat(params[i + 3]),
              x: parseFloat(params[i + 4]),
              y: parseFloat(params[i + 5]),
            },
            typeCommand == PathCommandName.CubicCurveLocal
          )
        );
      }
      break;
    // Q комманда
    case PathCommandName.QuadraticCurve:
    case PathCommandName.QuadraticCurveLocal:
      if (params.length % 4 != 0) {
        console.error("ошибка усановки параметров в Q");
        return null;
      }
      for (let i = 0; i < params.length; i += 4) {
        commands.push(
          new Q_Curve(
            {
              x1: parseFloat(params[i]),
              y1: parseFloat(params[i + 1]),
              x: parseFloat(params[i + 2]),
              y: parseFloat(params[i + 3]),
            },
            typeCommand == PathCommandName.QuadraticCurveLocal
          )
        );
      }
      break;
    // H комманда
    case PathCommandName.HorizontalLine:
    case PathCommandName.HorizontalLineLocal:
      if (params.length != 1) {
        console.error("ошибка усановки параметров в H");
        return null;
      }
      commands.push(
        new H_Line(
          {
            x: parseFloat(params[0]),
          },
          typeCommand == PathCommandName.HorizontalLineLocal
        )
      );
      break;
    // L комманда
    case PathCommandName.Line:
    case PathCommandName.LineLocal:
      if ((params.length & 1) != 0) {
        console.error("ошибка усановки параметров в L нечётное значение");
        return null;
      }
      var points: Point[] = [];
      for (let i = 0; i < params.length - 1; i += 2) {
        points.push({
          x: parseFloat(params[i]),
          y: parseFloat(params[i + 1]),
        });
      }
      commands.push(
        new L_Line(
          {
            points: points,
          },
          typeCommand == PathCommandName.LineLocal
        )
      );
      break;
    // V комманда
    case PathCommandName.VerticalLine:
    case PathCommandName.VerticalLineLocal:
      if (params.length != 1) {
        console.error("ошибка усановки параметров в V");
        return null;
      }
      commands.push(
        new V_Line(
          {
            x: parseFloat(params[0]),
          },
          typeCommand == PathCommandName.VerticalLineLocal
        )
      );
      break;
  }
  return commands;
}
