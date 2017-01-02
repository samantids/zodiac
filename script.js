'use strict';

var SUBMIT = document.getElementById("submit"),
	YOUR_SIGN = document.getElementById("your-sign");


//info about each sign from http://www.astrology-zodiac-signs.com/

var SIGN_LIST = [{"sign": "Capricorn", "element": "Earth", "color": "Brown", "day": "Saturday", "ruler": "Saturn", "matches": ["Cancer", "Taurus", "Virgo"], "dates": ["12/22", "1/19"]},
				{"sign": "Aquarius", "element": "Air", "color": "Blue", "day": "Sunday", "ruler": "Uranus", "matches": ["Leo", "Gemini", "Libra"], "dates": ["1/20", "2/18"]},
				{"sign": "Pisces", "element": "Water", "color": "Lilac", "day": "Thursday", "ruler": "Neptune", "matches": ["Virgo", "Cancer", "Scorpio"], "dates": ["2/19", "3/20"]},
				{"sign": "Aries", "element": "Fire", "color": "Red", "day": "Tuesday", "ruler": "Mars", "matches": ["Libra", "Leo", "Sagitarius"], "dates": ["3/21", "4/19"]},
				{"sign": "Taurus", "element": "Earth", "color": "Pink", "day": "Friday", "ruler": "Venus", "matches": ["Scorpio", "Virgo", "Capricorn"], "dates": ["4/20", "5/20"]},
				{"sign": "Gemini", "element": "Air", "color": "Yellow", "day": "Wednesday", "ruler": "Mercury", "matches": ["Sagitarius", "Libra", "Aquarius"], "dates": ["5/21", "6/20"]},
				{"sign": "Cancer", "element": "Water", "color": "Orange", "day": "Monday", "ruler": "Moon", "matches": ["Capricorn", "Scorpio", "Pisces"], "dates": ["6/21", "7/22"]},
				{"sign": "Leo", "element": "Fire", "color": "Gold", "day": "Sunday", "ruler": "Sun", "matches": ["Aquarius", "Aries", "Sagitarius"], "dates": ["7/23", "8/22"]},
				{"sign": "Virgo", "element": "Earth", "color": "Beige", "day": "Wednesday", "ruler": "Mercury", "matches": ["Pisces", "Taurus", "Capricorn"], "dates": ["8/23", "9/22"]},
				{"sign": "Libra", "element": "Air", "color": "Green", "day": "Friday", "ruler": "Venus", "matches": ["Aries", "Gemini", "Aquarius"], "dates": ["9/23", "10/22"]},
				{"sign": "Scorpio", "element": "Water", "color": "Rust", "day": "Tuesday", "ruler": "Pluto", "matches": ["Taurus", "Cancer", "Pisces"], "dates": ["10/23", "11/21"]},
				{"sign": "Sagitarius", "element": "Fire", "color": "Violet", "day": "Thursday", "ruler": "Jupiter", "matches": ["Gemini", "Aries", "Leo"], "dates": ["11/22", "12/21"]}],
	SIGN_ELEMENT = "",
	SIGN_COLOR = "",
	SIGN_DAY = "",
	SIGN_RULER = "",
	SIGN_MATCHES = [],
	SIGN_DATES = [];

//assigns sign variables from the SIGN_LIST object
function signAssign(sign){
	for (var i = 0; i<SIGN_LIST.length; i++){
		if (sign == SIGN_LIST[i].sign){
			SIGN_ELEMENT = SIGN_LIST[i].element;
			SIGN_COLOR = SIGN_LIST[i].color;
			SIGN_DAY = SIGN_LIST[i].day;
			SIGN_RULER = SIGN_LIST[i].ruler;
			SIGN_MATCHES = SIGN_LIST[i].matches;
			SIGN_DATES = SIGN_LIST[i].dates;
		}

	}
}

//returns date range of match signs - to be used in the matchHover() function
function getDates(matchsign){
	for (var i = 0; i<SIGN_LIST.length; i++){
		if (matchsign == SIGN_LIST[i].sign){
			return SIGN_LIST[i].dates;
		}
	}
}


