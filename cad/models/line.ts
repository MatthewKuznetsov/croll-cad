import { SVG_NAMESPACE } from "./constants";
import { IPrimitive, PrimitivesTypes } from "./primitive";

export class Line implements IPrimitive {

    type = PrimitivesTypes.LINE;
    element: SVGLineElement;

    constructor(
        public x: number,
        public y: number,
        public x2: number,
        public y2: number,
        public stroke = '#000',
        public weight = 1,

    ) {

        this.element = document.createElementNS(SVG_NAMESPACE, 'line');

    }

    render(host: SVGGraphicsElement): void {

        this.element.setAttribute('x1', `${this.x}`);
        this.element.setAttribute('y1', `${this.y}`);
        this.element.setAttribute('x2', `${this.x2}`);
        this.element.setAttribute('y2', `${this.y2}`);
        this.element.setAttribute('stroke', this.stroke);
        this.element.setAttribute('stroke-width', `${this.weight}`);

        host.appendChild(this.element);
    
    }

}
