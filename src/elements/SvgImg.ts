import { BaseElement } from "./BaseElement";

export class SvgImg extends BaseElement {
  public constructor() {
    super();
  }

  public FromString(svgString: string): SvgImg {
    var parser = new DOMParser();
    var doc = parser.parseFromString(svgString, "image/svg+xml");
    if (doc == null || doc.documentElement == null) {
      console.error("ошибка при парсе текста svg");
      return this;
    }
    this.element = doc.documentElement;
    return this;
  }

  public async FromUrl(path: string): Promise<SvgImg> {
    const svgImg = await fetch("../public/rab.svg");
    const svgString = await svgImg.text();
    this.FromString(svgString);
    return this;
  }
}
