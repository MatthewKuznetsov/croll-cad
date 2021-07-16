
import { SVG_NAMESPACE } from "./models/constants";
import { Dot } from "./models/dot";
import { Group } from "./models/group";
import { Line } from "./models/line";
import { IPrimitive } from "./models/primitive";
import { Rectangle } from "./models/rectangle";

export default class {

    primitives: IPrimitive[] = [];
    private _element: SVGSVGElement;

    constructor(
        host: HTMLElement,
    
    ) {

        this._element = document.createElementNS(SVG_NAMESPACE, 'svg');
        
        host.style.position = 'relative';
        const rect = host.getBoundingClientRect();

        this._element.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
        this._element.style.position = 'absolute';
        this._element.style.top = `0`;
        this._element.style.left = `0`;
        this._element.style.width = `${rect.width}px`;
        this._element.style.height = `${rect.height}px`;

        host.appendChild(this._element);

    }

    add(primitives: IPrimitive | IPrimitive[]): void {

        const _primitives = Array.isArray(primitives) ? primitives : [primitives];

        this.primitives.unshift(..._primitives);
        _primitives.forEach(p => p.render(this._element));

    }

    static createGroup(primitives?: IPrimitive[]): Group {

        return new Group(primitives);

    }

    static createLine(x: number, y: number, x2: number, y2: number, stroke?: string, weight?: number): Line {

        return new Line(x, y, x2, y2, stroke, weight);

    }
    
    static createDot(x: number, y: number, stroke?: string): Dot {

        return new Dot(x, y, stroke);

    }

    static createRectangle(x: number, y: number, width: number, height: number, stroke?: string, fill?: string): Rectangle {

        return new Rectangle(x, y, width, height, stroke, fill);

    }

}
