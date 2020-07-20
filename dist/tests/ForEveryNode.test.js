"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForEveryNode_1 = require("../ForEveryNode");
describe('tests the for ever node function', function () {
    it('should call the callback for ever node in the dom', function () {
        // create dom elements
        var div = document.createElement('div');
        div.appendChild(document.createElement('p'));
        div.appendChild(document.createElement('h1'));
        var div2 = document.createElement('div');
        div2.appendChild(document.createElement('p'));
        div2.appendChild(document.createElement('h2'));
        div.appendChild(div2);
        // number of times the callback has been called
        var count = 0;
        // Instances in the order they should be called in
        var instances = [HTMLDivElement, HTMLParagraphElement, HTMLHeadingElement,
            HTMLDivElement, HTMLParagraphElement, HTMLHeadingElement];
        //call back function for the callForEveryNode function to call.
        function cb(el) {
            //increment callback counter
            count++;
            // check to ensure element is of the correct instance
            expect(el).toBeInstanceOf(instances.shift());
        }
        // call function
        ForEveryNode_1.callForEveryNode(div, cb);
        // check to ensure the callback was called the correct number of elements
        expect(count).toBe(6);
    });
});
//# sourceMappingURL=ForEveryNode.test.js.map