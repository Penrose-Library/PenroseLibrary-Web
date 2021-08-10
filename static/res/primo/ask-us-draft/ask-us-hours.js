/*

 Java Script Calendar is a small script for web pages which displays current 
 Day of the week, Month, Date and Year along with Holidays notification. Just 
 like this working demo below. It will work with Netscape 2++, Microsoft 3++ 
 and Opera 3++ web browsers.
 
 Tuesday, November 24, 1998  
  About 70 holidays from all over the world are displayed by Calendar (if you 
 know other ones, let me know, I will add them). It even calculates Easter 
 Sunday date! To see how it works change the date on your computer to January, 
 1, for example and re-load the page.
 
 Installation is very simple. Just copy the script below, everything between 
 SCRIPT and SCRIPT tags (including tags themselves) and paste in the place 
 you want it to appear on your page. You can customize the way it looks by 
 changing document.write function arguments just after month names definitions. 
 Java Script Calendar is free without any limitations. Copyright © Eugene 
 Vassiltsov. But please, let me know if you will use it.

 Changed if's to if - else if's and combined dates into months so we don't have
 to do all of the checks on each page load.  BWM 07.13.05
*/


 function show_calendar(time) {
 if (parseInt(navigator.appVersion.substring(0,1))<4) return;
 calendar = new Date();
 day = calendar.getDay();
 month = calendar.getMonth();
 date = calendar.getDate();
 year = calendar.getYear();
 if (year < 1000)
 year+=1900;
 cent = parseInt(year/100);
 g = year % 19;
 k = parseInt((cent - 17)/25);
 i = (cent - parseInt(cent/4) - parseInt((cent - k)/3) + 19*g + 15) % 30;
 i = i - parseInt(i/28)*(1 - parseInt(i/28)*parseInt(29/(i+1))*parseInt((21-g)/11));
 j = (year + parseInt(year/4) + i + 2 - cent + parseInt(cent/4)) % 7;
 l = i - j;
 emonth = 3 + parseInt((l + 40)/44);
 edate = l + 28 - 31*parseInt((emonth/4));
 emonth--;
 var dayname = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
 var monthname = 
 new Array ("Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec." );
var date_hours = dayname[day] + ", " + monthname[month] + " ";
 if (date< 10) 
	date_hours += "0" + date + ", ";
  else date_hours += date + ", ";
date_hours += year + "&";

 // January

 if (month == 0) {
 	if (date == 1) date_hours += "Penrose is closed today."; 
 	if (date == 2) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 3) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 4) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 5) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 6) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 7) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 8) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 9) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 10) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 11) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 12) date_hours += "Penrose is open from 9am to 5pm.";
 	if (date == 13) date_hours += "Penrose is open from 9am to 10pm."; 
 	if (date == 14)  date_hours += "Open at 9 am, closed at 10pm to<br />non-Whitman community"; 
 	if (date == 15) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 16) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 17) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 18) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 19) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 20) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 21) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 22) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 23) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 24) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 25) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 26) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 27) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 28) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 29) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 30) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 31) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
}
 // February
else if (month == 1) {
 	if (date == 1) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 2) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 3) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 4) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 5) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 6) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 7) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 8) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 9) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 10) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 11) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 12) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 13) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 14) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 15) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 16) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 17) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 18) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 19) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 20) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 21) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 22) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 23) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 24) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 25) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 26) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 27) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 28) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
	if (date == 29) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
}
// March
else if (month == 2) { 
 	if (date == 1) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 2) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 3) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 4) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 5) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 6) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 7) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 8) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 9) date_hours += "We'll be closing at 10 pm tonight."; 
 	if (date == 10) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 11) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 12) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 13) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 14) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 15) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 16) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 17) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 18) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 19) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 20) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 21) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 22) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 23) date_hours += "Penrose is open from  9am to 10pm."; 
 	if (date == 24) date_hours += "Open at 9am<br />Closed at 10pm to non-Whitman community"; 
 	if (date == 25) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 26) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 27) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 28) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 29) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 30) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 31) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
}
 // April
