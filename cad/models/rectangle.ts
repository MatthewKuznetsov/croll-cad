
import { SVG_NAMESPACE } from "./constants";
import { IPrimitive, PrimitivesTypes } from "./primitive";

export class Rectangle implements IPrimitive {

    type = PrimitivesTypes.RECTANGLE;
    element: SVGRectElement;

    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public stroke = '#000',
        public fill = '',
        public weight = 1,

    ) {

        this.element = document.createElementNS(SVG_NAMESPACE, 'rect');

    }

    render(host: SVGGraphicsElement): void {

        this.element.setAttribute('x', `${this.x}`);
        this.element.setAttribute('y', `${this.y}`);
        this.element.setAttribute('width', `${this.width}`);
        this.element.setAttribute('height', `${this.height}`);
        this.element.setAttribute('stroke', this.stroke);
        this.element.setAttribute('fill', this.fill || 'transparent');
        this.element.setAttribute('stroke-width', `${this.weight}`);

        host.appendChild(this.element);
    
    }

}
