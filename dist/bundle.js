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
/* harmony import */ var _models_circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/circle */ "./cad/models/circle.ts");
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/constants */ "./cad/models/constants.ts");
/* harmony import */ var _models_dot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/dot */ "./cad/models/dot.ts");
/* harmony import */ var _models_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/group */ "./cad/models/group.ts");
/* harmony import */ var _models_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/line */ "./cad/models/line.ts");
/* harmony import */ var _models_rectangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/rectangle */ "./cad/models/rectangle.ts");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
    constructor(host) {
        this.primitives = [];
        this._element = document.createElementNS(_models_constants__WEBPACK_IMPORTED_MODULE_1__.SVG_NAMESPACE, 'svg');
        host.style.position = 'relative';
        const rect = host.getBoundingClientRect();
        this._element.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
        this._element.style.position = 'absolute';
        this._element.style.top = `0`;
        this._element.style.left = `0`;
        this._element.style.width = `${rect.width}px`;
        this._element.style.height = `${rect.height}px`;
        host.appendChild(this._element);
    }
    add(primitives) {
        const _primitives = Array.isArray(primitives) ? primitives : [primitives];
        this.primitives.unshift(..._primitives);
        _primitives.forEach(p => p.render(this._element));
    }
    static createGroup(primitives) {
        return new _models_group__WEBPACK_IMPORTED_MODULE_3__.Group(primitives);
    }
    static createLine(x, y, x2, y2, stroke, weight) {
        return new _models_line__WEBPACK_IMPORTED_MODULE_4__.Line(x, y, x2, y2, stroke, weight);
    }
    static createDot(x, y, stroke) {
        return new _models_dot__WEBPACK_IMPORTED_MODULE_2__.Dot(x, y, stroke);
    }
    static createRectangle(x, y, width, height, stroke, fill) {
        return new _models_rectangle__WEBPACK_IMPORTED_MODULE_5__.Rectangle(x, y, width, height, stroke, fill);
    }
    static createCircle(cx, cy, radius, sector = 360, stroke = '#000', fill = '#000') {
        return new _models_circle__WEBPACK_IMPORTED_MODULE_0__.Circle(cx, cy, radius, sector, stroke, fill);
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

/***/ "./cad/models/circle.ts":
/*!******************************!*\
  !*** ./cad/models/circle.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./cad/models/constants.ts");

class Circle {
    constructor(cx, cy, radius, sector = 360, stroke = '#000', fill = '#000') {
        this.cx = cx;
        this.cy = cy;
        this.radius = radius;
        this.sector = sector;
        this.stroke = stroke;
        this.fill = fill;
        this.element = document.createElementNS(_constants__WEBPACK_IMPORTED_MODULE_0__.SVG_NAMESPACE, 'path');
    }
    render(host) {
        this.element.setAttribute('stroke', this.stroke);
        this.element.setAttribute('fill', this.stroke);
        this.element.setAttribute('d', this._getD());
        host.appendChild(this.element);
    }
    _getArc() {
        return {
            start: {
                x: this.radius
                    * Math.cos(this._toRadians(0)) + this.cx,
                y: this.radius
                    * Math.sin(this._toRadians(0)) + this.cy
            },
            end: {
                x: this.radius
                    * Math.cos(this._toRadians(this.sector - 0.00001)) + this.cx,
                y: this.radius
                    * Math.sin(this._toRadians(this.sector - 0.00001)) + this.cy
            }
        };
    }
    _lageArc() {
        return (this.sector - 0.00000001) % 360 > 180 ? 1 : 0;
    }
    _getD() {
        const arc = this._getArc();
        return `
            M ${this.cx} ${this.cy}
            L ${arc.start.x} ${arc.start.y}
            A ${this.radius} ${this.radius} 0 ${this._lageArc()} 1 ${arc.end.x} ${arc.end.y}
            L ${this.cx} ${this.cy}
            z
        `;
    }
    _toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
}


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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./cad/models/constants.ts");

class Dot {
    constructor(x, y, stroke = '#000') {
        this.x = x;
        this.y = y;
        this.stroke = stroke;
        this._radius = 1;
        this.element = document.createElementNS(_constants__WEBPACK_IMPORTED_MODULE_0__.SVG_NAMESPACE, 'circle');
    }
    render(host) {
        this.element.setAttribute('cx', `${this.x}`);
        this.element.setAttribute('cy', `${this.y}`);
        this.element.setAttribute('r', `${this._radius}`);
        this.element.setAttribute('stroke', this.stroke);
        this.element.setAttribute('fill', this.stroke);
        host.appendChild(this.element);
    }
}


/***/ }),