else if (month == 3) {
 	if (date == 1) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 2) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 3) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 4) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 5) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 6) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 7) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 8) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 9) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 10) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 11) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 12) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 13) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 14) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 15) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 16) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 17) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 18) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 19) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 20) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 21) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 22) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 23) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 24) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 25) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 26) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 27) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman communitym"; 
 	if (date == 28) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 29) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 30) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
}
 // May
else if (month == 4) {
	
 	if (date == 1) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 2) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 3) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 4) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 5) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 6) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 7) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 8) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 9) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 10) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 11) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 12) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 13) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 14) date_hours += "Penrose will close at 10pm tonight."; 
 	if (date == 15) date_hours += "Penrose is open from 9am to 10pm."; 
 	if (date == 16) date_hours += "Penrose is open from 9am to 10pm."; 
 	if (date == 17) date_hours += "Penrose is open from 9am to 6pm.";
 	if (date == 18) date_hours += "Penrose is open from 9am to 5pm.";
 	if (date == 19) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 20) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 21) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 22) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 23) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 24) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 25) date_hours += "Penrose is closed today."; 
 	if (date == 26) date_hours += "Penrose is closed today."; 
 	if (date == 27) date_hours += "Penrose is closed today.";
 	if (date == 28) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 29) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 30) date_hours += "Penrose is open from 9am to 5pm.";
 	if (date == 31) date_hours += "Penrose is closed for Staff Appreciation Day."; 
}
 // June
else if (month == 5) {
 	if (date == 1) date_hours += "Penrose is closed today.";
 	if (date == 2) date_hours += "Penrose is closed today.";
 	if (date == 3) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 4) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 5) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 6) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 7) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 8) date_hours += "Penrose is closed today."; 
 	if (date == 9) date_hours += "Penrose is closed today."; 
 	if (date == 10) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 11) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 12) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 13) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 14) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 15) date_hours += "Penrose is closed today."; 
 	if (date == 16) date_hours += "Penrose is closed today."; 
 	if (date == 17) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 18) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 19) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 20) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 21) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 22) date_hours += "Penrose is closed today."; 
 	if (date == 23) date_hours += "Penrose is closed today."; 
 	if (date == 24) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 25) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 26) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 27) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 28) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 29) date_hours += "Penrose is closed today.";
 	if (date == 30) date_hours += "Penrose is closed today.";
}
 // July
else if (month == 6) {
 	if (date == 1) date_hours += "Penrose is open from 9am to 5pm.";
 	if (date == 2) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 3) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 4) date_hours += "Penrose is closed today."; 
 	if (date == 5) date_hours += "Penrose is closed today."; 
 	if (date == 6) date_hours += "Penrose is closed today."; 
 	if (date == 7) date_hours += "Penrose is closed today."; 
 	if (date == 8) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 9) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 10) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 11) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 12) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 13) date_hours += "Penrose is closed today."; 
 	if (date == 14) date_hours += "Penrose is closed today."; 
 	if (date == 15) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 16) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 17) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 18) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 19) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 20) date_hours += "Penrose is closed today."; 
 	if (date == 21) date_hours += "Penrose is closed today.";
 	if (date == 22) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 23) date_hours += "Penrose is open from 9am to 5pm.";
 	if (date == 24) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 25) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 26) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 27) date_hours += "Penrose is closed today."; 
 	if (date == 28) date_hours += "Penrose is closed today."; 
 	if (date == 29) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 30) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 31) date_hours += "Penrose is open from 9am to 5pm.";
}
  // August
else if (month == 7) {
 	if (date == 1) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 2) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 3) date_hours += "Penrose is closed today."; 
 	if (date == 4) date_hours += "Penrose is closed today."; 
 	if (date == 5) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 6) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 7) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 8) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 9) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 10) date_hours += "Penrose is closed today."; 
 	if (date == 11) date_hours += "Penrose is closed today."; 
 	if (date == 12) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 13) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 14) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 15) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 16) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 17) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 18) date_hours += "Penrose is closed today."; 
 	if (date == 19) date_hours += "Penrose is closed today."; 
 	if (date == 20) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 21) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 22) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 23) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 24) date_hours += "Penrose is closed today"; 
 	if (date == 25) date_hours += "Penrose is closed today"; 
 	if (date == 26) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 27) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 28) date_hours += "Penrose is open from 9am to 5pm."; 
 	if (date == 29) date_hours += "Penrose is open from 9am to 5pm.";
 	if (date == 30) date_hours += "Closed for new student orientation";
 	if (date == 31) date_hours += "Penrose is open from 9am to 5pm.";

}
 // September
