import { SVG_NAMESPACE } from "./constants";
import { Dot } from "./dot";
import { Layer } from "./layer";
import { IPrimitive, PrimitivesTypes } from "./primitive";

export class Line implements IPrimitive {

    type = PrimitivesTypes.LINE;

    constructor(
        public start: Dot,
        public end: Dot,
        public stroke = '#000',
        public weight = 1,

    ) { }

    render(layer: Layer): void {

        const element = document.createElementNS(SVG_NAMESPACE, 'line');

        element.setAttribute('x1', `${this.start.x}`);
        element.setAttribute('y1', `${this.start.y}`);
        element.setAttribute('x2', `${this.end.x}`);
        element.setAttribute('y2', `${this.end.y}`);
        element.setAttribute('stroke', this.stroke);
        element.setAttribute('stroke-width', `${this.weight}`);

        layer.host.appendChild(element);
    
    }

}
