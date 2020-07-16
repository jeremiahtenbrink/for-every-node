"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callForEveryNode = void 0;
var queue_1 = require("@jeremiah_tenbrink/queue");
/**
 * ## callForEveryNode
 *
 * Calls the callback function for every child node in the element.
 * Implements Queue not recursive function calls.
 *
 * @param {HTMLElement} el
 * @param {(el: HTMLElement | ChildNode ) => void} cb
 */
function callForEveryNode(el, cb) {
    var queue = new queue_1.Queue();
    queue.enqueue(el);
    while (!queue.isEmpty()) {
        var currentEl = queue.dequeue();
        cb(currentEl);
        if (currentEl.hasChildNodes()) {
            currentEl.childNodes.forEach(function (child) {
                queue.enqueue(child);
            });
        }
    }
}
exports.callForEveryNode = callForEveryNode;
//# sourceMappingURL=ForEveryNode.js.map