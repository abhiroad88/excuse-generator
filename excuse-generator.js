var leadins=[
"Sorry I'm late, but",
"Sorry I forgot your birthday,but",
"I couldn't come to your wedding,",
"You won't beleive this:",
"This sounds crazy, but",
"This sounds unbeleivable but",
"Holy shit!",
"Oh man, "

]

var perpetrators = [

"the lord of darkness",
"Godzilla",
"the human centipede",
"a tiny lizard",
"the first page of Twilight",
"the inventor of the slanket",
"the director of 101 dalmations",
"the little kid from Indiana Jones",
"a man with six fingers on his hand",
"Mayor McCheese",
"Red Foreman",
"Scrooge McDuck",
"the Ghostbusters",
"Diablo, the god of death",
"Harry Potter",
"Captain Kirk",
"Dobby the elf",
"Sherlock Holmes",
"my speakers",
"Chtulu",
"a homeless guy",
"a frag grenade",
"a lady with a spandex watch",
"a toothpick",
"the creators of southpark"
]

var factors=[
"tried to kill me",
"ran me over with a tractor",
"ate my homework",
"tried to seduce me",
"stole my car",
"stole my identity",
"beamed me up",
"gave me knucle sandwich",
"ate my lunch",
"dropped kicked me into another dimension",
"ripped a hole in the space time continuum",
"did a moonwalk on my porsche",
"TPed by house",
"killed Kenny",
"sent me to Narnia",
"gave me a hickey",
"set my house on fire",
"kidnapped my lizard"

]


var generator=function(parts){
	return function(){
		var string="";
		for(i in parts){
			var rand=Math.floor(Math.random()*parts[i].length);
			var space=(i==parts.length-1)?"":" ";
			string+=parts[i][rand]+space;
		}
		string+=".";
		return string

	}

}

excuseGenerator=generator([leadins, perpetrators,factors]);
