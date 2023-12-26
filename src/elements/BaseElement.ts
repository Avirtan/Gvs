import { Attributes } from "../attributes";
import { SvgNameSpace } from "../const";
import { AttributeType } from "../types";

export abstract class BaseElement {
  protected element: Element | null;

  public get Element(): Element {
    return this.element!;
  }

  public createElement(name: string): Element {
    const svg = document.createElementNS(SvgNameSpace, name);
    this.element = svg;
    return svg;
  }

  public setAttributeCustom(name: string, value: string, ns: string | null = null) {
    if (this.element == null) {
      console.error("сначала создайте элемент через createElement");
      return;
    }
    this.element.setAttributeNS(ns, name, value);
    return this;
  }

  public setAttributes(atributes: AttributeType[], ns: string | null = null) {
    if (this.element == null) {
      console.error("сначала создайте элемент через createElement");
      return;
    }
    for (var attr of atributes) {
      this.setAttribute(attr.name, attr.value, ns);
    }
    return this;
  }

  public setAttribute(name: Attributes, value: string, ns: string | null = null) {
    return this.setAttributeCustom(name, value, ns);
  }
}
