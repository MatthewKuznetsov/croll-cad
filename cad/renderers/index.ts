import { Layer } from "../models/layer";
import { IPrimitive, PrimitivesTypes } from "../models/primitive";
import { SvgLineRenderer } from "./svg-line-renderer";

export interface IRenderer {
    render(layer: Layer, primitive: IPrimitive): void;
    
}

export class Renderers {

    static renderers: { [key: string]: IRenderer; } = {};

    static getRenderer(primitive: IPrimitive): IRenderer | undefined {

        switch (primitive.type) {

            case PrimitivesTypes.LINE:
                return Renderers.renderers?.svgLineRenderer
                || (Renderers.renderers.svgLineRenderer = new SvgLineRenderer());

            default:
                return;

        }

    }

}
