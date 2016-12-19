var PAGE_ONE = document.getElementById("page-1"),
	YOUR_SIGN = document.getElementById("your-sign");


//info about each sign from http://www.astrology-zodiac-signs.com/

var SIGN_LIST = [{"sign": "Capricorn", "element": "Earth", "color": "Brown", "day": "Saturday", "ruler": "Saturn", "matches": ["Cancer", "Taurus", "Virgo"]},
				{"sign": "Aquarius", "element": "Air", "color": "Blue", "day": "Sunday", "ruler": "Uranus", "matches": ["Leo", "Gemini", "Libra"]},
				{"sign": "Pisces", "element": "Water", "color": "Lilac", "day": "Thursday", "ruler": "Neptune", "matches": ["Virgo", "Cancer", "Scorpio"]},
				{"sign": "Aries", "element": "Fire", "color": "Red", "day": "Tuesday", "ruler": "Mars", "matches": ["Libra", "Leo", "Sagitarius"]},
				{"sign": "Taurus", "element": "Earth", "color": "Pink", "day": "Friday", "ruler": "Venus", "matches": ["Scorpio", "Virgo", "Capricorn"]},
				{"sign": "Gemini", "element": "Air", "color": "Yellow", "day": "Wednesday", "ruler": "Mercury", "matches": ["Sagitarius", "Libra", "Aquarius"]},
				{"sign": "Cancer", "element": "Water", "color": "Orange", "day": "Monday", "ruler": "Moon", "matches": ["Capricorn", "Scorpio", "Pisces"]},
				{"sign": "Leo", "element": "Fire", "color": "Gold", "day": "Sunday", "ruler": "Sun", "matches": ["Aquarius", "Aries", "Sagitarius"]},
				{"sign": "Virgo", "element": "Earth", "color": "White", "day": "Wednesday", "ruler": "Mercury", "matches": ["Pisces", "Taurus", "Capricorn"]},
				{"sign": "Libra", "element": "Air", "color": "Green", "day": "Friday", "ruler": "Venus", "matches": ["Aries", "Gemini", "Aquarius"]},
				{"sign": "Scorpio", "element": "Water", "color": "Rust", "day": "Tuesday", "ruler": "Pluto", "matches": ["Taurus", "Cancer", "Pisces"]},
				{"sign": "Sagitarius", "element": "Fire", "color": "Violet", "day": "Thursday", "ruler": "Jupiter", "matches": ["Gemini", "Aries", "Leo"]}],
	SIGN_ELEMENT = "",
	SIGN_COLOR = "",
	SIGN_DAY = "",
	SIGN_RULER = "",
	SIGN_MATCHES = [];




function signPick(){
	//clear previous content from your-sign div
	YOUR_SIGN.innerHTML = "";

	//assign month and day variables
	var MONTH_SELECTED = document.getElementById("month");	
		DAY_SELECTED = document.getElementById("day");
		SIGN = "";
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

	for (var i = 0; i<SIGN_LIST.length; i++){
		if (SIGN == SIGN_LIST[i].sign){
			SIGN_ELEMENT = SIGN_LIST[i].element;
			SIGN_COLOR = SIGN_LIST[i].color;
			SIGN_DAY = SIGN_LIST[i].day;
			SIGN_RULER = SIGN_LIST[i].ruler;
			SIGN_MATCHES = SIGN_LIST[i].matches;
		}

	}


	if (SIGN === "" || MONTH_SELECTED.value == "" || DAY_SELECTED.value == ""){
		YOUR_SIGN.innerHTML += "Error: That date does not exist. Try again."
		console.log("Error: That date does not exist");
	} else {
		YOUR_SIGN.innerHTML += "<h2>Your birthday is " + MONTH_PLUS_ONE + "/" + DAY_SELECTED.value + 
					" and your sign is " + SIGN + "!</h2>" + 
					"<br>" + SIGN + " is one of the ~" + SIGN_ELEMENT + "~ signs." +
					"<br>Your power color is " + "~<span id='color'>" + SIGN_COLOR + "</span>~." + 
					"<br>Your best day of the week is usually a " + "~" + SIGN_DAY + "~." + 
					"<br>Look to the sky: ~" + SIGN_RULER + "~ is your ruler!" + 
					"<br>Your best relationships are with ~" + SIGN_MATCHES[1] + "~ and ~" + SIGN_MATCHES[2] + "~," + 
					"<br>But your true love is ~" + SIGN_MATCHES[0] + "~!";
	};
	
	//hide page 1
	//PAGE_ONE.className += " display--none";
}


