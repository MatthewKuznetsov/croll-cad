
import { SVG_NAMESPACE } from "./constants";
import { IPrimitive, PrimitivesTypes } from "./primitive";

export class Dot implements IPrimitive {

    readonly type: PrimitivesTypes.DOT;
    private readonly _radius = 1;
    element: SVGCircleElement;

    constructor(
        public x: number,
        public y: number,
        public stroke = '#000',

    ) {

        this.element = document.createElementNS(SVG_NAMESPACE, 'circle')

    }

    render(host: SVGGraphicsElement): void {

        this.element.setAttribute('cx', `${this.x}`);
        this.element.setAttribute('cy', `${this.y}`);
        this.element.setAttribute('r', `${this._radius}`);
        this.element.setAttribute('stroke', this.stroke);
        this.element.setAttribute('fill', this.stroke);

        host.appendChild(this.element);
    
    }

}
