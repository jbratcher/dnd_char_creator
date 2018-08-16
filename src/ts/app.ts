// Help bootstrap change active class of menu item

// todo implement without jquery

$( '#charTabs a' ).on( 'click', function () {
	$( '#charTabs' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
