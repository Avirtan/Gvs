import { Point } from "../types";

export function PointsToString(points: Point[]): string {
  var str: string = "";
  for (let point of points) {
    str += `${point.x} ${point.y},`;
  }
  str = str.substring(0, str.length - 1);
  return str;
}

export function StringToPoints(str: string): Point[] {
  const points: Point[] = [];
  var arrPoint: string[] = ["", ""];
  for (let point of str.split(",")) {
    arrPoint = point.split(" ").filter((value) => value != "");
    points.push({
      x: arrPoint[0],
      y: arrPoint[1],
    });
  }
  return points;
}
