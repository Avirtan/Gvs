import { LinkToLib, SvgNameSpace, XmlNameSpace } from "../const";
import { Attributes } from "../types";
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
