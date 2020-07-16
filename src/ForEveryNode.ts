import {Queue} from "@jeremiah_tenbrink/queue";

/**
 * ## callForEveryNode
 *
 * Calls the callback function for every child node in the element.
 * Implements Queue not recursive function calls.
 *
 * @param {HTMLElement} el
 * @param {(el: HTMLElement | ChildNode ) => void} cb
 */
export function callForEveryNode( el: HTMLElement,
                                  cb: ( el: HTMLElement | ChildNode ) => {} ): void {
  
  const queue = new Queue();
  queue.enqueue( el );
  
  while ( !queue.isEmpty() ) {
    const currentEl = queue.dequeue();
    cb( currentEl );
    if ( currentEl.hasChildNodes() ) {
      currentEl.childNodes.forEach( ( child: ChildNode ) => {
        queue.enqueue( child )
      } )
    }
  }
  
}
