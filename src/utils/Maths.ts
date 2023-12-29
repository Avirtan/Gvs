export function roundN(value: number, digits: number) {
  var tenToN = 10 ** digits;
  return Math.round(value * tenToN) / tenToN;
}

export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function randomKey(length: number): string {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  var randchars: string = "";
  for (let i = 0; i < length; i++) {
    var randIndex = random(0, chars.length);
    randchars += chars[randIndex];
  }
  return randchars;
}
