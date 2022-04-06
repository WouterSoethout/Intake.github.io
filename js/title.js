if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "|",
"O",
"O|",
"O |/",
"O U",
"O U|",
"O U |/",
"O U T",
"O U T|",
"O U T |/",
"O U T E",
"O U T E|",
"O U T E |/",
"O U T E R",
"O U T E R|",
"O U T E R |/",
"O U T E R | S",
"O U T E R | S|",
"O U T E R | S |/",
"O U T E R | S P",
"O U T E R | S P|",
"O U T E R | S P |/",
"O U T E R | S P A",
"O U T E R | S P A|",
"O U T E R | S P A |/",
"O U T E R | S P A C",
"O U T E R | S P A C|",
"O U T E R | S P A C |/",
"O U T E R | S P A C E|/",
"O U T E R | S P A C E",
"O U T E R | S P A C E|",
"O U T E R | S P A C E |/",

"🚀",
"* 🚀",
"* * 🚀",
"* * * 🚀",
"* * * * 🚀   🌕",
"* * * * *🚀 🌕",
"* * * * * *🚀🌕",
"* * * * * * *💥"];


function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}