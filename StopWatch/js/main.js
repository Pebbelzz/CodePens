//variable for what state the timer is in
var stateOfTimer = $("#timer").data('state');

//starts timer based on state of timer, else clause is incase
//the timer has been paused
function start(){
	if ( stateOfTimer == undefined ){
		$("#timer").timer({
			seconds: 0,
			format: "%H:%M:%S"
		});
	}
	else{
		$("#timer").timer("resume");
	}
}

//stops timer
function stop(){
	$("#timer").timer("pause");
	stateOfTimer = ($("#timer").data('state'));
}

//resumes timer from paused state
function resume(){
	$("#timer").timer("resume");
}

//resets the timer
function reset(){
	var timerReset = "00:00:00"
	$("#timer").timer("remove");
	document.getElementById("timer").innerHTML = timerReset;
}