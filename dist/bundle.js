/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cad/index.ts":
/*!**********************!*\
  !*** ./cad/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrollCad": () => (/* binding */ CrollCad)
/* harmony export */ });
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Line {
    constructor(start, end, stroke = '#000', weight = 1) {
        this.start = start;
        this.end = end;
        this.stroke = stroke;
        this.weight = weight;
    }
}
class SvgLineRenderer {
    constructor(_line, _host) {
        this._line = _line;
        this._host = _host;
    }
    render() {
        const lineElement = document.createElementNS(SVG_NAMESPACE, 'line');
        lineElement.setAttribute('x1', `${this._line.start.x}`);
        lineElement.setAttribute('y1', `${this._line.start.y}`);
        lineElement.setAttribute('x2', `${this._line.end.x}`);
        lineElement.setAttribute('y2', `${this._line.end.y}`);
        lineElement.setAttribute('stroke', this._line.stroke);
        lineElement.setAttribute('stroke-width', `${this._line.weight}`);
        this._host.appendChild(lineElement);
    }
}
class CrollCad {
    constructor(element) {
        this._host = this._prepareHost(element);
    }
    drawLine(x1, y1, x2, y2) {
        const dot1 = new Dot(x1, y1);
        const dot2 = new Dot(x2, y2);
        const line = new Line(dot1, dot2);
        new SvgLineRenderer(line, this._host).render();
    }
    _prepareHost(element) {
        const svgElement = document.createElementNS(SVG_NAMESPACE, 'svg');
        svgElement.setAttribute('viewBox', `0 0 ${element.offsetWidth} ${element.offsetHeight}`);
        element.innerHTML = '';
        element.appendChild(svgElement);
        return svgElement;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cad_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cad/index */ "./cad/index.ts");


const cad = new _cad_index__WEBPACK_IMPORTED_MODULE_0__.CrollCad(document.getElementById('host'));

cad.drawLine(10, 10, 200, 200);
cad.drawLine(200, 200, 400, 10);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm9sbC1jYWQvLi9jYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3JvbGwtY2FkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nyb2xsLWNhZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3JvbGwtY2FkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3JvbGwtY2FkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3JvbGwtY2FkLy4vc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsTUFBTSxhQUFhLEdBQUcsNEJBQTRCLENBQUM7QUFHbkQsTUFBTSxHQUFHO0lBRUwsWUFDVyxDQUFTLEVBQ1QsQ0FBUztRQURULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO0lBRWhCLENBQUM7Q0FFUjtBQUdELE1BQU0sSUFBSTtJQUVOLFlBQ1csS0FBVSxFQUNWLEdBQVEsRUFDUixTQUFTLE1BQU0sRUFDZixTQUFTLENBQUM7UUFIVixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ1YsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUNSLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFJO0lBRWpCLENBQUM7Q0FFUjtBQUdELE1BQU0sZUFBZTtJQUVqQixZQUNZLEtBQVcsRUFDWCxLQUFvQjtRQURwQixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsVUFBSyxHQUFMLEtBQUssQ0FBZTtJQUU1QixDQUFDO0lBRUwsTUFBTTtRQUVGLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXBFLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4RCxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RCxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELFdBQVcsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXhDLENBQUM7Q0FFSjtBQUdNLE1BQU0sUUFBUTtJQUlqQixZQUFZLE9BQW9CO1FBRTVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU1QyxDQUFDO0lBRUQsUUFBUSxDQUFDLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFFbkQsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3QixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbEMsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVuRCxDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQW9CO1FBRTdCLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE9BQU8sT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUV6RixPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWhDLE9BQU8sVUFBVSxDQUFDO0lBRXRCLENBQUM7Q0FFSjs7Ozs7OztVQ3ZGRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEMsZ0JBQWdCLGdEQUFROztBQUV4QjtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBTVkdfTkFNRVNQQUNFID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cclxuXHJcbmNsYXNzIERvdCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB4OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHk6IG51bWJlcixcclxuXHJcbiAgICApIHsgfVxyXG5cclxufVxyXG5cclxuXHJcbmNsYXNzIExpbmUge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgc3RhcnQ6IERvdCxcclxuICAgICAgICBwdWJsaWMgZW5kOiBEb3QsXHJcbiAgICAgICAgcHVibGljIHN0cm9rZSA9ICcjMDAwJyxcclxuICAgICAgICBwdWJsaWMgd2VpZ2h0ID0gMSxcclxuXHJcbiAgICApIHsgfVxyXG5cclxufVxyXG5cclxuXHJcbmNsYXNzIFN2Z0xpbmVSZW5kZXJlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfbGluZTogTGluZSxcclxuICAgICAgICBwcml2YXRlIF9ob3N0OiBTVkdTVkdFbGVtZW50LFxyXG5cclxuICAgICkgeyB9XHJcblxyXG4gICAgcmVuZGVyKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBsaW5lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAnbGluZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxpbmVFbGVtZW50LnNldEF0dHJpYnV0ZSgneDEnLCBgJHt0aGlzLl9saW5lLnN0YXJ0Lnh9YCk7XHJcbiAgICAgICAgbGluZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd5MScsIGAke3RoaXMuX2xpbmUuc3RhcnQueX1gKTtcclxuICAgICAgICBsaW5lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3gyJywgYCR7dGhpcy5fbGluZS5lbmQueH1gKTtcclxuICAgICAgICBsaW5lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3kyJywgYCR7dGhpcy5fbGluZS5lbmQueX1gKTtcclxuICAgICAgICBsaW5lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuX2xpbmUuc3Ryb2tlKTtcclxuICAgICAgICBsaW5lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGAke3RoaXMuX2xpbmUud2VpZ2h0fWApO1xyXG5cclxuICAgICAgICB0aGlzLl9ob3N0LmFwcGVuZENoaWxkKGxpbmVFbGVtZW50KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDcm9sbENhZCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfaG9zdDogU1ZHU1ZHRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2hvc3QgPSB0aGlzLl9wcmVwYXJlSG9zdChlbGVtZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0xpbmUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBkb3QxID0gbmV3IERvdCh4MSwgeTEpOyBcclxuICAgICAgICBjb25zdCBkb3QyID0gbmV3IERvdCh4MiwgeTIpOyBcclxuXHJcbiAgICAgICAgY29uc3QgbGluZSA9IG5ldyBMaW5lKGRvdDEsIGRvdDIpO1xyXG5cclxuICAgICAgICBuZXcgU3ZnTGluZVJlbmRlcmVyKGxpbmUsIHRoaXMuX2hvc3QpLnJlbmRlcigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBfcHJlcGFyZUhvc3QoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBTVkdTVkdFbGVtZW50IHtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAnc3ZnJyk7XHJcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7ZWxlbWVudC5vZmZzZXRXaWR0aH0gJHtlbGVtZW50Lm9mZnNldEhlaWdodH1gKTtcclxuICAgICAgICBcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdmdFbGVtZW50O1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ3JvbGxDYWQgfSBmcm9tICcuL2NhZC9pbmRleCdcclxuXHJcbmNvbnN0IGNhZCA9IG5ldyBDcm9sbENhZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9zdCcpKTtcclxuXHJcbmNhZC5kcmF3TGluZSgxMCwgMTAsIDIwMCwgMjAwKTtcclxuY2FkLmRyYXdMaW5lKDIwMCwgMjAwLCA0MDAsIDEwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==