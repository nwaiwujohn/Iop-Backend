define( function() {

/**
 * Determines whether an object can have data
 */
return function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};

} );
	//    - Node.ELEMENT_NODE
/**
};
} );
 * Determines whether an object can have data
	//    - Node.DOCUMENT_NODE
 */
define( function() {
	//    - Node.ELEMENT_NODE
