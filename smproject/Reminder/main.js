$(document).ready(function(){

var step=0;
$('form').submit(function(e){
	
if ($('#eventName').val() != null) {
	e.preventDefault();
	step++;

var tabRow = $('<tr>', {class: 'ne'+step}).appendTo('#tableBody');
var tabName = $('<td>', {text: $('#eventName').val()}).appendTo('tr.ne'+step);
var tabDate = $('<td>', {text: $('#eventDate').val()}).appendTo('tr.ne'+step);
var tabTime = $('<td>', {text: $('#eventTime').val()}).appendTo('tr.ne'+step); 
var delTd = $('<td>', {class: 'remove'+step}).appendTo('tr.ne'+step); 
var delButton = $('<button>', {class:'btn btn-danger btn-sm', text: 'x'}).appendTo('td.remove'+step);


$('button.btn.btn-danger.btn-sm').click(function(e){
e.preventDefault();
$(this).closest('tr').remove();



});
}

});




});


