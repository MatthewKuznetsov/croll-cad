import { Dot } from "./models/dot";
import { Layer } from "./models/layer";
import { Line } from "./models/line";
import { IPrimitive } from "./models/primitive";

export default class {

    constructor(
        private _element: HTMLElement,
    
    ) { }

    createLayer(box?: DOMRect, primitives?: IPrimitive[]): Layer {

        const layer = new Layer(primitives);

        if (box == null) {
            const rect = this._element.getBoundingClientRect();
            const height = rect.height;
            const width = rect.width;
            layer.place(this._element, new DOMRect(0, 0, width, height));
        
        } else {
            layer.place(this._element, box);
        
        }

        return layer;

    }

    static createLine(x1: number, y1: number, x2: number, y2: number): Line {

        const dot1 = new Dot(x1, y1);
        const dot2 = new Dot(x2, y2);

        return new Line(dot1, dot2);

    }

}
