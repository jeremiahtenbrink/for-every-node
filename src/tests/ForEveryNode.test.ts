import { callForEveryNode } from "../ForEveryNode";

describe( 'tests the for ever node function', () => {
  it( 'should call the callback for ever node in the dom', () => {
    
    // create dom elements
    const div = document.createElement( 'div' )
    div.appendChild( document.createElement( 'p' ) )
    div.appendChild( document.createElement( 'h1' ) )
    const div2 = document.createElement( 'div' )
    div2.appendChild( document.createElement( 'p' ) )
    div2.appendChild( document.createElement( 'h2' ) )
    div.appendChild( div2 );
    
    // number of times the callback has been called
    let count = 0;
    
    // Instances in the order they should be called in
    let instances = [ HTMLDivElement, HTMLParagraphElement, HTMLHeadingElement,
      HTMLDivElement, HTMLParagraphElement, HTMLHeadingElement ]
    
    //call back function for the callForEveryNode function to call.
    function cb( el: HTMLElement | ChildNode ): void {
      
      //increment callback counter
      count++;
      
      // check to ensure element is of the correct instance
      expect( el ).toBeInstanceOf( instances.shift() )
    }
    
    // call function
    callForEveryNode( div, cb )
    
    // check to ensure the callback was called the correct number of elements
    expect( count ).toBe( 6 )
  } )
} )
