import { Dot } from "./dot";
import { Group } from "./group";

export enum PrimitivesTypes {
    CAD = 'cad',
    LINE = 'line',
    DOT = 'dot',
    CIRCLE = 'circle',
    RECTANGLE = 'rectangle',
    GROUP = 'group',
    
}

export interface IPrimitiveFactory {
    addGroup(x: number, y: number, width?: number, height?: number, primitives?: Primitive[]): Group;
    addDot(x: number, y: number, stroke?: string): Dot;
    
}

export abstract class Primitive {

    private _hidden: boolean = false;
    element: SVGGraphicsElement;

    constructor(
        public readonly type: PrimitivesTypes,
        public parent?: Group,

    ) { }

    hide(): void {
        
        if (!this._hidden) {
            this.element.style.display = 'none';
            this._hidden = false;

        }

    }

    show(): void {
        
        if (this._hidden) {
            this.element.style.display = 'unset';
            this._hidden = true;

        }

    }

    abstract getOptions(): object;

    abstract change(options: object): Primitive;
    
    abstract remove(): void;

}
