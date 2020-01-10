// 01.確認page的id名稱
// 02.確認panel的id名稱

$( document ).on( "pagecreate", "#index", function() {		// 01.
  $( document ).on( "swipeleft swiperight", "#index", function( e ) {		// 01.
    if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
      if ( e.type === "swipeleft" ) {
        $( "#index-right-panel" ).panel( "open" );		// 02.
      } 
      else if ( e.type === "swiperight" ) {
        $( "#index-left-panel" ).panel( "open" );			// 02.
      }
    }
  });
});

$( document ).on( "pagecreate", "#product", function() {		// 01.
    $( document ).on( "swipeleft swiperight", "#product", function( e ) {		// 01.
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft" ) {
                $( "#product-right-panel" ).panel( "open" );		// 02.
            } else if ( e.type === "swiperight" ) {
                $( "#product-left-panel" ).panel( "open" );			// 02.
            }
        }
    });
});