function clock()
{var date=new Date();
	var weekday=date.getDay();
	var year=date.getYear();
	var month=date.getMonth();
	var day=date.getDate();
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	var days=new Array ("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" );
	var months=new Array("January","February","March","April","May","June","July","August","September","October","November","december");
	var monthname=months[month];
	var dayname=days[weekday];
	var ap;var sal;
	if(year<1000)
		{year=year+1900} 
	if(hour<12 &&minute<60 &&second<60)
		{sal='Good Morning';} 
	if(hour>=12 &&hour<17 &&minute<60 &&second<60 ){
		sal='Good Afternoon';} if(hour>=17 &&hour<24 &&minute<60 &&second<60 )
		{sal='Good Evening';} 
		if (hour == 0){
			hour = 12;
		}
		if(hour>12){
			hour=hour-12;
				ap='PM';
			}else{
				ap='AM';
			} 
		if(minute<10){minute="0"+minute} if(second<10){second="0"+second};
document.getElementById('time').innerHTML=hour+" : "+ minute +" : "+second+" " +ap; 
document.getElementById('da').innerHTML=dayname;
document.getElementById('dt').innerHTML=monthname+" "+ day +", "+ year;
document.getElementById('salute').innerHTML=sal;setTimeout("clock()",60)}window.onload=function(){clock();}
