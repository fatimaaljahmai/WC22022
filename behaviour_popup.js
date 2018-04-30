$( ".popup" ).click( function () {
	$( this ).fadeOut();
});

function popup(n) {
	let current = $( "#popup" + n );
	current.show();
	
	let children = current.children();
	children.hide().fadeIn(500);
}