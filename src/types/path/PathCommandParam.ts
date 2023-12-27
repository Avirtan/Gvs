export interface MoveToParams {
  x: number;
  y: number;
}

export interface LineCmdParams {
  x: number;
  y: number;
}

export interface HorizontalLineParams {
  x: number;
}

export interface VerticalLineParams {
  x: number;
}

export interface CubicCurveParams {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x: number;
  y: number;
}

export interface BindCubicCurveParams {
  x2: number;
  y2: number;
  x: number;
  y: number;
}

export interface QuadraticCurveParams {
  x1: number;
  y1: number;
  x: number;
  y: number;
}

export interface BindQuadraticCurveParams {
  x: number;
  y: number;
}

export interface ArcsParams {
  rx: number;
  ry: number;
  xAxiosRot: number;
  largeArcFlag: number;
  seepFlag: number;
  x: number;
  y: number;
}
