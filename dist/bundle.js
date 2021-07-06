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
/* harmony export */   "SVG_NAMESPACE": () => (/* binding */ SVG_NAMESPACE),
/* harmony export */   "CrollCad": () => (/* binding */ CrollCad)
/* harmony export */ });
/* harmony import */ var _models_dot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/dot */ "./cad/models/dot.ts");
/* harmony import */ var _models_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/layer */ "./cad/models/layer.ts");
/* harmony import */ var _models_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/line */ "./cad/models/line.ts");



const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
class CrollCad {
    constructor(_element) {
        this._element = _element;
    }
    createLayer(box) {
        const layer = new _models_layer__WEBPACK_IMPORTED_MODULE_1__.Layer();
        if (box == null) {
            const rect = this._element.getBoundingClientRect();
            const height = rect.height;
            const width = rect.width;
            layer.place(this._element, new DOMRect(0, 0, width, height));
        }
        else {
            layer.place(this._element, box);
        }
        return layer;
    }
    static createLine(x1, y1, x2, y2) {
        const dot1 = new _models_dot__WEBPACK_IMPORTED_MODULE_0__.Dot(x1, y1);
        const dot2 = new _models_dot__WEBPACK_IMPORTED_MODULE_0__.Dot(x2, y2);
        return new _models_line__WEBPACK_IMPORTED_MODULE_2__.Line(dot1, dot2);
    }
}


/***/ }),

/***/ "./cad/models/dot.ts":
/*!***************************!*\
  !*** ./cad/models/dot.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dot": () => (/* binding */ Dot)
/* harmony export */ });
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


/***/ }),

/***/ "./cad/models/layer.ts":
/*!*****************************!*\
  !*** ./cad/models/layer.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layer": () => (/* binding */ Layer)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./cad/index.ts");
/* harmony import */ var _renderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderers */ "./cad/renderers/index.ts");


class Layer {
    constructor(primitives = []) {
        this.primitives = primitives;
        this.host = document.createElementNS(___WEBPACK_IMPORTED_MODULE_0__.SVG_NAMESPACE, 'svg');
        primitives.forEach(p => this.draw(p));
    }
    place(element, box) {
        element.style.position = 'relative';
        this.host.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
        this.host.style.position = 'absolute';
        this.host.style.top = `${box.y}px`;
        this.host.style.left = `${box.x}px`;
        this.host.style.width = `${box.width}px`;
        this.host.style.height = `${box.height}px`;
        element.appendChild(this.host);
    }
    draw(primitive) {
        _renderers__WEBPACK_IMPORTED_MODULE_1__.Renderers.getRenderer(primitive).render(this, primitive);
    }
}


/***/ }),

/***/ "./cad/models/line.ts":
/*!****************************!*\
  !*** ./cad/models/line.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Line": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var _primitive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primitive */ "./cad/models/primitive.ts");

class Line {
    constructor(start, end, stroke = '#000', weight = 1) {
        this.start = start;
        this.end = end;
        this.stroke = stroke;
        this.weight = weight;
        this.type = _primitive__WEBPACK_IMPORTED_MODULE_0__.PrimitivesTypes.LINE;
    }
}


/***/ }),

/***/ "./cad/models/primitive.ts":
/*!*********************************!*\
  !*** ./cad/models/primitive.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimitivesTypes": () => (/* binding */ PrimitivesTypes)
/* harmony export */ });
var PrimitivesTypes;
(function (PrimitivesTypes) {
    PrimitivesTypes["LINE"] = "line";
})(PrimitivesTypes || (PrimitivesTypes = {}));


/***/ }),

/***/ "./cad/renderers/index.ts":
/*!********************************!*\
  !*** ./cad/renderers/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderers": () => (/* binding */ Renderers)
/* harmony export */ });
/* harmony import */ var _models_primitive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/primitive */ "./cad/models/primitive.ts");
/* harmony import */ var _svg_line_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-line-renderer */ "./cad/renderers/svg-line-renderer.ts");