/***/ "./cad/models/group.ts":
/*!*****************************!*\
  !*** ./cad/models/group.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Group": () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./cad/models/constants.ts");

class Group {
    constructor(primitives = []) {
        this.primitives = primitives;
        this.element = document.createElementNS(_constants__WEBPACK_IMPORTED_MODULE_0__.SVG_NAMESPACE, 'g');
    }
    render(host) {
        this.primitives.forEach(p => p.render(this.element));
        host.appendChild(this.element);
    }
    add(primitives) {
        const _primitives = Array.isArray(primitives) ? primitives : [primitives];
        this.primitives.unshift(..._primitives);
        _primitives.forEach(p => p.render(this.element));
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
    constructor(x, y, x2, y2, stroke = '#000', weight = 1) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.stroke = stroke;
        this.weight = weight;
        this.type = _primitive__WEBPACK_IMPORTED_MODULE_1__.PrimitivesTypes.LINE;
        this.element = document.createElementNS(_constants__WEBPACK_IMPORTED_MODULE_0__.SVG_NAMESPACE, 'line');
    }
    render(host) {
        this.element.setAttribute('x1', `${this.x}`);
        this.element.setAttribute('y1', `${this.y}`);
        this.element.setAttribute('x2', `${this.x2}`);
        this.element.setAttribute('y2', `${this.y2}`);
        this.element.setAttribute('stroke', this.stroke);
        this.element.setAttribute('stroke-width', `${this.weight}`);
        host.appendChild(this.element);
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
    PrimitivesTypes["DOT"] = "dot";
    PrimitivesTypes["CIRCLE"] = "circle";
    PrimitivesTypes["RECTANGLE"] = "rectangle";
    PrimitivesTypes["GROUP"] = "group";
})(PrimitivesTypes || (PrimitivesTypes = {}));


/***/ }),

/***/ "./cad/models/rectangle.ts":
/*!*********************************!*\
  !*** ./cad/models/rectangle.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rectangle": () => (/* binding */ Rectangle)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./cad/models/constants.ts");
/* harmony import */ var _primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primitive */ "./cad/models/primitive.ts");


