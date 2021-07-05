import { CrollCad } from './cad/index'

const cad = new CrollCad(document.getElementById('host'));

cad.drawLine(10, 10, 200, 200);
cad.drawLine(200, 200, 400, 10);
