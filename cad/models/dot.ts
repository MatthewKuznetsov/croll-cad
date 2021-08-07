
import { SVG_NAMESPACE } from "./constants";
import { Group } from "./group";
import { Primitive, PrimitivesTypes } from "./primitive";

export interface IDotOptions {
    x?: number;
    y?: number;
    stroke?: string;
}

export class Dot extends Primitive {

    private readonly _radius = 1;

    element: SVGCircleElement;

    constructor(
        public parent: Group,
        private _x: number,
        private _y: number,
        private _stroke = '#000',

    ) {

        super(PrimitivesTypes.DOT, parent);

        this.element = document.createElementNS(SVG_NAMESPACE, 'circle');

        this.change({ x: _x, y: _y, stroke: _stroke });
    
    }

    getOptions(): IDotOptions {
        
        return {
            x: this._x,
            y: this._y,
            stroke: this._stroke,
        }

    }

    change(options: IDotOptions): Dot {

        const full: IDotOptions = {
            x: options.x != null ? options.x : this._x,
            y: options.y != null ? options.y : this._y,
            stroke: options.stroke != null ? options.stroke : this._stroke,
        };

        this.element.setAttribute('cx', `${full.x}`);
        this.element.setAttribute('cy', `${full.y}`);
        this.element.setAttribute('r', `${this._radius}`);
        this.element.setAttribute('stroke', full.stroke);
        this.element.setAttribute('fill', full.stroke);

        return this;
        
    }

    remove(): void {
        
        this.parent.removeChildren([this]);

    }



}
