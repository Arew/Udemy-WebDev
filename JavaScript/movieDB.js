var movieDB = [
	{
		name: "Top Gun",
		stars: 5,
		seen: true,	
	},
	{
		name: "Logan",
		stars: 4.5,
		seen: false,	
	},
	{
		name: "Rounders",
		stars: 4,
		seen: true,	
	},
	{
		name: "Cars",
		stars: 4.5,
		seen: true,	
	},
	{
		name: "Planes",
		stars: 4.75,
		seen: false,	
	},
	{	
		name: "The Room",
		stars: 0,
		seen: true,	
	}];

function movieList(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].seen === true) {
			console.log("You have watched " + '"' + arr[i].name + '"' + " - " + arr[i].stars + " stars");
		} else if(arr[i].seen === false) {
			console.log("You have not seen " + '"' + arr[i].name + '"' + " - " + arr[i].stars + " stars");
		}
	}
}