
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";


class CanvasLineRenderer { }


class Dot {
    
    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

}


class Line {
    
    constructor(
        start,
        end,
        stroke = '#000',
        weight = 1
    ) {

        this.start = start;
        this.end = end;
        this.stroke = stroke;
        this.weight = weight;

    }

}


class SvgLineRenderer {

    constructor(line, host) {

        this.line = line;
        this.host = host;
    
    }

    render() {

        const lineElement = document.createElementNS(SVG_NAMESPACE, 'line');
        
        lineElement.setAttribute('x1', this.line.start.x);
        lineElement.setAttribute('y1', this.line.start.y);
        lineElement.setAttribute('x2', this.line.end.x);
        lineElement.setAttribute('y2', this.line.end.y);
        lineElement.setAttribute('stroke', this.line.stroke);
        lineElement.setAttribute('stroke-width', this.line.weight);

        this.host.appendChild(lineElement);
    
    }

}


class CrollCad {

    constructor(element) {
        
        this.host = this._prepareHost(element);

    }

    drawLine(x1, y1, x2, y2) {

        const dot1 = new Dot(x1, y1); 
        const dot2 = new Dot(x2, y2); 

        const line = new Line(dot1, dot2);

        new SvgLineRenderer(line, this.host).render();

    }

    _prepareHost(element) {

        const svgElement = document.createElementNS(SVG_NAMESPACE, 'svg');
        svgElement.setAttribute('viewBox', `0 0 ${element.offsetWidth} ${element.offsetHeight}`);
        
        element.innerHtml = '';
        element.appendChild(svgElement);

        return svgElement;

    }

}

