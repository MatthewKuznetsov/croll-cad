import { SVG_NAMESPACE } from "..";
import { Renderers } from "../renderers";
import { IPrimitive } from "./primitive";

export class Layer {

    host: SVGSVGElement;

    constructor(
        public primitives: IPrimitive[] = [],

    ) {

        this.host = document.createElementNS(SVG_NAMESPACE, 'svg');
        
        primitives.forEach(p => this.draw(p));
        
    }
    
    place(element: HTMLElement, box?: DOMRect): void {
        
        element.style.position = 'relative'; 

        this.host.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
        this.host.style.position = 'absolute';
        this.host.style.top = `${box.y}px`;
        this.host.style.left = `${box.x}px`;
        this.host.style.width = `${box.width}px`;
        this.host.style.height = `${box.height}px`;

        element.appendChild(this.host);

    }

    draw(primitive: IPrimitive): void {
        
        Renderers.getRenderer(primitive).render(this, primitive);

    }

}
