import { Dot } from "./dot";
import { IPrimitive, PrimitivesTypes } from "./primitive";

export class Line implements IPrimitive {

    type = PrimitivesTypes.LINE;

    constructor(
        public start: Dot,
        public end: Dot,
        public stroke = '#000',
        public weight = 1,

    ) { }

}
