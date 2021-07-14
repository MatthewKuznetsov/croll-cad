import { SVG_NAMESPACE } from "./constants";
import { IPrimitive, PrimitivesTypes } from "./primitive";

export class Group implements IPrimitive {

    readonly type: PrimitivesTypes.GROUP;
    element: SVGGElement;
    
    constructor(
        public primitives: IPrimitive[] = [],

    ) {

        this.element = document.createElementNS(SVG_NAMESPACE, 'g');

    }
    
    render(host: SVGGraphicsElement) {
        
        this.primitives.forEach(p => p.render(this.element));
        
        host.appendChild(this.element);
    
    }

    add(primitives: IPrimitive | IPrimitive[]): void {

        const _primitives = Array.isArray(primitives) ? primitives : [primitives];

        this.primitives.unshift(..._primitives);
        _primitives.forEach(p => p.render(this.element));

    }

}
