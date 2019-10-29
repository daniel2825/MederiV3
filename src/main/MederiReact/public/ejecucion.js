
(function() {

	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.dropdown-trigger');
		var instances = M.Dropdown.init(elems, options);
	  });
	
	  // Or with jQuery
	
	  $('.dropdown-trigger').dropdown();

	  var instance = M.Dropdown.getInstance(elem);
	  instance.open();
		
				[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
					new SelectFx(el);
				} );
			})();
