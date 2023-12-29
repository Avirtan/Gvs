import {
  Attributes,
  BaseElement,
  Circle,
  Ellipse,
  Group,
  Line,
  MatrixSVG,
  Path,
  Rect,
  Svg,
  getCommandsFromString,
} from "gvs";
import { GUI } from "lil-gui";

var selectedObject: BaseElement | null = null;
var svg = new Svg();
var rect = new Rect(20, 20);
var rect1 = new Ellipse(20, 100, 20, 5);
// rect1.setPosition(10, 20);
const gui = new GUI();
var folderAction = gui.addFolder("Action");
var folderProperties = gui.addFolder("Properties");
var foldersWithControllers: GUI[] = [];
rect.onClick((event: Event) => {
  selectedObject = rect;
  resetGui();
});
rect1.onClick((event: Event) => {
  selectedObject = rect1;
  resetGui();
});
function resetGui() {
  if (foldersWithControllers.length > 0) {
    for (var folder of foldersWithControllers) {
      folder.destroy();
    }
    foldersWithControllers = [];
  }
  if (selectedObject == null) return;
  var attributes = selectedObject!.getObjectOfAttributes();
  for (var key of Object.keys(attributes)) {
    var obj = (attributes as any)[key];
    var folder = folderProperties.addFolder(key);
    foldersWithControllers.push(folder);
    for (var field of Object.keys(obj)) {
      folder.add(obj, field).onChange(() => {
        selectedObject?.setObjectOfAttributes(attributes);
      });
    }
  }
}

var actionObject = {
  createRect: () => {
    var tmpRect = new Rect(20, 20);
    tmpRect.onClick((event: Event) => {
      selectedObject = tmpRect;
      resetGui();
    });
    svg.addChild(tmpRect);
  },
  createCircle: () => {
    var tmpCircle = new Circle(20, 20, 20);
    tmpCircle.onClick((event: Event) => {
      selectedObject = tmpCircle;
      resetGui();
    });
    svg.addChild(tmpCircle);
  },
  removeSelectElement: () => {
    if (selectedObject == null) return;
    var keySelectObject = selectedObject.Key;
    selectedObject = null;
    resetGui();
    svg.removeChildre(keySelectObject);
  },
};
folderAction.add(actionObject, "createRect");
folderAction.add(actionObject, "createCircle");
folderAction.add(actionObject, "removeSelectElement");

// svg.addChild(rect);
// svg.addChild(rect1);
svg.setAttribute(Attributes.Width, "1000");
svg.setAttribute(Attributes.Height, "1000");
document.body.appendChild(svg.Element);
