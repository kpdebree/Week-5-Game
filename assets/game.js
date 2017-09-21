var question = 0;
var score = 0;
var selected = null;
var question_options = [
	{
		question: "Q1",
		image: "Image1",
		choices: [
					"Choice 1",
					"Choice 2",
					"Choice 3",
					"Choice 4",
					],
		correct: "Choice 1",
	}, {
		question: "Q2",
		image: "Image1",
		choices: [
					"Choice 1",
					"Choice 2",
					"Choice 3",
					"Choice 4",
					],
		correct: "Choice 1",
	}, {
		question: "Q3",
		image: "Image1",
		choices: [
					"Choice 1",
					"Choice 2",
					"Choice 3",
					"Choice 4",
					],
		correct: "Choice 1",
	}, {
		question: "Q4",
		image: "Image1",
		choices: [
					"Choice 1",
					"Choice 2",
					"Choice 3",
					"Choice 4",
					],
		correct: "Choice 1",
	}, {
		question: "Q5",
		image: "Image1",
		choices: [
					"Choice 1",
					"Choice 2",
					"Choice 3",
					"Choice 4",
					],
		correct: "Choice 1",
	}, {
		question: "Q6",
		image: "Image1",
		choices: [
					"Choice 1",
					"Choice 2",
					"Choice 3",
					"Choice 4",
					],
		correct: "Choice 1",
	}, {
		question: "Q7",
		image: "Image1",
		choices: [
					"Choice 1",
					"Choice 2",
					"Choice 3",
					"Choice 4",
					],
		correct: "Choice 1",
	}, {
		question: "Q8",
		image: "Image1",
		choices: [
					"Choice 1",
					"Choice 2",
					"Choice 3",
					"Choice 4",
					],
		correct: "Choice 1",
	},
	];


//Initialize games
function DisplayButtons() {
	$("#title").html(question_options[question]["question"]);
	$("#first-option").html(question_options[question]["choices"][0]).attr('data-index', 0);
	$("#second-option").html(question_options[question]["choices"][1]).attr('data-index', 1);
	$("#third-option").html(question_options[question]["choices"][2]).attr('data-index', 2);
	$("#fourth-option").html(question_options[question]["choices"][3]).attr('data-index', 3);
}

function EndGame() {
	alert("End of Game")
	alert("Score: " + score)
	question = 0;
	$("#game-canvas").hide();
	$("#start-screen").show();
}

function CheckAnswer(choice) {
	console.log(choice)
	console.log("First: " + question_options[question]["choices"][choice])
	console.log("Second: " + question_options[question]["correct"])
	if (question_options[question]["choices"][choice] == question_options[question]["correct"]) {
		score++;
		alert("Correct Answer")
	} else {

		alert("Incorrect Answer ")
	}
	if (question === 7) {

		EndGame();
	} else {
		question++;
		console.log(question)
		DisplayButtons();
	}
	
}

//Start Screen
$("#start-button").click(function () {
	$("#start-screen").hide();
	$("#game-canvas").show();
	DisplayButtons();

	console.log(question_options)
})

$(".button-options").click(function () {
	selected = $(this).attr('data-index')
	CheckAnswer(selected);
})