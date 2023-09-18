/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskList)
/* harmony export */ });
class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  getAllTasks() {
    return this.tasks;
  }
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, dueDate = 'no date') {
    this.title = title;
    this.dueDate = dueDate;
  }
}


/***/ })
/******/ 	]);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_TaskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
// DOM.js



const taskList = new _modules_TaskList__WEBPACK_IMPORTED_MODULE_0__["default"]();

function renderTasks() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Efface le contenu précédent

  const tasks = taskList.getAllTasks();
  tasks.forEach((task) => {
    const taskElement = document.createElement('div');
    console.log(task);
    taskElement.innerHTML = `
            <h3 class='task-list'>${task.title}</h3>
        `;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => {
      taskList.removeTask(task);
      renderTasks();
    });

    taskElement.appendChild(deleteButton);
    app.appendChild(taskElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const addTaskForm = document.createElement('form');
  const titleInput = document.createElement('input');
  const addButton = document.createElement('button');

  titleInput.placeholder = 'Titre de la tâche';
  addButton.textContent = 'Ajouter';

  addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value;
    if (title.trim() !== '') {
      const newTask = new _modules_Task__WEBPACK_IMPORTED_MODULE_1__["default"](title);
      taskList.addTask(newTask);
      renderTasks();
      titleInput.value = '';
    }
  });

  addTaskForm.appendChild(titleInput);
  addTaskForm.appendChild(addButton);

  document.body.appendChild(addTaskForm);
  renderTasks();
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const task1 = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Bonjour, moi');

console.log(task1.title);

})();

/******/ })()
;