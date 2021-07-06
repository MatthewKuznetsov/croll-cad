import { IRenderer } from ".";
import { SVG_NAMESPACE } from "..";
import { Layer } from "../models/layer";
import { Line } from "../models/line";

export class SvgLineRenderer implements IRenderer {

    render(layer: Layer, primitive: Line): void {

        const line = document.createElementNS(SVG_NAMESPACE, 'line');

        line.setAttribute('x1', `${primitive.start.x}`);
        line.setAttribute('y1', `${primitive.start.y}`);
        line.setAttribute('x2', `${primitive.end.x}`);
        line.setAttribute('y2', `${primitive.end.y}`);
        line.setAttribute('stroke', primitive.stroke);
        line.setAttribute('stroke-width', `${primitive.weight}`);

        layer.host.appendChild(line);
    
    }

}
