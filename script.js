const cad = new CrollCad(document.getElementById('host'));

const layer = cad.createLayer();
const layer2 = cad.createLayer(new DOMRect(40, 20, 180, 180), [CrollCad.createLine(0, 0, 180, 180)]);
const layer3 = cad.createLayer(new DOMRect(40, 20, 180, 180));

layer.add(CrollCad.createLine(20, 20, 200, 200));
// layer2.draw(CrollCad.createLine(0, 0, 180, 180));
layer3.add(CrollCad.createLine(60, 20, 240, 200));
