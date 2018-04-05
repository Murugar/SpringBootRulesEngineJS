
var family_visiting;
var weather;
var money;
var known_weathers = [ "sunny", "rainy", "windy","snow", "sleet", "spring", "autumn", "winter"];
var rich_money = [ "rich", "wealthy", "fatcat", "mogul", "affluent"];


var contains = function(needle) {
	
	var findNaN = needle !== needle;
	var indexOf;

	if(!findNaN && typeof Array.prototype.indexOf === 'function') {
		indexOf = Array.prototype.indexOf;
	} else {
		indexOf = function(needle) {
			var i = -1, index = -1;

			for(i = 0; i < this.length; i++) {
				var item = this[i];

				if((findNaN && item !== item) || item === needle) {
					index = i;
					break;
				}
			}

			return index;
		};
	}

	return indexOf.call(this, needle) > -1;
};



var todo;



var arrValues = ["Sam","Great", "Sample", "High", "Low", "Medium"];


if (family_visiting == true)  {
	todo = "Cinema";
} else {
	if (!known_weathers.indexOf(weather) == -1) {
		todo = null;
	} else if (weather == "sunny" ) {
		todo = "Play Tennis";
	} else if (weather == "rainy") {
		todo = "Stay In";
	} else if (weather == "snow") {
		todo = "Ski";	
	} 
    else if (weather == "snow") {
	     todo = "Take a Walk";	
    }
	else {
		// weather is cold / windy, we need an indoor activity
		todo = rich_money.indexOf(money) > -1 ? "Shopping" : (money=="poor" ? "Cinema" : null) ;
	}
}