function signPick(){
	console.log("signPick initiated");
	//clear previous content from your-sign div
	YOUR_SIGN.innerHTML = "";

	//assign month and day variables
	var MONTH_SELECTED = document.getElementById("month"),	
		DAY_SELECTED = document.getElementById("day"),
		SIGN = "",
		MONTH_PLUS_ONE = parseInt(MONTH_SELECTED.value) + 1;

	//pick zodiac based on month and day
	if ((MONTH_SELECTED.value == 11 && 22<= DAY_SELECTED.value) || 
		(MONTH_SELECTED.value == 0 && DAY_SELECTED.value <= 19)){
		SIGN = "Capricorn";
	} else if ((MONTH_SELECTED.value == 0 && 20<= DAY_SELECTED.value) || 
				(MONTH_SELECTED.value == 1 && DAY_SELECTED.value <= 18)){
		SIGN = "Aquarius";
	} else if ((MONTH_SELECTED.value == 1 && 19<= DAY_SELECTED.value && DAY_SELECTED.value <= 29) ||
				(MONTH_SELECTED.value == 2 && DAY_SELECTED.value <= 20)){
		SIGN = "Pisces";
	} else if ((MONTH_SELECTED.value == 2 && 21<= DAY_SELECTED.value) ||
				(MONTH_SELECTED.value == 3 && DAY_SELECTED.value <= 19)){
		SIGN = "Aries";
	} else if ((MONTH_SELECTED.value == 3 && 20<= DAY_SELECTED.value && DAY_SELECTED.value <=30) ||
				(MONTH_SELECTED.value == 4 && DAY_SELECTED.value <= 20)){
		SIGN = "Taurus";
	} else if ((MONTH_SELECTED.value == 4 && 21<= DAY_SELECTED.value) ||
				(MONTH_SELECTED.value == 5 && DAY_SELECTED.value <= 20)){
		SIGN = "Gemini";
	} else if ((MONTH_SELECTED.value == 5 && 21<= DAY_SELECTED.value && DAY_SELECTED.value <=30) ||
				(MONTH_SELECTED.value == 6 && DAY_SELECTED.value <= 22)){
		SIGN = "Cancer";
	} else if ((MONTH_SELECTED.value == 6 && 23<= DAY_SELECTED.value) ||
				(MONTH_SELECTED.value == 7 && DAY_SELECTED.value <= 22)){
		SIGN = "Leo";
	} else if ((MONTH_SELECTED.value == 7 && 23<= DAY_SELECTED.value) ||
				(MONTH_SELECTED.value == 8 && DAY_SELECTED.value <= 22)){
		SIGN = "Virgo";
	} else if ((MONTH_SELECTED.value == 8 && 23<= DAY_SELECTED.value && DAY_SELECTED.value <=30) ||
				(MONTH_SELECTED.value == 9 && DAY_SELECTED.value <= 21)){
		SIGN = "Libra";
	} else if ((MONTH_SELECTED.value == 9 && 22<= DAY_SELECTED.value) ||
				(MONTH_SELECTED.value == 10 && DAY_SELECTED.value <= 21)){
		SIGN = "Scorpio";
	} else if ((MONTH_SELECTED.value == 10 && 22<= DAY_SELECTED.value && DAY_SELECTED.value <=30) ||
				(MONTH_SELECTED.value == 11 && DAY_SELECTED.value <= 21)){
		SIGN = "Sagitarius";
	} 

	signAssign(SIGN);

	//displays information about the sign picked

	if (SIGN === "" || MONTH_SELECTED.value == "" || DAY_SELECTED.value == ""){
		YOUR_SIGN.innerHTML += "<h2>Error: That date does not exist. Try again.</h2>";
		console.log("Error: That date does not exist");
	} else {
		YOUR_SIGN.innerHTML += "<h2>Your birthday is " + MONTH_PLUS_ONE + "/" + DAY_SELECTED.value + 
					" and your sign is " + SIGN + "!</h2>" + 
					"<br>" + SIGN + " is one of the ~" + SIGN_ELEMENT + "~ signs." +
					"<br>Your power color is " + "~<span style='color:" + SIGN_COLOR + "'>" + SIGN_COLOR + "</span>~." + 
					"<br>Your best day of the week is usually a " + "~" + SIGN_DAY + "~." + 
					"<br>Look to the sky: ~" + SIGN_RULER + "~ is your ruler!" + 
					"<br>Your best relationships are with ~<span class='match-text'>" + SIGN_MATCHES[1] + "</span>~ and ~<span class='match-text'>" + SIGN_MATCHES[2] + "</span>~," + 
					"<br>But your true love is ~<span class='match-text'>" + SIGN_MATCHES[0] + "</span>~!";
	};

}

//displays date range of match signs when hovering over matches
function matchHover(){
	var MATCH_TEXT = document.getElementsByClassName("match-text"),
		MATCH_POPUP = document.getElementById("popup");	

	console.log(MATCH_TEXT);

	for (var m of MATCH_TEXT){
		m.onmouseover = function(e){
			console.log(e);
			var matchText = e.target.innerHTML;
			var matchDates = getDates(matchText);
			MATCH_POPUP.innerHTML += matchDates[0] + " - " + matchDates[1];
			MATCH_POPUP.style.display = "block"; 
			/*MATCH_POPUP.style.position = "absolute";
			MATCH_POPUP.style.left = e.x;
			MATCH_POPUP.style.top = e.y; */
		}
	}

	for (var m of MATCH_TEXT){
		m.onmouseout = function(e){
			MATCH_POPUP.innerHTML = "";
			MATCH_POPUP.style.display = "none";
		}
	}

}

function init(){
	console.log("init start");
	signPick();
	matchHover();
}


//document.getElementById("submit").onclick = init();
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("submit").addEventListener("click", function(){
		init();
	});
}) 

