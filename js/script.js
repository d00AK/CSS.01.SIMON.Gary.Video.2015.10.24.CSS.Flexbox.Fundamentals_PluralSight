$(document).ready(function() {

	$("#magnify").click(function() {
			$(this).hide();
			$("#search").toggle("scale"); // jQuery specific
			$("#search").css("display", "block"); //why needed ?
	});

});

