
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";


class Dot {
    
    constructor(
        public x: number,
        public y: number,

    ) { }

}


class Line {
    
    constructor(
        public start: Dot,
        public end: Dot,
        public stroke = '#000',
        public weight = 1,

    ) { }

}


class SvgLineRenderer {

    constructor(
        private _line: Line,
        private _host: SVGSVGElement,

    ) { }

    render(): void {

        const lineElement = document.createElementNS(SVG_NAMESPACE, 'line');
        
        lineElement.setAttribute('x1', `${this._line.start.x}`);
        lineElement.setAttribute('y1', `${this._line.start.y}`);
        lineElement.setAttribute('x2', `${this._line.end.x}`);
        lineElement.setAttribute('y2', `${this._line.end.y}`);
        lineElement.setAttribute('stroke', this._line.stroke);
        lineElement.setAttribute('stroke-width', `${this._line.weight}`);

        this._host.appendChild(lineElement);
    
    }

}


export class CrollCad {

    private _host: SVGSVGElement;

    constructor(element: HTMLElement) {
        
        this._host = this._prepareHost(element);

    }

    drawLine(x1: number, y1: number, x2: number, y2: number): void {

        const dot1 = new Dot(x1, y1); 
        const dot2 = new Dot(x2, y2); 

        const line = new Line(dot1, dot2);

        new SvgLineRenderer(line, this._host).render();

    }

    _prepareHost(element: HTMLElement): SVGSVGElement {

        const svgElement = document.createElementNS(SVG_NAMESPACE, 'svg');
        svgElement.setAttribute('viewBox', `0 0 ${element.offsetWidth} ${element.offsetHeight}`);
        
        element.innerHTML = '';
        element.appendChild(svgElement);

        return svgElement;

    }

}

