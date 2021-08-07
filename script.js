
// // Grid
// for (let i = 0; i <= 600; i += 10) {
//     cad.add(CrollCad.createLine(i, 0, i, 400, '#aaa'));
// }

// for (let i = 0; i <= 400; i += 10) {
//     cad.add(CrollCad.createLine(0, i, 600, i, '#aaa'));
// }



//
//
//
// Шо я, собсна, хочу уметь:
//
// 0. Создавать экземпляр када.
//
;;    const cad = new CrollCad(document.getElementById('host'));
//
//
// 1. Создать рабочую область (фрэйм) т.е. группа с прямоугольником,
//    который будет фоном и каркасом для задания размера и координат
//    этой рабочей области (фрэйма).
//
;;    const [x, y, width, height] = [10, 20, 100, 200];
;;    const frame = cad.addFrame(x, y, width, height);
//
//
// 2. Создавать какой-либо примитив (в том числе группу или фрэйм)
//    внутри созданного ранее фрэйма. При этом координаты вложенных
//    примитивов должны интерпритироваться относительно координат
//    фрэйма.
//
;;    const [cx, cy, r, angle] = [0, 10, 100, 360];
;;    const circle = frame.addCircle(cx, cy, r, angle);
;;    const [xi, yi, widthi, heighti] = [10, 20, 100, 200];
;;    const innerFrame = frame.addFrame(xi, yi, widthi, heighti);
//
//
// 3. Я хочу двигать примитивы к абсолютным координатам и на
//    относительные величины.
//
;;    const newCoords = circle.moveTo(20, 20);
;;    const previousCoords = circle.move(-20, -20);
//
//
// 4. Менять свойства примитивов (цвета, размер или координаты).
//
;;    const [xr, yr, widthr, heightr] = [100, 200, 150, 10];
;;    const rectangle = cad.addRectangle(xr, yr, widthr, heightr);
;;    rectangle.cahnge({ x: 40, stroke: 'transparent' });
//
//
// 5. Трансформировать примитивы. (Изучить возможности матриц
//    трансформации)
//
// 6. Скрывать и удалять примитивы.
//
;;    rectangle.hide();
;;    rectangle.show();
;;    rectangle.remove();
// 
//
// 7. Создавать текстовые примитивы.
//
;;    const [xt, yt, widtht, heightt] = [100, 200, 150, 10];
;;    const text = innerFrame.addTextBox(
        xt, yt, widtht, heightt,
        { fontFamily: 'serif', fontSize: '18px' }
      );
;;    text.write('Hello world!');
//
//
// 8. Надо, чтобы все примитивы и фрэймы составляли единое дерево.
//
;;    cad.primitives.forEach(p => p.hide());
//
//
//
