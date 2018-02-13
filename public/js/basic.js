jQuery(function ($) {
	// Load dialog on page load
	//$('#basic1-modal-content').modal();

	// Load dialog on click
	$('#basic-modal .basic').click(function (e) {
		$('#basic-modal-content').modal();

		return false;
	});

	$('#basic1-modal .basic1').click(function (e) {
		$('#basic1-modal-content').modal();

		return false;
	});
});
