var CrollCad;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./cad/croll-cad.ts":
/*!**************************!*\
  !*** ./cad/croll-cad.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_dot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/dot */ "./cad/models/dot.ts");
/* harmony import */ var _models_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/layer */ "./cad/models/layer.ts");
/* harmony import */ var _models_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/line */ "./cad/models/line.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
    constructor(_element) {
        this._element = _element;
    }
    createLayer(box, primitives) {
        const layer = new _models_layer__WEBPACK_IMPORTED_MODULE_1__.Layer(primitives);
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
});


/***/ }),

/***/ "./cad/index.ts":
/*!**********************!*\
  !*** ./cad/index.ts ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const CrollCad = __webpack_require__(/*! ./croll-cad */ "./cad/croll-cad.ts").default;
module.exports = CrollCad;


/***/ }),

/***/ "./cad/models/constants.ts":
/*!*********************************!*\
  !*** ./cad/models/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVG_NAMESPACE": () => (/* binding */ SVG_NAMESPACE)
/* harmony export */ });
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";


/***/ }),

/***/ "./cad/models/dot.ts":
/*!***************************!*\
  !*** ./cad/models/dot.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layer": () => (/* binding */ Layer)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./cad/models/constants.ts");

class Layer {
    constructor(primitives = []) {
        this.primitives = primitives;
        this.host = document.createElementNS(_constants__WEBPACK_IMPORTED_MODULE_0__.SVG_NAMESPACE, 'svg');
        primitives.forEach(p => p.render(this));
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
    add(primitive) {
        this.primitives.push(primitive);
        primitive.render(this);
    }
}


/***/ }),

/***/ "./cad/models/line.ts":
/*!****************************!*\
  !*** ./cad/models/line.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Line": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./cad/models/constants.ts");
/* harmony import */ var _primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primitive */ "./cad/models/primitive.ts");


class Line {
    constructor(start, end, stroke = '#000', weight = 1) {
        this.start = start;
        this.end = end;
        this.stroke = stroke;
        this.weight = weight;
        this.type = _primitive__WEBPACK_IMPORTED_MODULE_1__.PrimitivesTypes.LINE;
    }
    render(layer) {
        const element = document.createElementNS(_constants__WEBPACK_IMPORTED_MODULE_0__.SVG_NAMESPACE, 'line');
        element.setAttribute('x1', `${this.start.x}`);
        element.setAttribute('y1', `${this.start.y}`);
        element.setAttribute('x2', `${this.end.x}`);
        element.setAttribute('y2', `${this.end.y}`);
        element.setAttribute('stroke', this.stroke);
        element.setAttribute('stroke-width', `${this.weight}`);
        layer.host.appendChild(element);
    }
}


/***/ }),

/***/ "./cad/models/primitive.ts":
/*!*********************************!*\
  !*** ./cad/models/primitive.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimitivesTypes": () => (/* binding */ PrimitivesTypes)
