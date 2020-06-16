alert("OPEN DEVELOPER TOOLS FOR MORE")
console.log("Hi there! Glad you found me!");
console.log("The rest of the game will be played in the console. Do not close me.")
console.log("This is a best of 5")

let playerCount = 0;
let computerCount = 0;
let playerSelection;
let computerSelection;

function randomNumber(min,max) {
	return Math.ceil((Math.random()*(max - min)));
}

function computerPlay() {
	const choices = ["","rock","paper","scissors"];
	let random = randomNumber(1,4);
	return choices[random];
}

function playRound(playerSelection, computerSelection) {
	//code here
	console.log();
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	if(playerSelection === "rock" && computerSelection === "scissors") {
		//playerCount++;
		return "You win! Rock beats scissors!";
	} else if(playerSelection === "paper" && computerSelection === "rock") {
		//playerCount++;
		return "You win! Paper beats Rock!";
	} else if(playerSelection === "scissors" && computerSelection === "paper") {
		//playerCount++;
		return "You win! Scissors beats Paper!";
	} else if(playerSelection === computerSelection) {
		return "It's a tie!"
	} else {
		//computerCount++;
		return "You Lose! "+computerSelection+ " beats "+playerSelection;
	}

}

function game() {
	let winner = playRound(playerSelection,computerSelection);
	console.log("---SCORE---");
	if(winner.includes('Lose')) {
		computerCount++;
		console.log("computer score:"+computerCount+" "+"Your score:"+playerCount);
	} else if(winner.includes("win")) {
		playerCount++;
		console.log("computer score:"+computerCount+" "+"Your score:"+playerCount);
	} else {
		console.log("computer score:"+computerCount+" "+"Your score:"+playerCount);
	}
}

for(let i = 1;i<=5;i++) {
	if(computerCount === 3 || playerCount === 3) {
		break;
	} else {
		playerSelection = prompt("Enter your choice: ");
		computerSelection = computerPlay();
		console.log("Your selection: ",playerSelection);
		console.log("Computer selection: ",computerSelection);
		console.log(playRound(playerSelection,computerSelection));
		game();
	}
	
}

console.log("The winner is", playerCount > computerCount ? "You!" : "Computer");
