import { BaseComponent } from "../../components";
import { SvgNameSpace } from "../../const";
import { AttributeType, Attributes } from "../../types";
import { randomKey } from "../../utils";

export abstract class BaseElement {
  protected _element: Element | null;
  protected _components: BaseComponent[] = [];
  protected _key: string;
  protected _children: BaseElement[] = [];

  public get Element(): Element {
    return this._element!;
  }

  public get Key(): string {
    return this._key;
  }

  public createElement(name: string): Element {
    const svg = document.createElementNS(SvgNameSpace, name);
    this._element = svg;
    this._key = randomKey(10);
    this.setAttributeCustom("key", this._key);
    return svg;
  }

  public setAttributeCustom(name: string, value: string, ns: string | null = null) {
    if (this._element == null) {
      console.error("сначала создайте элемент через createElement");
      return;
    }
    this._element.setAttributeNS(ns, name, value);
    return this;
  }

  public setAttributes(atributes: AttributeType[], ns: string | null = null) {
    if (this._element == null) {
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

  public addChild(element: BaseElement) {
    if (this._element == null) {
      console.error("сначала создайте элемент через createElement");
      return;
    }
    this._children.push(element);
    this._element.appendChild(element.Element);
  }

  public removeChildre(key: string) {
    var children = this._element?.children;
    if (children == null) return;
    var element = this._children.find((el) => el.Key == key);
    if (element == null) return;
    this._element?.removeChild(element.Element);
    this._children = this._children.filter((el) => el.Key != key);
  }

  public addChildren(elements: BaseElement[]) {
    for (var elem of elements) {
      this.addChild(elem);
    }
  }

  public setFieldsToAttribute() {
    for (var component of this._components) {
      for (var field of component.Fields) {
        this.setAttribute(field.name, field.value.getValueString());
      }
    }
  }

  public setFieldToAttributeByComponent(component: BaseComponent) {
    for (var field of component.Fields) {
      this.setAttribute(field.name, field.value.getValueString());
    }
  }

  public getObjectOfAttributes(): object {
    var obj: object = {};
    for (var component of this._components) {
      for (var field of component.Fields) {
        obj[field.name] = field.value.getValueObject();
      }
    }
    return obj;
  }

  public setObjectOfAttributes(data: object) {
    for (var component of this._components) {
      for (var field of component.Fields) {
        var objData = data[field.name];
        field.value.setValue(objData);
      }
    }
    this.setFieldsToAttribute();
  }

  public onClick(func: EventListener) {
    this.Element.addEventListener("click", func);
  }
}
