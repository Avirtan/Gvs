import { LinkToLib, SvgNameSpace, XmlNameSpace } from "../const";
import { Attributes } from "../types";
import { BaseElement } from "./impl/BaseElement";

export class Svg extends BaseElement {
  constructor() {
    super();
    this._element = null;
    super.createElement("svg");
    this.setAttribute(Attributes.Xmlns, SvgNameSpace, XmlNameSpace);
    this.setAttributeCustom("xmlns:xlink", XmlNameSpace, XmlNameSpace);
    this.setAttributeCustom("xmlns:gvs", LinkToLib, XmlNameSpace);
  }
}
