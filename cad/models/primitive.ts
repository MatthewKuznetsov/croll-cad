import { Layer } from "./layer";

export enum PrimitivesTypes {
    LINE = 'line',
    
}

export interface IPrimitive {
    type: PrimitivesTypes;
    render(layer: Layer): void;

}