class Renderers {
    static getRenderer(primitive) {
        var _a;
        switch (primitive.type) {
            case _models_primitive__WEBPACK_IMPORTED_MODULE_0__.PrimitivesTypes.LINE:
                return ((_a = Renderers.renderers) === null || _a === void 0 ? void 0 : _a.svgLineRenderer)
                    || (Renderers.renderers.svgLineRenderer = new _svg_line_renderer__WEBPACK_IMPORTED_MODULE_1__.SvgLineRenderer());
            default:
                return;
        }
    }
}
Renderers.renderers = {};


/***/ }),

/***/ "./cad/renderers/svg-line-renderer.ts":
/*!********************************************!*\
  !*** ./cad/renderers/svg-line-renderer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgLineRenderer": () => (/* binding */ SvgLineRenderer)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./cad/index.ts");

class SvgLineRenderer {
    render(layer, primitive) {
        const line = document.createElementNS(___WEBPACK_IMPORTED_MODULE_0__.SVG_NAMESPACE, 'line');
        line.setAttribute('x1', `${primitive.start.x}`);
        line.setAttribute('y1', `${primitive.start.y}`);
        line.setAttribute('x2', `${primitive.end.x}`);
        line.setAttribute('y2', `${primitive.end.y}`);
        line.setAttribute('stroke', primitive.stroke);
        line.setAttribute('stroke-width', `${primitive.weight}`);
        layer.host.appendChild(line);
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

const layer = cad.createLayer();
const layer2 = cad.createLayer(new DOMRect(40, 20, 180, 180));
const layer3 = cad.createLayer();

layer.draw(_cad_index__WEBPACK_IMPORTED_MODULE_0__.CrollCad.createLine(20, 20, 200, 200));
layer2.draw(_cad_index__WEBPACK_IMPORTED_MODULE_0__.CrollCad.createLine(0, 0, 180, 180));
layer3.draw(_cad_index__WEBPACK_IMPORTED_MODULE_0__.CrollCad.createLine(60, 20, 240, 200));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm9sbC1jYWQvLi9jYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3JvbGwtY2FkLy4vY2FkL21vZGVscy9kb3QudHMiLCJ3ZWJwYWNrOi8vY3JvbGwtY2FkLy4vY2FkL21vZGVscy9sYXllci50cyIsIndlYnBhY2s6Ly9jcm9sbC1jYWQvLi9jYWQvbW9kZWxzL2xpbmUudHMiLCJ3ZWJwYWNrOi8vY3JvbGwtY2FkLy4vY2FkL21vZGVscy9wcmltaXRpdmUudHMiLCJ3ZWJwYWNrOi8vY3JvbGwtY2FkLy4vY2FkL3JlbmRlcmVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9jcm9sbC1jYWQvLi9jYWQvcmVuZGVyZXJzL3N2Zy1saW5lLXJlbmRlcmVyLnRzIiwid2VicGFjazovL2Nyb2xsLWNhZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jcm9sbC1jYWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nyb2xsLWNhZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nyb2xsLWNhZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nyb2xsLWNhZC8uL3NjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDSTtBQUNGO0FBRTlCLE1BQU0sYUFBYSxHQUFHLDRCQUE0QixDQUFDO0FBRW5ELE1BQU0sUUFBUTtJQUVqQixZQUNZLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7SUFFN0IsQ0FBQztJQUVMLFdBQVcsQ0FBQyxHQUFhO1FBRXJCLE1BQU0sS0FBSyxHQUFHLElBQUksZ0RBQUssRUFBRSxDQUFDO1FBRTFCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJB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QUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRXpELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpDLENBQUM7Q0FFSjs7Ozs7OztVQ3RCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEMsZ0JBQWdCLGdEQUFROztBQUV4QjtBQUNBO0FBQ0E7O0FBRUEsV0FBVywyREFBbUI7QUFDOUIsWUFBWSwyREFBbUI7QUFDL0IsWUFBWSwyREFBbUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG90IH0gZnJvbSBcIi4vbW9kZWxzL2RvdFwiO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gXCIuL21vZGVscy9sYXllclwiO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcIi4vbW9kZWxzL2xpbmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyb2xsQ2FkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudCxcclxuICAgIFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBjcmVhdGVMYXllcihib3g/OiBET01SZWN0KTogTGF5ZXIge1xyXG5cclxuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBMYXllcigpO1xyXG5cclxuICAgICAgICBpZiAoYm94ID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgICAgIGxheWVyLnBsYWNlKHRoaXMuX2VsZW1lbnQsIG5ldyBET01SZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpKTtcclxuICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYXllci5wbGFjZSh0aGlzLl9lbGVtZW50LCBib3gpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxheWVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlTGluZSh4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyKTogTGluZSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvdDEgPSBuZXcgRG90KHgxLCB5MSk7XHJcbiAgICAgICAgY29uc3QgZG90MiA9IG5ldyBEb3QoeDIsIHkyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaW5lKGRvdDEsIGRvdDIpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwiXHJcbmV4cG9ydCBjbGFzcyBEb3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB4OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHk6IG51bWJlcixcclxuXHJcbiAgICApIHsgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTVkdfTkFNRVNQQUNFIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVycyB9IGZyb20gXCIuLi9yZW5kZXJlcnNcIjtcclxuaW1wb3J0IHsgSVByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExheWVyIHtcclxuXHJcbiAgICBob3N0OiBTVkdTVkdFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBwcmltaXRpdmVzOiBJUHJpbWl0aXZlW10gPSBbXSxcclxuXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0UsICdzdmcnKTtcclxuICAgICAgICBcclxuICAgICAgICBwcmltaXRpdmVzLmZvckVhY2gocCA9PiB0aGlzLmRyYXcocCkpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwbGFjZShlbGVtZW50OiBIVE1MRWxlbWVudCwgYm94PzogRE9NUmVjdCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnOyBcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0LnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHtib3gud2lkdGh9ICR7Ym94LmhlaWdodH1gKTtcclxuICAgICAgICB0aGlzLmhvc3Quc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRoaXMuaG9zdC5zdHlsZS50b3AgPSBgJHtib3gueX1weGA7XHJcbiAgICAgICAgdGhpcy5ob3N0LnN0eWxlLmxlZnQgPSBgJHtib3gueH1weGA7XHJcbiAgICAgICAgdGhpcy5ob3N0LnN0eWxlLndpZHRoID0gYCR7Ym94LndpZHRofXB4YDtcclxuICAgICAgICB0aGlzLmhvc3Quc3R5bGUuaGVpZ2h0ID0gYCR7Ym94LmhlaWdodH1weGA7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5ob3N0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwcmltaXRpdmU6IElQcmltaXRpdmUpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICBSZW5kZXJlcnMuZ2V0UmVuZGVyZXIocHJpbWl0aXZlKS5yZW5kZXIodGhpcywgcHJpbWl0aXZlKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERvdCB9IGZyb20gXCIuL2RvdFwiO1xyXG5pbXBvcnQgeyBJUHJpbWl0aXZlLCBQcmltaXRpdmVzVHlwZXMgfSBmcm9tIFwiLi9wcmltaXRpdmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lIGltcGxlbWVudHMgSVByaW1pdGl2ZSB7XHJcblxyXG4gICAgdHlwZSA9IFByaW1pdGl2ZXNUeXBlcy5MSU5FO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBzdGFydDogRG90LFxyXG4gICAgICAgIHB1YmxpYyBlbmQ6IERvdCxcclxuICAgICAgICBwdWJsaWMgc3Ryb2tlID0gJyMwMDAnLFxyXG4gICAgICAgIHB1YmxpYyB3ZWlnaHQgPSAxLFxyXG5cclxuICAgICkgeyB9XHJcblxyXG59XHJcbiIsIlxyXG5leHBvcnQgZW51bSBQcmltaXRpdmVzVHlwZXMge1xyXG4gICAgTElORSA9ICdsaW5lJyxcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcmltaXRpdmUge1xyXG4gICAgdHlwZTogUHJpbWl0aXZlc1R5cGVzO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBMYXllciB9IGZyb20gXCIuLi9tb2RlbHMvbGF5ZXJcIjtcclxuaW1wb3J0IHsgSVByaW1pdGl2ZSwgUHJpbWl0aXZlc1R5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9wcmltaXRpdmVcIjtcclxuaW1wb3J0IHsgU3ZnTGluZVJlbmRlcmVyIH0gZnJvbSBcIi4vc3ZnLWxpbmUtcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlbmRlcmVyIHtcclxuICAgIHJlbmRlcihsYXllcjogTGF5ZXIsIHByaW1pdGl2ZTogSVByaW1pdGl2ZSk6IHZvaWQ7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlcmVycyB7XHJcblxyXG4gICAgc3RhdGljIHJlbmRlcmVyczogeyBba2V5OiBzdHJpbmddOiBJUmVuZGVyZXI7IH0gPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0UmVuZGVyZXIocHJpbWl0aXZlOiBJUHJpbWl0aXZlKTogSVJlbmRlcmVyIHwgdW5kZWZpbmVkIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChwcmltaXRpdmUudHlwZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBQcmltaXRpdmVzVHlwZXMuTElORTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBSZW5kZXJlcnMucmVuZGVyZXJzPy5zdmdMaW5lUmVuZGVyZXJcclxuICAgICAgICAgICAgICAgIHx8IChSZW5kZXJlcnMucmVuZGVyZXJzLnN2Z0xpbmVSZW5kZXJlciA9IG5ldyBTdmdMaW5lUmVuZGVyZXIoKSk7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJUmVuZGVyZXIgfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyBTVkdfTkFNRVNQQUNFIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSBcIi4uL21vZGVscy9sYXllclwiO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcIi4uL21vZGVscy9saW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ZnTGluZVJlbmRlcmVyIGltcGxlbWVudHMgSVJlbmRlcmVyIHtcclxuXHJcbiAgICByZW5kZXIobGF5ZXI6IExheWVyLCBwcmltaXRpdmU6IExpbmUpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAnbGluZScpO1xyXG5cclxuICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZSgneDEnLCBgJHtwcmltaXRpdmUuc3RhcnQueH1gKTtcclxuICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZSgneTEnLCBgJHtwcmltaXRpdmUuc3RhcnQueX1gKTtcclxuICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZSgneDInLCBgJHtwcmltaXRpdmUuZW5kLnh9YCk7XHJcbiAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3kyJywgYCR7cHJpbWl0aXZlLmVuZC55fWApO1xyXG4gICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKCdzdHJva2UnLCBwcmltaXRpdmUuc3Ryb2tlKTtcclxuICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgYCR7cHJpbWl0aXZlLndlaWdodH1gKTtcclxuXHJcbiAgICAgICAgbGF5ZXIuaG9zdC5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENyb2xsQ2FkIH0gZnJvbSAnLi9jYWQvaW5kZXgnXHJcblxyXG5jb25zdCBjYWQgPSBuZXcgQ3JvbGxDYWQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvc3QnKSk7XHJcblxyXG5jb25zdCBsYXllciA9IGNhZC5jcmVhdGVMYXllcigpO1xyXG5jb25zdCBsYXllcjIgPSBjYWQuY3JlYXRlTGF5ZXIobmV3IERPTVJlY3QoNDAsIDIwLCAxODAsIDE4MCkpO1xyXG5jb25zdCBsYXllcjMgPSBjYWQuY3JlYXRlTGF5ZXIoKTtcclxuXHJcbmxheWVyLmRyYXcoQ3JvbGxDYWQuY3JlYXRlTGluZSgyMCwgMjAsIDIwMCwgMjAwKSk7XHJcbmxheWVyMi5kcmF3KENyb2xsQ2FkLmNyZWF0ZUxpbmUoMCwgMCwgMTgwLCAxODApKTtcclxubGF5ZXIzLmRyYXcoQ3JvbGxDYWQuY3JlYXRlTGluZSg2MCwgMjAsIDI0MCwgMjAwKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=