else if (month == 8) {
 	if (date == 1) date_hours += "Penrose is open from 9am to 5pm.";
 	if (date == 2) date_hours += "Penrose is open from 9am to 10pm."; 
 	if (date == 3) date_hours += "Open at 9am<br />Closed at 10pm to non-Whitman community"; 
 	if (date == 4) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 5) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 6) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 7) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 8) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 9) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 10) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 11) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 12) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 13) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 14) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 15) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 16) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 17) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 18) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 19) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 20) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 21) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 22) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 23) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 24) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 25) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 26) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 27) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 28) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 29) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 30) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
}
 // October
else if (month == 9) {
 	if (date == 1) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 2) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 3) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 4) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 5) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 6) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 7) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 8) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 9)  date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 10) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 11) date_hours += "Penrose will be closing at 10pm today."; 
 	if (date == 12) date_hours += "Penrose is open from 9am to 10pm."; 
 	if (date == 13) date_hours += "Penrose is open from 9am to 10pm."; 
 	if (date == 14) date_hours += "Penrose is open from 9am to midnight."; 
 	if (date == 15) date_hours += "Open at 9am<br />Closed at 10pm to non-Whitman community"; 
 	if (date == 16) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 17) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 18) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 19) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 20) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 21) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 22) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 23) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 24) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 25) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 26) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 27) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 28) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 29) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 30) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 31) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
}
// November
else if (month == 10) {
 	if (date == 1) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community";
 	if (date == 2) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 3) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 4) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 5) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 6) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 7) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 8) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 9) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 10) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 11) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 12) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 13) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 14) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 15) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 16) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 17) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 18)  date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 19) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 20) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 21) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 22) date_hours += "Penrose will be closing at 6pm"; 
 	if (date == 23) date_hours += "Open 9am to 5pm"; 
 	if (date == 24) date_hours += "Open 9am to 5pm"; 
 	if (date == 25) date_hours += "Open 9am to 5pm"; 
 	if (date == 26) date_hours += "Open 9am to 5pm"; 
 	if (date == 27) date_hours += "Open 9am to 5pm"; 
 	if (date == 28) date_hours += "Closed"; 
 	if (date == 29) date_hours += "Closed";
 	if (date == 30) date_hours += "Open 1pm to 5pm";
}
// December
else if (month == 11) {
 	if (date == 1) date_hours += "Open at 1pm<br />Closed at 10pm to non-Whitman community";
 	if (date == 2) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 3) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 4) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 5) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 6) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 7) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 8) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 9) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 10) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 11) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 12) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 13) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 14) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 15) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 16) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 17) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 18) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 19) date_hours += "Open 24 hours<br />9am - 9pm to non-Whitman community"; 
 	if (date == 20) date_hours += "9am to 5pm"; 
 	if (date == 21) date_hours += "9am to 5pm"; 
 	if (date == 22) date_hours += "9am to 5pm"; 
 	if (date == 23) date_hours += "Penrose is closed for winter break."; 
 	if (date == 24) date_hours += "Penrose is closed for winter break."; 
 	if (date == 25) date_hours += "Penrose is closed for winter break."; 
 	if (date == 26) date_hours += "Penrose is closed for winter break."; 
 	if (date == 27) date_hours += "Penrose is closed for winter break."; 
 	if (date == 28) date_hours += "Penrose is closed for winter break."; 
 	if (date == 29) date_hours += "Penrose is closed for winter break.";
 	if (date == 30) date_hours += "Penrose is closed for winter break.";
 	if (date == 31) date_hours += "Penrose is closed for winter break.";
};
 	return date_hours;
}


