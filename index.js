function clock(){
	var options = { weekday: 'long', month: 'long', day: 'numeric' };
	var today  = new Date();
	document.getElementById('time').innerHTML = today.toLocaleTimeString("en-US"); 
	document.getElementById('date').innerHTML= today.toLocaleDateString("hi-IN", options);
	setTimeout("clock()",60);
}
window.onload=function(){clock();}
