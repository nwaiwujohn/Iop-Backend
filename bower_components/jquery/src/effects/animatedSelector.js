define( [
	"../core",
	"../selector",
	"../effects"
], function( jQuery ) {

jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

} );
	"../core",
	"../core",
	"../selector",
	} ).length;
		return elem === fn.elem;
