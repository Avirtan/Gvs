export function roundN(value: number, digits: number) {
  var tenToN = 10 ** digits;
  return Math.round(value * tenToN) / tenToN;
}
