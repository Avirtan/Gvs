import { ElementNames } from "../types";
import { BaseElement } from "./impl/BaseElement";

export class Group extends BaseElement {
  constructor() {
    super();
    this._element = null;
    super.createElement(ElementNames.Group);
  }
}
