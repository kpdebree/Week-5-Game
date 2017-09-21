//Declare Variables for game
var button_options = $(".button_options");
var counter_question = 0;
var counter_correct = 0;
var counter_incorrect = 0;
var html_holder = null;
var questions = [1,2,3,4,5,6,7,8];
var question_options = [
	['1','2','3','4'],
	['5','6','7','8'],
	['9','10','11','12'],
	['1','2','3','4'],
	['1','2','3','4'],
	['1','2','3','4'],
	['1','2','3','4'],
	['1','2','3','4']
	];

var question_answers = [
	'1',
	'5',
	'9',
	'1',
	'1',
	'1',
	'1',
	'1'
	]



//Initialize games
function DisplayButtons() {
	$("#first-option").html(question_options[counter_question][0]);
	$("#second-option").html(question_options[counter_question][1]);
	$("#third-option").html(question_options[counter_question][2]);
	$("#fourth-option").html(question_options[counter_question][3]);
}

function CheckAnswer() {
	console.log(question_answers[counter_question])
	if ($(this).html() === question_answers[counter_question]) {
		counter_correct++;
		alert("Correct Answer")
	} else {
		counter_incorrect++;
		alert("Incorrect Answer " + counter_incorrect)
	}

	counter_question++;
	DisplayButtons();
}

//Start Screen
$("#start-button").click(function () {
	$("#start-screen").hide();
	$("#game-canvas").show();
	DisplayButtons();
})

$(".button-options").click(function () {
	CheckAnswer(this);
})