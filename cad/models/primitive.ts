
export enum PrimitivesTypes {
    LINE = 'line',
    DOT = 'dot',
    RECTANGLE = 'rectangle',
    GROUP = 'group',
    
}

export interface IPrimitive {
    readonly type: PrimitivesTypes;
    element: SVGGraphicsElement;

    render(host: SVGGraphicsElement): void;

}
