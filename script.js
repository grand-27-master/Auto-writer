var text='My name is Vashishth Gajjar';
var i=0;

function dispText(){
	document.body.innerText=text.slice(0,i);
	i++;
	if(i>text.length)
		i=0;
}

setInterval(dispText,200);