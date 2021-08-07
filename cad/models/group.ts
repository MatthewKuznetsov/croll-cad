
import { SVG_NAMESPACE } from "./constants";
import { Dot } from "./dot";
import { IPrimitiveFactory, Primitive, PrimitivesTypes } from "./primitive";

export interface IGroupOptions {
    x?: number,
    y?: number,
    width?: number,
    height?: number,
}

export class Group extends Primitive implements IPrimitiveFactory {

    element: SVGGElement;
    private _primitives: Set<Primitive> = new Set<Primitive>();

    get primitives(): Primitive[] {
        
        return Array.from(this._primitives);

    }
    
    constructor(
        public parent: Group,
        private _x: number,
        private _y: number,
        private _width?: number,
        private _height?: number,
        primitives: Primitive[] = [],

    ) {

        super(PrimitivesTypes.GROUP, parent);
        
        primitives.forEach(p => this._primitives.add(p));
        
        this.element = document.createElementNS(SVG_NAMESPACE, 'g');

    }

    getOptions(): IGroupOptions {

        return {
            x: this._x,
            y: this._y,
            width: this._width,
            height: this._height,
        }

    }

    change(options: IGroupOptions): Group {
        
        // this.primitives.forEach(p => p.render(this.element));
        // host.appendChild(this.element);
 
        return this;

    }

    addGroup(x: number, y: number, width?: number, height?: number, primitives: Primitive[] = []): Group {

        const group = new Group(this, x, y, width, height, primitives);
        this.attach([group])
        return group;

    }

    addDot(x: number, y: number, stroke?: string): Dot {

        const dot = new Dot(this, x, y, stroke);
        this.attach([dot])
        return dot;

    }
    
    attach(ps: Primitive[]): void {

        ps.forEach(p => this._primitives.add(p));
    
    }

    removeChildren(ps: Primitive[]): void {

        ps.forEach(p => {
            const index = this.primitives.indexOf(p);
            if (index >= 0) {
                this.primitives.splice(index, 1);
            }
        });

    }

    remove(): void {
        
        this.primitives.forEach(p => p.remove());
        this.parent.removeChildren([this]);

    }
    
    

}
