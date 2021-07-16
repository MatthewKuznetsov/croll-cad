const cad = new CrollCad(document.getElementById('host'));

const rect = CrollCad.createRectangle(140, 60, 110, 140, '#0fff00');

const dot1 = CrollCad.createDot(150, 70, '#ff00f0');
const dot2 = CrollCad.createDot(240, 190, '#0fff00');


const group = CrollCad.createGroup([dot1, dot2]);

cad.add(rect);
cad.add(group);
