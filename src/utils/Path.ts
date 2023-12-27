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
  str = str.replaceAll(",", " ");
  const removeSpaceBetween = /[a-zA-Z]\d/g;
  str = str.replaceAll(removeSpaceBetween, (match) => {
    return match[0] + " " + match[1];
  });
  const removeSpace = /\s{2,}/g;
  str = str.replaceAll(removeSpace, " ");
  str += " ";
  console.log(str);
  var array = str.match(/[mMLlZzCcSsQqTtAaHhVv]|(-?)(\d+)(\.\d+)?/g)!;
  console.log(array);
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
  console.log(arrayValues);
  for (var arr of arrayValues) {
    var typeCommand: PathCommandName = arr.shift() as PathCommandName;
    switch (typeCommand) {
      case PathCommandName.MoveTo:
      case PathCommandName.MoveToLocal:
        if (arr.length != 2) {
          console.error("ошибка усановки параметров в M");
          return null;
        }
        commands.push(
          new M_MoveTo(
            {
              x: parseFloat(arr[0]),
              y: parseFloat(arr[1]),
            },
            typeCommand == PathCommandName.MoveToLocal
          )
        );
        break;
      case PathCommandName.Arcs:
      case PathCommandName.ArcsLocal:
        if (arr.length != 7) {
          console.error("ошибка усановки параметров в A");
          return null;
        }
        commands.push(
          new A_Arcs(
            {
              rx: parseFloat(arr[0]),
              ry: parseFloat(arr[1]),
              xAxiosRot: parseFloat(arr[2]),
              largeArcFlag: parseFloat(arr[3]),
              seepFlag: parseFloat(arr[4]),
              x: parseFloat(arr[5]),
              y: parseFloat(arr[6]),
            },
            typeCommand == PathCommandName.ArcsLocal
          )
        );
        break;
      case PathCommandName.BindCubicCurve:
      case PathCommandName.BindCubicCurveLocal:
        if (arr.length != 4) {
          console.error("ошибка усановки параметров в S");
          return null;
        }
        commands.push(
          new S_BindCubicCurve(
            {
              x: parseFloat(arr[0]),
              y: parseFloat(arr[1]),
              x2: parseFloat(arr[2]),
              y2: parseFloat(arr[3]),
            },
            typeCommand == PathCommandName.BindCubicCurveLocal
          )
        );
        break;
      case PathCommandName.BindQuadraticCurve:
      case PathCommandName.BindQuadraticCurveLocal:
        if (arr.length != 2) {
          console.error("ошибка усановки параметров в T");
          return null;
        }
        commands.push(
          new T_BindQuadraticCurve(
            {
              x: parseFloat(arr[0]),
              y: parseFloat(arr[1]),
            },
            typeCommand == PathCommandName.BindQuadraticCurveLocal
          )
        );
        break;
      case PathCommandName.ClosePath:
        if (arr.length != 0) {
          console.error("ошибка усановки параметров в Z");
          return null;
        }
        commands.push(new Z_ClosePath());
        break;
      case PathCommandName.CubicCurve:
      case PathCommandName.CubicCurveLocal:
        if (arr.length % 6 != 0) {
          console.error("ошибка усановки параметров в C");
          return null;
        }
        for (let i = 0; i < arr.length; i += 6) {
          commands.push(
            new C_Curve(
              {
                x1: parseFloat(arr[i]),
                y1: parseFloat(arr[i + 1]),
                x2: parseFloat(arr[i + 2]),
                y2: parseFloat(arr[i + 3]),
                x: parseFloat(arr[i + 4]),
                y: parseFloat(arr[i + 5]),
              },
              typeCommand == PathCommandName.CubicCurveLocal
            )
          );
        }

        break;
      case PathCommandName.HorizontalLine:
      case PathCommandName.HorizontalLineLocal:
        if (arr.length != 1) {
          console.error("ошибка усановки параметров в H");
          return null;
        }
        commands.push(
          new H_Line(
            {
              x: parseFloat(arr[0]),
            },
            typeCommand == PathCommandName.HorizontalLineLocal
          )
        );
        break;
      case PathCommandName.Line:
      case PathCommandName.LineLocal:
        if ((arr.length & 1) != 0) {
          console.error("ошибка усановки параметров в L нечётное значение");
          return null;
        }
        var points: Point[] = [];
        for (let i = 0; i < arr.length - 1; i += 2) {
          points.push({
            x: parseFloat(arr[i]),
            y: parseFloat(arr[i + 1]),
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
      case PathCommandName.QuadraticCurve:
      case PathCommandName.QuadraticCurveLocal:
        if (arr.length != 4) {
          console.error("ошибка усановки параметров в Q");
          return null;
        }
        commands.push(
          new Q_Curve(
            {
              x1: parseFloat(arr[0]),
              y1: parseFloat(arr[1]),
              x: parseFloat(arr[2]),
              y: parseFloat(arr[3]),
            },
            typeCommand == PathCommandName.QuadraticCurveLocal
          )
        );
        break;
      case PathCommandName.VerticalLine:
      case PathCommandName.VerticalLineLocal:
        if (arr.length != 1) {
          console.error("ошибка усановки параметров в Q");
          return null;
        }
        commands.push(
          new V_Line(
            {
              x: parseFloat(arr[0]),
            },
            typeCommand == PathCommandName.VerticalLineLocal
          )
        );
        break;
    }
  }
  return commands;
}
