/**
 *  @type {function} callForEveryNode
 *
 * Calls the callback function for every child node in the element.
 * Implements Queue not recursive function calls.
 *
 * @param {HTMLElement} el
 * @param {(el: HTMLElement | ChildNode ) => void} cb
 */
export declare function callForEveryNode(el: HTMLElement, cb: (el: (HTMLElement | ChildNode)) => void): void;
