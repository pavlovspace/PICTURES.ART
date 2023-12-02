/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay) {
    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();

    // Opening Modal on Trigger Click
    triggers.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    // Closing Modal on Close Button Click
    close.addEventListener('click', () => {
      windows.forEach(element => {
        element.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    });

    // Closing Modal on Overlay Click
    modal.addEventListener('click', e => {
      if (e.target === modal && closeClickOverlay === true) {
        windows.forEach(element => {
          element.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      }
    });

    // Function to calculate browser scrollbar width
    function calcScroll() {
      let div = document.createElement('div');
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();
      return scrollWidth;
    }

    // Function to display a modal window after a certain time
    function showModalByTime(selector, time) {
      setTimeout(() => {
        let display = false;
        document.querySelectorAll('[data-modal]').forEach(element => {
          if (getComputedStyle(element).display !== 'none') {
            display = 'block';
          }
        });
        if (display === false) {
          let selectorPopup = document.querySelector(selector);
          selectorPopup.style.display = 'block';
          document.body.style.overflow = 'hidden';
        }
      }, time);
    }
    // showModalByTime('.popup-consultation', 60000)
  }

  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close', true);
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close', true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals.js */ "./src/js/modules/modals.js");

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modals_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map