/* harmony export */ });
var PrimitivesTypes;
(function (PrimitivesTypes) {
    PrimitivesTypes["LINE"] = "line";
})(PrimitivesTypes || (PrimitivesTypes = {}));


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./cad/index.ts");
/******/ 	CrollCad = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9jcm9sbC1jYWQudHMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvLi9jYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvLi9jYWQvbW9kZWxzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9tb2RlbHMvZG90LnRzIiwid2VicGFjazovL0Nyb2xsQ2FkLy4vY2FkL21vZGVscy9sYXllci50cyIsIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9tb2RlbHMvbGluZS50cyIsIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9tb2RlbHMvcHJpbWl0aXZlLnRzIiwid2VicGFjazovL0Nyb2xsQ2FkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Nyb2xsQ2FkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Dcm9sbENhZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0Nyb2xsQ2FkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNJO0FBQ0Y7QUFHckMsaUVBQWU7SUFFWCxZQUNZLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7SUFFN0IsQ0FBQztJQUVMLFdBQVcsQ0FBQyxHQUFhLEVBQUUsVUFBeUI7UUFFaEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxnREFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNuRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENB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RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG90IH0gZnJvbSBcIi4vbW9kZWxzL2RvdFwiO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gXCIuL21vZGVscy9sYXllclwiO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcIi4vbW9kZWxzL2xpbmVcIjtcclxuaW1wb3J0IHsgSVByaW1pdGl2ZSB9IGZyb20gXCIuL21vZGVscy9wcmltaXRpdmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudCxcclxuICAgIFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBjcmVhdGVMYXllcihib3g/OiBET01SZWN0LCBwcmltaXRpdmVzPzogSVByaW1pdGl2ZVtdKTogTGF5ZXIge1xyXG5cclxuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBMYXllcihwcmltaXRpdmVzKTtcclxuXHJcbiAgICAgICAgaWYgKGJveCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgICAgICAgICBsYXllci5wbGFjZSh0aGlzLl9lbGVtZW50LCBuZXcgRE9NUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGF5ZXIucGxhY2UodGhpcy5fZWxlbWVudCwgYm94KTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsYXllcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUxpbmUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlcik6IExpbmUge1xyXG5cclxuICAgICAgICBjb25zdCBkb3QxID0gbmV3IERvdCh4MSwgeTEpO1xyXG4gICAgICAgIGNvbnN0IGRvdDIgPSBuZXcgRG90KHgyLCB5Mik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgTGluZShkb3QxLCBkb3QyKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxyXG5jb25zdCBDcm9sbENhZCA9IHJlcXVpcmUoXCIuL2Nyb2xsLWNhZFwiKS5kZWZhdWx0XHJcbm1vZHVsZS5leHBvcnRzID0gQ3JvbGxDYWRcclxuIiwiZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbiIsIlxyXG5leHBvcnQgY2xhc3MgRG90IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgeDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB5OiBudW1iZXIsXHJcblxyXG4gICAgKSB7IH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU1ZHX05BTUVTUEFDRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5ZXIge1xyXG5cclxuICAgIGhvc3Q6IFNWR1NWR0VsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHByaW1pdGl2ZXM6IElQcmltaXRpdmVbXSA9IFtdLFxyXG5cclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRSwgJ3N2ZycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaW1pdGl2ZXMuZm9yRWFjaChwID0+IHAucmVuZGVyKHRoaXMpKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcGxhY2UoZWxlbWVudDogSFRNTEVsZW1lbnQsIGJveD86IERPTVJlY3QpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJzsgXHJcblxyXG4gICAgICAgIHRoaXMuaG9zdC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7Ym94LndpZHRofSAke2JveC5oZWlnaHR9YCk7XHJcbiAgICAgICAgdGhpcy5ob3N0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICB0aGlzLmhvc3Quc3R5bGUudG9wID0gYCR7Ym94Lnl9cHhgO1xyXG4gICAgICAgIHRoaXMuaG9zdC5zdHlsZS5sZWZ0ID0gYCR7Ym94Lnh9cHhgO1xyXG4gICAgICAgIHRoaXMuaG9zdC5zdHlsZS53aWR0aCA9IGAke2JveC53aWR0aH1weGA7XHJcbiAgICAgICAgdGhpcy5ob3N0LnN0eWxlLmhlaWdodCA9IGAke2JveC5oZWlnaHR9cHhgO1xyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaG9zdCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZChwcmltaXRpdmU6IElQcmltaXRpdmUpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5wcmltaXRpdmVzLnB1c2gocHJpbWl0aXZlKTtcclxuICAgICAgICBwcmltaXRpdmUucmVuZGVyKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU1ZHX05BTUVTUEFDRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBEb3QgfSBmcm9tIFwiLi9kb3RcIjtcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tIFwiLi9sYXllclwiO1xyXG5pbXBvcnQgeyBJUHJpbWl0aXZlLCBQcmltaXRpdmVzVHlwZXMgfSBmcm9tIFwiLi9wcmltaXRpdmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lIGltcGxlbWVudHMgSVByaW1pdGl2ZSB7XHJcblxyXG4gICAgdHlwZSA9IFByaW1pdGl2ZXNUeXBlcy5MSU5FO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBzdGFydDogRG90LFxyXG4gICAgICAgIHB1YmxpYyBlbmQ6IERvdCxcclxuICAgICAgICBwdWJsaWMgc3Ryb2tlID0gJyMwMDAnLFxyXG4gICAgICAgIHB1YmxpYyB3ZWlnaHQgPSAxLFxyXG5cclxuICAgICkgeyB9XHJcblxyXG4gICAgcmVuZGVyKGxheWVyOiBMYXllcik6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0UsICdsaW5lJyk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd4MScsIGAke3RoaXMuc3RhcnQueH1gKTtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgneTEnLCBgJHt0aGlzLnN0YXJ0Lnl9YCk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3gyJywgYCR7dGhpcy5lbmQueH1gKTtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgneTInLCBgJHt0aGlzLmVuZC55fWApO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGlzLnN0cm9rZSk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGAke3RoaXMud2VpZ2h0fWApO1xyXG5cclxuICAgICAgICBsYXllci5ob3N0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IExheWVyIH0gZnJvbSBcIi4vbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFByaW1pdGl2ZXNUeXBlcyB7XHJcbiAgICBMSU5FID0gJ2xpbmUnLFxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByaW1pdGl2ZSB7XHJcbiAgICB0eXBlOiBQcmltaXRpdmVzVHlwZXM7XHJcbiAgICByZW5kZXIobGF5ZXI6IExheWVyKTogdm9pZDtcclxuXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2NhZC9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=