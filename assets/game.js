var question = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var TimerID;
var number;
var current_question;
var selected = null;
var question_options = [
	{
		question: "Q1: What is the capital of the Lannisters?",
		image: "assets/images/lannisters.jpg",
		choices: [
					"Winterfell",
					"King's Landing",
					"Lannisport",
					"Casterly Rock",
					],
		correct: "Casterly Rock",
	}, {
		question: "Q2: What are the House Words of House Tyrell?",
		image: "assets/images/housetyrell.png",
		choices: [
					"Hear Me Roar",
					"Growing Strong",
					"Ours is the Fury",
					"Unbowed, Unbent, Unbroken",
					],
		correct: "Growing Strong",
	}, {
		question: "Q3: Who built The Wall?",
		image: "assets/images/thewall.jpg",
		choices: [
					"The Others",
					"The Children of the Forest",
					"Brandon the Builder",
					"The Azhor Ahai",
					],
		correct: "Brandon the Builder",
	}, {
		question: "Q4: What is the Capital of the Reach?",
		image: "assets/images/thereach.jpeg",
		choices: [
					"Highgarden",
					"Old Town",
					"The Eyrie",
					"Storm's End",
					],
		correct: "Highgarden",
	}, {
		question: "Q5: What is the Lord of Light's Name?",
		image: "assets/images/melisandre.jpg",
		choices: [
					"Azhor Ahai",
					"R'hllor",
					"The Great Other",
					"Rhoyne",
					],
		correct: "R'hllor",
	}, {
		question: "Q6: Who is Jon Snow's Real Father?",
		image: "assets/images/jonsnow.jpg",
		choices: [
					"Eddard 'Ned' Stark",
					"Viserys Targaryen",
					"Rhaegar Targaryen",
					"Aemon Targaryen",
					],
		correct: "Rhaegar Targaryen",
	}, {
		question: "Q7: What is the seat of House Bolton?",
		image: "assets/images/bolton.jpg",
		choices: [
					"Bear Island",
					"Winterfell",
					"White Harbor",
					"Dreadfort",
					],
		correct: "Dreadfort",
	}, {
		question: "Q8: What caused Robert's Rebellion?",
		image: "assets/images/robert.png",
		choices: [
					"Daenerys Marrying Khal Drogo",
					"The Tourney at Harrenhall",
					"The Battle of the Trident",
					"Rhaegar Kidapping Lyanna",
					],
		correct: "Rhaegar Kidnapping Lyanna",
	},
	];


//Initialize games
function Timer() {
	number = 30;
	TimerID = setInterval(Decrement, 1500);
}

function Decrement() {
	$("#timer").html("<h2>You have " + number + " seconds remaining</h2>")
	number--;
	if (number === 0) {
		clearInterval(TimerID);
		unanswered++;
		question++;
		DisplayButtons();
	}
}

function DisplayButtons() {
	current_question = question_options[question]
	$("#title").html(question_options[question]["question"]);
	$(".background-image img").attr("src", current_question.image)
	console.log(current_question.image)
	$("#first-option").html(question_options[question]["choices"][0]).attr('data-index', 0);
	$("#second-option").html(question_options[question]["choices"][1]).attr('data-index', 1);
	$("#third-option").html(question_options[question]["choices"][2]).attr('data-index', 2);
	$("#fourth-option").html(question_options[question]["choices"][3]).attr('data-index', 3);
	Timer();
}

function EndGame() {
	$("#game-canvas").hide();
	$("#end-screen").show();
}

function CheckAnswer(choice) {
	console.log(choice)
	console.log("First: " + question_options[question]["choices"][choice])
	console.log("Second: " + question_options[question]["correct"])
	if (question_options[question]["choices"][choice] == question_options[question]["correct"]) {
		correct++;
		alert("Correct Answer")
	} else {
		incorrect++;
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