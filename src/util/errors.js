//>>excludeStart("exclude", pragmas.exclude);
define([ "shoestring" ], function(){
//>>excludeEnd("exclude");

	shoestring.enUS = {
		errors: {
			"prefix": "Shoestring does not support",

			"click": "the click method. Try using trigger( 'click' ) instead.",
			"css-get" : "getting computed attributes from the DOM.",
			"event-namespaces": "event namespacing, especially on .unbind( '.myNamespace' ). An event namespace is treated as part of the event name.",
			"has-class" : "the hasClass method. Try using .is( '.klassname' ) instead.",
			"live-delegate" : "the .live or .delegate methods. Use .bind or .on instead.",
			"map": "the map method. Try using .each to make a new object.",
			"next-selector" : "passing selectors into .next, try .next().filter( selector )",
			"on-delegate" : "the .on method with three or more arguments. Using .on( eventName, callback ) instead.",
			"outer-width": "the outerWidth method. Try combining .width() with .css for padding-left, padding-right, and the border of the left and right side.",
			"prev-selector" : "passing selectors into .prev, try .prev().filter( selector )",
			"show-hide": "the show or hide methods. Use display: block (or whatever you'd like it to be) or none instead",
			"text-setter": "setting text via the .text method."
		}
	};

	shoestring.error = function( id ) {
		var errors = shoestring.enUS.errors;
		throw new Error( errors.prefix + " " + errors[id] );
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
