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
    PrimitivesTypes["GROUP"] = "group";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9jcm9sbC1jYWQudHMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvLi9jYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvLi9jYWQvbW9kZWxzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9tb2RlbHMvZG90LnRzIiwid2VicGFjazovL0Nyb2xsQ2FkLy4vY2FkL21vZGVscy9ncm91cC50cyIsIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9tb2RlbHMvbGluZS50cyIsIndlYnBhY2s6Ly9Dcm9sbENhZC8uL2NhZC9tb2RlbHMvcHJpbWl0aXZlLnRzIiwid2VicGFjazovL0Nyb2xsQ2FkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Nyb2xsQ2FkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Dcm9sbENhZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0Nyb2xsQ2FkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQ3JvbGxDYWQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDaEI7QUFDSTtBQUNGO0FBR3JDLGlFQUFlO0lBS1gsWUFDSSxJQUFpQjtRQUpyQixlQUFVLEdBQWlCLEVBQUUsQ0FBQztRQVExQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsNERBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMs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WSxlQUtYO0FBTEQsV0FBWSxlQUFlO0lBQ3ZCLGdDQUFhO0lBQ2IsOEJBQVc7SUFDWCxrQ0FBZTtBQUVuQixDQUFDLEVBTFcsZUFBZSxLQUFmLGVBQWUsUUFLMUI7Ozs7Ozs7VUNORDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1ZHX05BTUVTUEFDRSB9IGZyb20gXCIuL21vZGVscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgRG90IH0gZnJvbSBcIi4vbW9kZWxzL2RvdFwiO1xyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuL21vZGVscy9ncm91cFwiO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcIi4vbW9kZWxzL2xpbmVcIjtcclxuaW1wb3J0IHsgSVByaW1pdGl2ZSB9IGZyb20gXCIuL21vZGVscy9wcmltaXRpdmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgICBwcmltaXRpdmVzOiBJUHJpbWl0aXZlW10gPSBbXTtcclxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IFNWR1NWR0VsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaG9zdDogSFRNTEVsZW1lbnQsXHJcbiAgICBcclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0UsICdzdmcnKTtcclxuICAgICAgICBcclxuICAgICAgICBob3N0LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICBjb25zdCByZWN0ID0gaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7cmVjdC53aWR0aH0gJHtyZWN0LmhlaWdodH1gKTtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnRvcCA9IGAwYDtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmxlZnQgPSBgMGA7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3JlY3Qud2lkdGh9cHhgO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7cmVjdC5oZWlnaHR9cHhgO1xyXG5cclxuICAgICAgICBob3N0LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGQocHJpbWl0aXZlczogSVByaW1pdGl2ZSB8IElQcmltaXRpdmVbXSk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBfcHJpbWl0aXZlcyA9IEFycmF5LmlzQXJyYXkocHJpbWl0aXZlcykgPyBwcmltaXRpdmVzIDogW3ByaW1pdGl2ZXNdO1xyXG5cclxuICAgICAgICB0aGlzLnByaW1pdGl2ZXMudW5zaGlmdCguLi5fcHJpbWl0aXZlcyk7XHJcbiAgICAgICAgX3ByaW1pdGl2ZXMuZm9yRWFjaChwID0+IHAucmVuZGVyKHRoaXMuX2VsZW1lbnQpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUdyb3VwKHByaW1pdGl2ZXM/OiBJUHJpbWl0aXZlW10pOiBHcm91cCB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAocHJpbWl0aXZlcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVMaW5lKHg6IG51bWJlciwgeTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyLCBzdHJva2U/OiBzdHJpbmcsIHdlaWdodD86IG51bWJlcik6IExpbmUge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IExpbmUoeCwgeSwgeDIsIHkyLCBzdHJva2UsIHdlaWdodCk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgY3JlYXRlRG90KHg6IG51bWJlciwgeTogbnVtYmVyLCBzdHJva2U/OiBzdHJpbmcpOiBEb3Qge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IERvdCh4LCB5LCBzdHJva2UpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwiXHJcbmNvbnN0IENyb2xsQ2FkID0gcmVxdWlyZShcIi4vY3JvbGwtY2FkXCIpLmRlZmF1bHRcclxubW9kdWxlLmV4cG9ydHMgPSBDcm9sbENhZFxyXG4iLCJleHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuIiwiaW1wb3J0IHsgU1ZHX05BTUVTUEFDRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJUHJpbWl0aXZlLCBQcmltaXRpdmVzVHlwZXMgfSBmcm9tIFwiLi9wcmltaXRpdmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb3QgaW1wbGVtZW50cyBJUHJpbWl0aXZlIHtcclxuXHJcbiAgICByZWFkb25seSB0eXBlOiBQcmltaXRpdmVzVHlwZXMuRE9UO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcmFkaXVzID0gMTtcclxuICAgIGVsZW1lbnQ6IFNWR0NpcmNsZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHg6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzdHJva2UgPSAnIzAwMCcsXHJcblxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAnY2lyY2xlJylcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGhvc3Q6IFNWR0dyYXBoaWNzRWxlbWVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeCcsIGAke3RoaXMueH1gKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeScsIGAke3RoaXMueX1gKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdyJywgYCR7dGhpcy5fcmFkaXVzfWApO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuc3Ryb2tlKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5zdHJva2UpO1xyXG5cclxuICAgICAgICBob3N0LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU1ZHX05BTUVTUEFDRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJUHJpbWl0aXZlLCBQcmltaXRpdmVzVHlwZXMgfSBmcm9tIFwiLi9wcmltaXRpdmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcm91cCBpbXBsZW1lbnRzIElQcmltaXRpdmUge1xyXG5cclxuICAgIHJlYWRvbmx5IHR5cGU6IFByaW1pdGl2ZXNUeXBlcy5HUk9VUDtcclxuICAgIGVsZW1lbnQ6IFNWR0dFbGVtZW50O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcHJpbWl0aXZlczogSVByaW1pdGl2ZVtdID0gW10sXHJcblxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAnZycpO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKGhvc3Q6IFNWR0dyYXBoaWNzRWxlbWVudCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJpbWl0aXZlcy5mb3JFYWNoKHAgPT4gcC5yZW5kZXIodGhpcy5lbGVtZW50KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaG9zdC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHByaW1pdGl2ZXM6IElQcmltaXRpdmUgfCBJUHJpbWl0aXZlW10pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgX3ByaW1pdGl2ZXMgPSBBcnJheS5pc0FycmF5KHByaW1pdGl2ZXMpID8gcHJpbWl0aXZlcyA6IFtwcmltaXRpdmVzXTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmltaXRpdmVzLnVuc2hpZnQoLi4uX3ByaW1pdGl2ZXMpO1xyXG4gICAgICAgIF9wcmltaXRpdmVzLmZvckVhY2gocCA9PiBwLnJlbmRlcih0aGlzLmVsZW1lbnQpKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNWR19OQU1FU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgSVByaW1pdGl2ZSwgUHJpbWl0aXZlc1R5cGVzIH0gZnJvbSBcIi4vcHJpbWl0aXZlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZSBpbXBsZW1lbnRzIElQcmltaXRpdmUge1xyXG5cclxuICAgIHR5cGUgPSBQcmltaXRpdmVzVHlwZXMuTElORTtcclxuICAgIGVsZW1lbnQ6IFNWR0xpbmVFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB4OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHk6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgeDI6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgeTI6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3Ryb2tlID0gJyMwMDAnLFxyXG4gICAgICAgIHB1YmxpYyB3ZWlnaHQgPSAxLFxyXG5cclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRSwgJ2xpbmUnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGhvc3Q6IFNWR0dyYXBoaWNzRWxlbWVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd4MScsIGAke3RoaXMueH1gKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd5MScsIGAke3RoaXMueX1gKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd4MicsIGAke3RoaXMueDJ9YCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgneTInLCBgJHt0aGlzLnkyfWApO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuc3Ryb2tlKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCBgJHt0aGlzLndlaWdodH1gKTtcclxuXHJcbiAgICAgICAgaG9zdC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxyXG5leHBvcnQgZW51bSBQcmltaXRpdmVzVHlwZXMge1xyXG4gICAgTElORSA9ICdsaW5lJyxcclxuICAgIERPVCA9ICdkb3QnLFxyXG4gICAgR1JPVVAgPSAnZ3JvdXAnLFxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByaW1pdGl2ZSB7XHJcbiAgICByZWFkb25seSB0eXBlOiBQcmltaXRpdmVzVHlwZXM7XHJcbiAgICBlbGVtZW50OiBTVkdHcmFwaGljc0VsZW1lbnQ7XHJcblxyXG4gICAgcmVuZGVyKGhvc3Q6IFNWR0dyYXBoaWNzRWxlbWVudCk6IHZvaWQ7XHJcblxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9jYWQvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9