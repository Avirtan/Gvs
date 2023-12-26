import { Attributes } from "../attributes";
import { LinkToLib, SvgNameSpace, XmlNameSpace } from "../const";
import { BaseElement } from "./BaseElement";

export class Svg extends BaseElement {
  constructor() {
    super();
    this.element = null;
    super.createElement("svg");
    this.setAttribute(Attributes.Xmlns, SvgNameSpace, XmlNameSpace);
    this.setAttributeCustom("xmlns:xling", XmlNameSpace, XmlNameSpace);
    this.setAttributeCustom("xmlns:gvs", LinkToLib, XmlNameSpace);
  }
}
