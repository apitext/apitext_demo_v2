'use strict';
var uri = "http://chrissumption.com/sandbox/sample_tei_project/api/v1/";

/**
 * Displays the XML view of the provided URI endpoint when the page 
 * finishes loading.
 */
$(document).ready(function(){
	$.get(uri + "xml", function(data){
		$("#response").html("<pre id='response_cont'></pre>");
		$("#response_cont").text(data);
	});
	
	/**
	 * Hides the navigation menu after a selection has been made.
	 */
	$(document).on('click',function(){
		$('.collapse').collapse('hide');
	})

	/**
	 * Changes the active status of the newly selected navigation link.
	 */
	$(".nav a").on("click", function(){
		 $(".nav").find(".active").removeClass("active");
		 $(this).parent().addClass("active");
	});

	/**
	 * Displays the "XML" view of the provided URI endpoint.
	 * then updates the display of the of the response url.
	 */
	$("#xml").on("click", function(){
		$.get(uri + "xml", function(data){
			$("#endpoint").html("xml");
			$("#slash").html("");
			$("#child").html("");
			$("#response").html("<pre id='response_cont'></pre>");
			$("#response_cont").text(data);
		});
	});

	/**
	 * Displays the "resources" view of the provided URI endpoint,
	 * then updates the display of the of the response url.
	 */
	$("#resources").on("click", function(){
		$.getJSON(uri + "resources", function(data){
			$("#endpoint").html("resources");
			$("#slash").html("");
			$("#child").html("");
			$("#response").html("<pre id='response_cont'></pre>");
			$("#response_cont").text(JSON.stringify(data, null, 2));
		});
	});

	/**
	 * Displays the "text" view of the provided URI endpoint,
	 * then updates the display of the of the response url.
	 */
	$("#text").on("click", function(){
		$.get(uri + "text", function(data){
			$("#endpoint").html("text");
			$("#slash").html("");
			$("#child").html("");
			$("#response").text(data);
		});
	});

	/**
	 * Displays the "markup" view of the provided URI endpoint,
	 * then updates the display of the of the response url.
	 */
	$("#markup").on("click", function(){
		$.get(uri + "markup", function(data){
			$("#endpoint").html("markup");
			$("#slash").html("");
			$("#child").html("");
			$("#response").html(data);
		});
	});

	/**
	 * Displays the "elements" view of the provided URI endpoint,
	 * then updates the display of the of the response url.
	 */
	$("#elements").on("click", function(){
		$.getJSON(uri + "elements", function(data){
			$("#endpoint").html("elements");
			$("#slash").html("");
			$("#child").html("");
			$("#response").html("<pre id='response_cont'></pre>");
			$("#response_cont").text(JSON.stringify(data, null, 2));
		});
	});

	/**
	 * Displays the "elements/persName" view of the provided URI endpoint,
	 * then updates the display of the of the response url.
	 */
	$("#persName").on("click", function(){
		$.getJSON(uri + "elements/persName", function(data){
			$("#endpoint").html("elements");
			$("#slash").html("/");
			$("#child").html("persName");
			$("#response").html("<pre id='response_cont'></pre>");
			$("#response_cont").text(JSON.stringify(data, null, 2));
		});
	});

	/**
	 * Displays the "elements/placeName" view of the provided URI endpoint,
	 * then updates the display of the of the response url.
	 */
	$("#placeName").on("click", function(){
		$.getJSON(uri + "elements/placeName", function(data){
			$("#endpoint").html("elements");
			$("#slash").html("/");
			$("#child").html("placeName");
			$("#response").html("<pre id='response_cont'></pre>");
			$("#response_cont").text(JSON.stringify(data, null, 2));
		});
	});
});