class Rectangle {
    constructor(x, y, width, height, stroke = '#000', fill = '', weight = 1) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.stroke = stroke;
        this.fill = fill;
        this.weight = weight;
        this.type = _primitive__WEBPACK_IMPORTED_MODULE_1__.PrimitivesTypes.RECTANGLE;
        this.element = document.createElementNS(_constants__WEBPACK_IMPORTED_MODULE_0__.SVG_NAMESPACE, 'rect');
    }
    render(host) {
        this.element.setAttribute('x', `${this.x}`);
        this.element.setAttribute('y', `${this.y}`);
        this.element.setAttribute('width', `${this.width}`);
        this.element.setAttribute('height', `${this.height}`);
        this.element.setAttribute('stroke', this.stroke);
        this.element.setAttribute('fill', this.fill || 'transparent');
        this.element.setAttribute('stroke-width', `${this.weight}`);
        host.appendChild(this.element);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./cad/index.ts");
/******/ 	CrollCad = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9jcm9sbC1jYWQudHMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvLi9jYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvLi9jYWQvbW9kZWxzL2NpcmNsZS50cyIsIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9tb2RlbHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0Nyb2xsQ2FkLy4vY2FkL21vZGVscy9kb3QudHMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvLi9jYWQvbW9kZWxzL2dyb3VwLnRzIiwid2VicGFjazovL0Nyb2xsQ2FkLy4vY2FkL21vZGVscy9saW5lLnRzIiwid2VicGFjazovL0Nyb2xsQ2FkLy4vY2FkL21vZGVscy9wcmltaXRpdmUudHMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvLi9jYWQvbW9kZWxzL3JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly9Dcm9sbENhZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Dcm9sbENhZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Dcm9sbENhZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0Nyb2xsQ2FkL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUM7QUFDVTtBQUNoQjtBQUNJO0FBQ0Y7QUFFVTtBQUUvQyxpRUFBZTtJQUtYLFlBQ0ksSUFBaUI7UUFKckIsZUFBVSxHQUFpQixFQUFFLENBQUM7UUFRMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLDREQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxR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VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENpcmNsZSB9IGZyb20gXCIuL21vZGVscy9jaXJjbGVcIjtcclxuaW1wb3J0IHsgU1ZHX05BTUVTUEFDRSB9IGZyb20gXCIuL21vZGVscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgRG90IH0gZnJvbSBcIi4vbW9kZWxzL2RvdFwiO1xyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuL21vZGVscy9ncm91cFwiO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcIi4vbW9kZWxzL2xpbmVcIjtcclxuaW1wb3J0IHsgSVByaW1pdGl2ZSB9IGZyb20gXCIuL21vZGVscy9wcmltaXRpdmVcIjtcclxuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSBcIi4vbW9kZWxzL3JlY3RhbmdsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICAgIHByaW1pdGl2ZXM6IElQcmltaXRpdmVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogU1ZHU1ZHRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBob3N0OiBIVE1MRWxlbWVudCxcclxuICAgIFxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRSwgJ3N2ZycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhvc3Quc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHtyZWN0LndpZHRofSAke3JlY3QuaGVpZ2h0fWApO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudG9wID0gYDBgO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUubGVmdCA9IGAwYDtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLndpZHRoID0gYCR7cmVjdC53aWR0aH1weGA7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtyZWN0LmhlaWdodH1weGA7XHJcblxyXG4gICAgICAgIGhvc3QuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZChwcmltaXRpdmVzOiBJUHJpbWl0aXZlIHwgSVByaW1pdGl2ZVtdKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IF9wcmltaXRpdmVzID0gQXJyYXkuaXNBcnJheShwcmltaXRpdmVzKSA/IHByaW1pdGl2ZXMgOiBbcHJpbWl0aXZlc107XHJcblxyXG4gICAgICAgIHRoaXMucHJpbWl0aXZlcy51bnNoaWZ0KC4uLl9wcmltaXRpdmVzKTtcclxuICAgICAgICBfcHJpbWl0aXZlcy5mb3JFYWNoKHAgPT4gcC5yZW5kZXIodGhpcy5fZWxlbWVudCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlR3JvdXAocHJpbWl0aXZlcz86IElQcmltaXRpdmVbXSk6IEdyb3VwIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcm91cChwcmltaXRpdmVzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUxpbmUoXHJcbiAgICAgICAgeDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgICAgICB4MjogbnVtYmVyLFxyXG4gICAgICAgIHkyOiBudW1iZXIsXHJcbiAgICAgICAgc3Ryb2tlPzogc3RyaW5nLFxyXG4gICAgICAgIHdlaWdodD86IG51bWJlclxyXG4gICAgXHJcbiAgICApOiBMaW5lIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaW5lKHgsIHksIHgyLCB5Miwgc3Ryb2tlLCB3ZWlnaHQpO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGNyZWF0ZURvdChcclxuICAgICAgICB4OiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyLFxyXG4gICAgICAgIHN0cm9rZT86IHN0cmluZ1xyXG4gICAgXHJcbiAgICApOiBEb3Qge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IERvdCh4LCB5LCBzdHJva2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlUmVjdGFuZ2xlKFxyXG4gICAgICAgIHg6IG51bWJlcixcclxuICAgICAgICB5OiBudW1iZXIsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBzdHJva2U/OiBzdHJpbmcsXHJcbiAgICAgICAgZmlsbD86IHN0cmluZ1xyXG4gICAgXHJcbiAgICApOiBSZWN0YW5nbGUge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHJva2UsIGZpbGwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2lyY2xlKFxyXG4gICAgICAgIGN4OiBudW1iZXIsXHJcbiAgICAgICAgY3k6IG51bWJlcixcclxuICAgICAgICByYWRpdXM6IG51bWJlcixcclxuICAgICAgICBzZWN0b3I6IG51bWJlciA9IDM2MCxcclxuICAgICAgICBzdHJva2UgPSAnIzAwMCcsXHJcbiAgICAgICAgZmlsbCA9ICcjMDAwJyxcclxuXHJcblxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ2lyY2xlKGN4LCBjeSwgcmFkaXVzLCBzZWN0b3IsIHN0cm9rZSwgZmlsbCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuY29uc3QgQ3JvbGxDYWQgPSByZXF1aXJlKFwiLi9jcm9sbC1jYWRcIikuZGVmYXVsdDtcclxubW9kdWxlLmV4cG9ydHMgPSBDcm9sbENhZDtcclxuIiwiXHJcbmltcG9ydCB7IFNWR19OQU1FU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgSVByaW1pdGl2ZSwgUHJpbWl0aXZlc1R5cGVzIH0gZnJvbSBcIi4vcHJpbWl0aXZlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFyY1BhcmFtcyB7XHJcbiAgICBzdGFydDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfTtcclxuICAgIGVuZDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaXJjbGUgaW1wbGVtZW50cyBJUHJpbWl0aXZlIHtcclxuXHJcbiAgICByZWFkb25seSB0eXBlOiBQcmltaXRpdmVzVHlwZXMuQ0lSQ0xFO1xyXG4gICAgZWxlbWVudDogU1ZHUGF0aEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGN4OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGN5OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHJhZGl1czogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzZWN0b3I6IG51bWJlciA9IDM2MCxcclxuICAgICAgICBwdWJsaWMgc3Ryb2tlID0gJyMwMDAnLFxyXG4gICAgICAgIHB1YmxpYyBmaWxsID0gJyMwMDAnLFxyXG5cclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRSwgJ3BhdGgnKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoaG9zdDogU1ZHR3JhcGhpY3NFbGVtZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuc3Ryb2tlKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5zdHJva2UpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2QnLCB0aGlzLl9nZXREKCkpO1xyXG5cclxuICAgICAgICBob3N0LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEFyYygpOiBJQXJjUGFyYW1zIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucmFkaXVzXHJcbiAgICAgICAgICAgICAgICAgICAgKiBNYXRoLmNvcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9SYWRpYW5zKDApXHJcbiAgICAgICAgICAgICAgICAgICAgKSArIHRoaXMuY3gsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnJhZGl1c1xyXG4gICAgICAgICAgICAgICAgICAgICogTWF0aC5zaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvUmFkaWFucygwKVxyXG4gICAgICAgICAgICAgICAgICAgICkgKyB0aGlzLmN5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVuZDoge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5yYWRpdXNcclxuICAgICAgICAgICAgICAgICAgICAqIE1hdGguY29zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90b1JhZGlhbnModGhpcy5zZWN0b3IgLSAwLjAwMDAxKVxyXG4gICAgICAgICAgICAgICAgICAgICkgKyB0aGlzLmN4LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5yYWRpdXNcclxuICAgICAgICAgICAgICAgICAgICAqIE1hdGguc2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90b1JhZGlhbnModGhpcy5zZWN0b3IgLSAwLjAwMDAxKVxyXG4gICAgICAgICAgICAgICAgICAgICkgKyB0aGlzLmN5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sYWdlQXJjKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnNlY3RvciAtIDAuMDAwMDAwMDEpICUgMzYwID4gMTgwID8gMSA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0RCgpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBjb25zdCBhcmMgPSB0aGlzLl9nZXRBcmMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgTSAke3RoaXMuY3h9ICR7dGhpcy5jeX1cclxuICAgICAgICAgICAgTCAke2FyYy5zdGFydC54fSAke2FyYy5zdGFydC55fVxyXG4gICAgICAgICAgICBBICR7dGhpcy5yYWRpdXN9ICR7dGhpcy5yYWRpdXN9IDAgJHt0aGlzLl9sYWdlQXJjKCl9IDEgJHthcmMuZW5kLnh9ICR7YXJjLmVuZC55fVxyXG4gICAgICAgICAgICBMICR7dGhpcy5jeH0gJHt0aGlzLmN5fVxyXG4gICAgICAgICAgICB6XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdG9SYWRpYW5zKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciB7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWdyZWVzICogKE1hdGguUEkgLyAxODApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwiXHJcbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4iLCJcclxuaW1wb3J0IHsgU1ZHX05BTUVTUEFDRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJUHJpbWl0aXZlLCBQcmltaXRpdmVzVHlwZXMgfSBmcm9tIFwiLi9wcmltaXRpdmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb3QgaW1wbGVtZW50cyBJUHJpbWl0aXZlIHtcclxuXHJcbiAgICByZWFkb25seSB0eXBlOiBQcmltaXRpdmVzVHlwZXMuRE9UO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcmFkaXVzID0gMTtcclxuICAgIGVsZW1lbnQ6IFNWR0NpcmNsZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHg6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzdHJva2UgPSAnIzAwMCcsXHJcblxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAnY2lyY2xlJylcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGhvc3Q6IFNWR0dyYXBoaWNzRWxlbWVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeCcsIGAke3RoaXMueH1gKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeScsIGAke3RoaXMueX1gKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdyJywgYCR7dGhpcy5fcmFkaXVzfWApO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuc3Ryb2tlKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5zdHJva2UpO1xyXG5cclxuICAgICAgICBob3N0LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbn1cclxuIiwiXHJcbmltcG9ydCB7IFNWR19OQU1FU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgSVByaW1pdGl2ZSwgUHJpbWl0aXZlc1R5cGVzIH0gZnJvbSBcIi4vcHJpbWl0aXZlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JvdXAgaW1wbGVtZW50cyBJUHJpbWl0aXZlIHtcclxuXHJcbiAgICByZWFkb25seSB0eXBlOiBQcmltaXRpdmVzVHlwZXMuR1JPVVA7XHJcbiAgICBlbGVtZW50OiBTVkdHRWxlbWVudDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHByaW1pdGl2ZXM6IElQcmltaXRpdmVbXSA9IFtdLFxyXG5cclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRSwgJ2cnKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcihob3N0OiBTVkdHcmFwaGljc0VsZW1lbnQpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnByaW1pdGl2ZXMuZm9yRWFjaChwID0+IHAucmVuZGVyKHRoaXMuZWxlbWVudCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhvc3QuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFkZChwcmltaXRpdmVzOiBJUHJpbWl0aXZlIHwgSVByaW1pdGl2ZVtdKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IF9wcmltaXRpdmVzID0gQXJyYXkuaXNBcnJheShwcmltaXRpdmVzKSA/IHByaW1pdGl2ZXMgOiBbcHJpbWl0aXZlc107XHJcblxyXG4gICAgICAgIHRoaXMucHJpbWl0aXZlcy51bnNoaWZ0KC4uLl9wcmltaXRpdmVzKTtcclxuICAgICAgICBfcHJpbWl0aXZlcy5mb3JFYWNoKHAgPT4gcC5yZW5kZXIodGhpcy5lbGVtZW50KSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgU1ZHX05BTUVTUEFDRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJUHJpbWl0aXZlLCBQcmltaXRpdmVzVHlwZXMgfSBmcm9tIFwiLi9wcmltaXRpdmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lIGltcGxlbWVudHMgSVByaW1pdGl2ZSB7XHJcblxyXG4gICAgdHlwZSA9IFByaW1pdGl2ZXNUeXBlcy5MSU5FO1xyXG4gICAgZWxlbWVudDogU1ZHTGluZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHg6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB4MjogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB5MjogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzdHJva2UgPSAnIzAwMCcsXHJcbiAgICAgICAgcHVibGljIHdlaWdodCA9IDEsXHJcblxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAnbGluZScpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoaG9zdDogU1ZHR3JhcGhpY3NFbGVtZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3gxJywgYCR7dGhpcy54fWApO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3kxJywgYCR7dGhpcy55fWApO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3gyJywgYCR7dGhpcy54Mn1gKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd5MicsIGAke3RoaXMueTJ9YCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5zdHJva2UpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGAke3RoaXMud2VpZ2h0fWApO1xyXG5cclxuICAgICAgICBob3N0LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbn1cclxuIiwiXHJcbmV4cG9ydCBlbnVtIFByaW1pdGl2ZXNUeXBlcyB7XHJcbiAgICBMSU5FID0gJ2xpbmUnLFxyXG4gICAgRE9UID0gJ2RvdCcsXHJcbiAgICBDSVJDTEUgPSAnY2lyY2xlJyxcclxuICAgIFJFQ1RBTkdMRSA9ICdyZWN0YW5nbGUnLFxyXG4gICAgR1JPVVAgPSAnZ3JvdXAnLFxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByaW1pdGl2ZSB7XHJcbiAgICByZWFkb25seSB0eXBlOiBQcmltaXRpdmVzVHlwZXM7XHJcbiAgICBlbGVtZW50OiBTVkdHcmFwaGljc0VsZW1lbnQ7XHJcblxyXG4gICAgcmVuZGVyKGhvc3Q6IFNWR0dyYXBoaWNzRWxlbWVudCk6IHZvaWQ7XHJcblxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBTVkdfTkFNRVNQQUNFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElQcmltaXRpdmUsIFByaW1pdGl2ZXNUeXBlcyB9IGZyb20gXCIuL3ByaW1pdGl2ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBpbXBsZW1lbnRzIElQcmltaXRpdmUge1xyXG5cclxuICAgIHR5cGUgPSBQcmltaXRpdmVzVHlwZXMuUkVDVEFOR0xFO1xyXG4gICAgZWxlbWVudDogU1ZHUmVjdEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHg6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3Ryb2tlID0gJyMwMDAnLFxyXG4gICAgICAgIHB1YmxpYyBmaWxsID0gJycsXHJcbiAgICAgICAgcHVibGljIHdlaWdodCA9IDEsXHJcblxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAncmVjdCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoaG9zdDogU1ZHR3JhcGhpY3NFbGVtZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3gnLCBgJHt0aGlzLnh9YCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgneScsIGAke3RoaXMueX1gKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3RoaXMud2lkdGh9YCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7dGhpcy5oZWlnaHR9YCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5zdHJva2UpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmZpbGwgfHwgJ3RyYW5zcGFyZW50Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgYCR7dGhpcy53ZWlnaHR9YCk7XHJcblxyXG4gICAgICAgIGhvc3QuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vY2FkL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==