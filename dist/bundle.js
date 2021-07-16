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
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/constants */ "./cad/models/constants.ts");
/* harmony import */ var _models_dot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/dot */ "./cad/models/dot.ts");
/* harmony import */ var _models_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/group */ "./cad/models/group.ts");
/* harmony import */ var _models_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/line */ "./cad/models/line.ts");
/* harmony import */ var _models_rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/rectangle */ "./cad/models/rectangle.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
    constructor(host) {
        this.primitives = [];
        this._element = document.createElementNS(_models_constants__WEBPACK_IMPORTED_MODULE_0__.SVG_NAMESPACE, 'svg');
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
        return new _models_group__WEBPACK_IMPORTED_MODULE_2__.Group(primitives);
    }
    static createLine(x, y, x2, y2, stroke, weight) {
        return new _models_line__WEBPACK_IMPORTED_MODULE_3__.Line(x, y, x2, y2, stroke, weight);
    }
    static createDot(x, y, stroke) {
        return new _models_dot__WEBPACK_IMPORTED_MODULE_1__.Dot(x, y, stroke);
    }
    static createRectangle(x, y, width, height, stroke, fill) {
        return new _models_rectangle__WEBPACK_IMPORTED_MODULE_4__.Rectangle(x, y, width, height, stroke, fill);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9jcm9sbC1jYWQudHMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvLi9jYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvLi9jYWQvbW9kZWxzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9tb2RlbHMvZG90LnRzIiwid2VicGFjazovL0Nyb2xsQ2FkLy4vY2FkL21vZGVscy9ncm91cC50cyIsIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9tb2RlbHMvbGluZS50cyIsIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9tb2RlbHMvcHJpbWl0aXZlLnRzIiwid2VicGFjazovL0Nyb2xsQ2FkLy4vY2FkL21vZGVscy9yZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0Nyb2xsQ2FkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Dcm9sbENhZC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDaEI7QUFDSTtBQUNGO0FBRVU7QUFFL0MsaUVBQWU7SUFLWCxZQUNJLElBQWlCO1FBSnJCLGVBQVUsR0FBaUIsRUFBRSxDQUFDO1FBUTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0REFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7UUFFaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFcEMsQ0FBQztJQUVELEdBQUcsQ0FBQyxVQUFxQztRQUVyQyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFMUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUN4QyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUV0RCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUF5QjtRQUV4QyxPQUFPLElBQUksZ0RBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxD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LFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLENBQUM7Q0FFSjs7Ozs7OztVQ3RDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFNWR19OQU1FU1BBQ0UgfSBmcm9tIFwiLi9tb2RlbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IERvdCB9IGZyb20gXCIuL21vZGVscy9kb3RcIjtcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi9tb2RlbHMvZ3JvdXBcIjtcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gXCIuL21vZGVscy9saW5lXCI7XHJcbmltcG9ydCB7IElQcmltaXRpdmUgfSBmcm9tIFwiLi9tb2RlbHMvcHJpbWl0aXZlXCI7XHJcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gXCIuL21vZGVscy9yZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgICBwcmltaXRpdmVzOiBJUHJpbWl0aXZlW10gPSBbXTtcclxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IFNWR1NWR0VsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaG9zdDogSFRNTEVsZW1lbnQsXHJcbiAgICBcclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0UsICdzdmcnKTtcclxuICAgICAgICBcclxuICAgICAgICBob3N0LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICBjb25zdCByZWN0ID0gaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7cmVjdC53aWR0aH0gJHtyZWN0LmhlaWdodH1gKTtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnRvcCA9IGAwYDtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmxlZnQgPSBgMGA7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3JlY3Qud2lkdGh9cHhgO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7cmVjdC5oZWlnaHR9cHhgO1xyXG5cclxuICAgICAgICBob3N0LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGQocHJpbWl0aXZlczogSVByaW1pdGl2ZSB8IElQcmltaXRpdmVbXSk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBfcHJpbWl0aXZlcyA9IEFycmF5LmlzQXJyYXkocHJpbWl0aXZlcykgPyBwcmltaXRpdmVzIDogW3ByaW1pdGl2ZXNdO1xyXG5cclxuICAgICAgICB0aGlzLnByaW1pdGl2ZXMudW5zaGlmdCguLi5fcHJpbWl0aXZlcyk7XHJcbiAgICAgICAgX3ByaW1pdGl2ZXMuZm9yRWFjaChwID0+IHAucmVuZGVyKHRoaXMuX2VsZW1lbnQpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUdyb3VwKHByaW1pdGl2ZXM/OiBJUHJpbWl0aXZlW10pOiBHcm91cCB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAocHJpbWl0aXZlcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVMaW5lKHg6IG51bWJlciwgeTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyLCBzdHJva2U/OiBzdHJpbmcsIHdlaWdodD86IG51bWJlcik6IExpbmUge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IExpbmUoeCwgeSwgeDIsIHkyLCBzdHJva2UsIHdlaWdodCk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgY3JlYXRlRG90KHg6IG51bWJlciwgeTogbnVtYmVyLCBzdHJva2U/OiBzdHJpbmcpOiBEb3Qge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IERvdCh4LCB5LCBzdHJva2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlUmVjdGFuZ2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc3Ryb2tlPzogc3RyaW5nLCBmaWxsPzogc3RyaW5nKTogUmVjdGFuZ2xlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3Ryb2tlLCBmaWxsKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxyXG5jb25zdCBDcm9sbENhZCA9IHJlcXVpcmUoXCIuL2Nyb2xsLWNhZFwiKS5kZWZhdWx0O1xyXG5tb2R1bGUuZXhwb3J0cyA9IENyb2xsQ2FkO1xyXG4iLCJcclxuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbiIsIlxyXG5pbXBvcnQgeyBTVkdfTkFNRVNQQUNFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElQcmltaXRpdmUsIFByaW1pdGl2ZXNUeXBlcyB9IGZyb20gXCIuL3ByaW1pdGl2ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvdCBpbXBsZW1lbnRzIElQcmltaXRpdmUge1xyXG5cclxuICAgIHJlYWRvbmx5IHR5cGU6IFByaW1pdGl2ZXNUeXBlcy5ET1Q7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9yYWRpdXMgPSAxO1xyXG4gICAgZWxlbWVudDogU1ZHQ2lyY2xlRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgeDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB5OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHN0cm9rZSA9ICcjMDAwJyxcclxuXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0UsICdjaXJjbGUnKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoaG9zdDogU1ZHR3JhcGhpY3NFbGVtZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N4JywgYCR7dGhpcy54fWApO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N5JywgYCR7dGhpcy55fWApO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3InLCBgJHt0aGlzLl9yYWRpdXN9YCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5zdHJva2UpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLnN0cm9rZSk7XHJcblxyXG4gICAgICAgIGhvc3QuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgU1ZHX05BTUVTUEFDRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJUHJpbWl0aXZlLCBQcmltaXRpdmVzVHlwZXMgfSBmcm9tIFwiLi9wcmltaXRpdmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcm91cCBpbXBsZW1lbnRzIElQcmltaXRpdmUge1xyXG5cclxuICAgIHJlYWRvbmx5IHR5cGU6IFByaW1pdGl2ZXNUeXBlcy5HUk9VUDtcclxuICAgIGVsZW1lbnQ6IFNWR0dFbGVtZW50O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcHJpbWl0aXZlczogSVByaW1pdGl2ZVtdID0gW10sXHJcblxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAnZycpO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKGhvc3Q6IFNWR0dyYXBoaWNzRWxlbWVudCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJpbWl0aXZlcy5mb3JFYWNoKHAgPT4gcC5yZW5kZXIodGhpcy5lbGVtZW50KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaG9zdC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHByaW1pdGl2ZXM6IElQcmltaXRpdmUgfCBJUHJpbWl0aXZlW10pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgX3ByaW1pdGl2ZXMgPSBBcnJheS5pc0FycmF5KHByaW1pdGl2ZXMpID8gcHJpbWl0aXZlcyA6IFtwcmltaXRpdmVzXTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmltaXRpdmVzLnVuc2hpZnQoLi4uX3ByaW1pdGl2ZXMpO1xyXG4gICAgICAgIF9wcmltaXRpdmVzLmZvckVhY2gocCA9PiBwLnJlbmRlcih0aGlzLmVsZW1lbnQpKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBTVkdfTkFNRVNQQUNFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElQcmltaXRpdmUsIFByaW1pdGl2ZXNUeXBlcyB9IGZyb20gXCIuL3ByaW1pdGl2ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpbmUgaW1wbGVtZW50cyBJUHJpbWl0aXZlIHtcclxuXHJcbiAgICB0eXBlID0gUHJpbWl0aXZlc1R5cGVzLkxJTkU7XHJcbiAgICBlbGVtZW50OiBTVkdMaW5lRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgeDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB5OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHgyOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHkyOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHN0cm9rZSA9ICcjMDAwJyxcclxuICAgICAgICBwdWJsaWMgd2VpZ2h0ID0gMSxcclxuXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0UsICdsaW5lJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihob3N0OiBTVkdHcmFwaGljc0VsZW1lbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgneDEnLCBgJHt0aGlzLnh9YCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgneTEnLCBgJHt0aGlzLnl9YCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgneDInLCBgJHt0aGlzLngyfWApO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3kyJywgYCR7dGhpcy55Mn1gKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGlzLnN0cm9rZSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgYCR7dGhpcy53ZWlnaHR9YCk7XHJcblxyXG4gICAgICAgIGhvc3QuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuZXhwb3J0IGVudW0gUHJpbWl0aXZlc1R5cGVzIHtcclxuICAgIExJTkUgPSAnbGluZScsXHJcbiAgICBET1QgPSAnZG90JyxcclxuICAgIFJFQ1RBTkdMRSA9ICdyZWN0YW5nbGUnLFxyXG4gICAgR1JPVVAgPSAnZ3JvdXAnLFxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByaW1pdGl2ZSB7XHJcbiAgICByZWFkb25seSB0eXBlOiBQcmltaXRpdmVzVHlwZXM7XHJcbiAgICBlbGVtZW50OiBTVkdHcmFwaGljc0VsZW1lbnQ7XHJcblxyXG4gICAgcmVuZGVyKGhvc3Q6IFNWR0dyYXBoaWNzRWxlbWVudCk6IHZvaWQ7XHJcblxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBTVkdfTkFNRVNQQUNFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElQcmltaXRpdmUsIFByaW1pdGl2ZXNUeXBlcyB9IGZyb20gXCIuL3ByaW1pdGl2ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBpbXBsZW1lbnRzIElQcmltaXRpdmUge1xyXG5cclxuICAgIHR5cGUgPSBQcmltaXRpdmVzVHlwZXMuUkVDVEFOR0xFO1xyXG4gICAgZWxlbWVudDogU1ZHUmVjdEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHg6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3Ryb2tlID0gJyMwMDAnLFxyXG4gICAgICAgIHB1YmxpYyBmaWxsID0gJycsXHJcbiAgICAgICAgcHVibGljIHdlaWdodCA9IDEsXHJcblxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAncmVjdCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoaG9zdDogU1ZHR3JhcGhpY3NFbGVtZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3gnLCBgJHt0aGlzLnh9YCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgneScsIGAke3RoaXMueX1gKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3RoaXMud2lkdGh9YCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7dGhpcy5oZWlnaHR9YCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5zdHJva2UpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmZpbGwgfHwgJ3RyYW5zcGFyZW50Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgYCR7dGhpcy53ZWlnaHR9YCk7XHJcblxyXG4gICAgICAgIGhvc3QuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vY2FkL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==