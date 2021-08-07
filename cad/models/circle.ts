
import { SVG_NAMESPACE } from "./constants";
import { IPrimitive, PrimitivesTypes } from "./primitive";

interface IArcParams {
    start: { x: number; y: number; };
    end: { x: number; y: number; };

}

export class Circle implements IPrimitive {

    readonly type: PrimitivesTypes.CIRCLE;
    element: SVGPathElement;

    constructor(
        public cx: number,
        public cy: number,
        public radius: number,
        public sector: number = 360,
        public stroke = '#000',
        public fill = '#000',

    ) {

        this.element = document.createElementNS(SVG_NAMESPACE, 'path')

    }

    render(host: SVGGraphicsElement): void {

        this.element.setAttribute('stroke', this.stroke);
        this.element.setAttribute('fill', this.stroke);
        this.element.setAttribute('d', this._getD());

        host.appendChild(this.element);

    }

    private _getArc(): IArcParams {

        return {
            start: {
                x: this.radius
                    * Math.cos(
                        this._toRadians(0)
                    ) + this.cx,
                y: this.radius
                    * Math.sin(
                        this._toRadians(0)
                    ) + this.cy
            },
            end: {
                x: this.radius
                    * Math.cos(
                        this._toRadians(this.sector - 0.00001)
                    ) + this.cx,
                y: this.radius
                    * Math.sin(
                        this._toRadians(this.sector - 0.00001)
                    ) + this.cy
            }
        };

    }

    private _lageArc(): number {
        return (this.sector - 0.00000001) % 360 > 180 ? 1 : 0;
    }

    private _getD(): string {

        const arc = this._getArc();

        return `
            M ${this.cx} ${this.cy}
            L ${arc.start.x} ${arc.start.y}
            A ${this.radius} ${this.radius} 0 ${this._lageArc()} 1 ${arc.end.x} ${arc.end.y}
            L ${this.cx} ${this.cy}
            z
        `;

    }

    private _toRadians(degrees: number): number {

        return degrees * (Math.PI / 180);

    }

}
