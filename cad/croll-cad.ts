
import { Circle } from "./models/circle";
import { SVG_NAMESPACE } from "./models/constants";
import { Dot } from "./models/dot";
import { Group } from "./models/group";
import { Line } from "./models/line";
import { IPrimitive, PrimitivesTypes } from "./models/primitive";
import { Rectangle } from "./models/rectangle";
import { SVGDotRenderer } from "./renderers/dot-renderer";

export default class implements IPrimitive {

    type: PrimitivesTypes.CAD;
    primitives: IPrimitive[] = [];
    cadGroupElement: SVGGraphicsElement;
    cadSvgElement: SVGGraphicsElement;

    constructor(
        host: HTMLElement,
    
    ) {

        this.cadSvgElement = document.createElementNS(SVG_NAMESPACE, 'svg');
        host.appendChild(this.cadSvgElement);
        host.style.position = 'relative';
        
        this.cadGroupElement = document.createElementNS(SVG_NAMESPACE, 'g');

        this.render(this.cadSvgElement);

    }
    
    render(host: SVGGraphicsElement) {
        
        const rect = host.getBoundingClientRect();
        
        this.cadGroupElement.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
        this.cadGroupElement.style.position = 'absolute';
        this.cadGroupElement.style.top = `0`;
        this.cadGroupElement.style.left = `0`;
        this.cadGroupElement.style.width = `${rect.width}px`;
        this.cadGroupElement.style.height = `${rect.height}px`;
    
        host.appendChild(this.cadGroupElement);

    }
    
    add(primitives: IPrimitive | IPrimitive[]): void {

        const _primitives = Array.isArray(primitives) ? primitives : [primitives];

        this.primitives.unshift(..._primitives);
        _primitives.forEach(p => p.render(this.cadGroupElement));

    }

    static createGroup(primitives?: IPrimitive[]): Group {

        return new Group(primitives);

    }

    static createLine(
        x: number,
        y: number,
        x2: number,
        y2: number,
        stroke?: string,
        weight?: number
    
    ): Line {

        return new Line(x, y, x2, y2, stroke, weight);

    }
    
    static createDot(
        x: number,
        y: number,
        stroke?: string
    
    ): Dot {

        const renderer = new SVGDotRenderer()
        return new Dot(x, y, stroke);

    }

    static createRectangle(
        x: number,
        y: number,
        width: number,
        height: number,
        stroke?: string,
        fill?: string
    
    ): Rectangle {

        return new Rectangle(x, y, width, height, stroke, fill);

    }

    static createCircle(
        cx: number,
        cy: number,
        radius: number,
        sector: number = 360,
        stroke = '#000',
        fill = '#000',


    ) {

        return new Circle(cx, cy, radius, sector, stroke, fill);

    }

}
