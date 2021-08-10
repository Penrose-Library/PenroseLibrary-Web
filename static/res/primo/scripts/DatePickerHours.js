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
 changing text =  function arguments just after month names definitions. 
 Java Script Calendar is free without any limitations. Copyright © Eugene 
 Vassiltsov. But please, let me know if you will use it.

 Changed if's to if - else if's and combined dates into months so we don't have
 to do all of the checks on each page load.  BWM 07.13.05
*/


 function date_calendar(calendar) {

 if (parseInt(navigator.appVersion.substring(0,1))<4) return;

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

 // January
var text = "";
 if (month == 0) {
 	if (date == 1) text =  "Penrose Library is closed today."; 
 	if (date == 2) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 3) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 4) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 5) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 6) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 7) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 8) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 9) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 10) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 11) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 12) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 13) text =  "Penrose Library is open from 9am to 10pm"; 
 	if (date == 14) text =  "Open at 9 am<br />Closed at 10pm to non-Whitman community"; 
 	if (date == 15) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 16) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 17) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 18) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 19) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 20) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 21) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 22) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 23) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 24) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 25) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 26) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 27) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 28) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 29) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
 	if (date == 30) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
 	if (date == 31) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
}
 // February
else if (month == 1) {
 	if (date == 1) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
 	if (date == 2) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 3) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 4) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 5) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 6) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 7) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 8) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 9) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 10) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 11) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 12) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 13) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 14) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 15) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 16) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 17) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 18) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 19) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 20) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 21) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 22) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 23) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 24) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 25) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 26) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 27) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 28) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
	if (date == 29) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
}
// March
else if (month == 2) { 
 	if (date == 1) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
 	if (date == 2) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 3) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 4) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 5) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 6) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 7) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 8) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 9) text =  "Penrose Library is closing at 10pm"; 
 	if (date == 10) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 11) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 12) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 13) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 14) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 15) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 16) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 17) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 18) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 19) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 20) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 21) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 22) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 23) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 24) text =  "Penrose Library is open from  9am to 10pm"; 
 	if (date == 25) text =  "Open at 9am<br />Closed at 10pm to non-Whitman community"; 
 	if (date == 26) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 27) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 28) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 29) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
 	if (date == 30) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
 	if (date == 31) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
}
 // April
else if (month == 3) {
 	if (date == 1) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
 	if (date == 2) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 3) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 4) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 5) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 6) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 7) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 8) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 9) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 10) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 11) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 12) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 13) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 14) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 15) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 16) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 17) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 18) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 19) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 20) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 21) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 22) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 23) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 24) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 25) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 26) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 27) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman communitym"; 
 	if (date == 28) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 29) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
 	if (date == 30) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
}
 // May
else if (month == 4) {
 	if (date == 1) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
 	if (date == 2) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 3) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 4) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 5) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 6) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 7) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 8) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 9) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 10) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 11) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
 	if (date == 12) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community";
 	if (date == 13) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 14) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 15) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community"; 
 	if (date == 16) text =  "Penrose Library will close at 10pm tonight."; 
 	if (date == 17) text =  "Penrose Library is open from 9am to 10pm";
 	if (date == 18) text =  "Penrose Library is open from 9am to 10pm";
 	if (date == 19) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 20) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 21) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 22) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 23) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 24) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 25) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 26) text =  "Penrose Library is closed today."; 
 	if (date == 27) text =  "Penrose Library is closed today.";
 	if (date == 28) text =  "Penrose Library is closed today."; 
 	if (date == 29) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 30) text =  "Penrose Library is open from 9am to 5pm";
 	if (date == 31) text =  "Penrose Library is open from 9am to 5pm"; 
}
 // June
else if (month == 5) {
 	if (date == 1) text =  "Penrose Library is closed today.";
 	if (date == 2) text =  "Penrose Library is closed today."; 
 	if (date == 3) text =  "Penrose Library is closed today."; 
 	if (date == 4) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 5) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 6) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 7) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 8) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 9) text =  "Penrose Library is closed today."; 
 	if (date == 10) text =  "Penrose Library is closed today."; 
 	if (date == 11) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 12) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 13) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 14) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 15) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 16) text =  "Penrose Library is closed today."; 
 	if (date == 17) text =  "Penrose Library is closed today."; 
 	if (date == 18) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 19) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 20) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 21) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 22) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 23) text =  "Penrose Library is closed today."; 
 	if (date == 24) text =  "Penrose Library is closed today."; 
 	if (date == 25) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 26) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 27) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 28) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 29) text =  "Penrose Library is open from 9am to 5pm";
 	if (date == 30) text =  "Penrose Library is closed today.";
}
 // July
else if (month == 6) {
 	if (date == 1) text =  "Penrose Library is closed today.";
 	if (date == 2) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 3) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 4) text =  "Penrose Library is closed today."; 
 	if (date == 5) text =  "Penrose Library is closed today."; 
 	if (date == 6) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 7) text =  "Penrose Library is closed today."; 
 	if (date == 8) text =  "Penrose Library is closed today."; 
 	if (date == 9) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 10) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 11) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 12) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 13) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 14) text =  "Penrose Library is closed today."; 
 	if (date == 15) text =  "Penrose Library is closed today."; 
 	if (date == 16) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 17) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 18) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 19) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 20) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 21) text =  "Penrose Library is closed today.";
 	if (date == 22) text =  "Penrose Library is closed today."; 
 	if (date == 23) text =  "Penrose Library is open from 9am to 5pm";
 	if (date == 24) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 25) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 26) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 27) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 28) text =  "Penrose Library is closed today."; 
 	if (date == 29) text =  "Penrose Library is closed today."; 
 	if (date == 30) text =  "Penrose Library is open from 9am to 5pm"; 
 	if (date == 31) text =  "Penrose Library is open from 9am to 5pm";
}
  // August
else if (month == 7) {
 	if (date == 1) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 2) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 3) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 4) text =  "Penrose Library is closed today</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 5) text =  "Penrose Library is closed today</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 6) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 7) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 8) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 9) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 10) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 11) text =  "Penrose Library is closed today</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 12) text =  "Penrose Library is closed today</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 13) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 14) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 15) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 16) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 17) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 18) text =  "Penrose Library is closed today</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 19) text =  "Penrose Library is closed today</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 20) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 21) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 22) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 23) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 24) text =  "Penrose Library is closed today"; 
 	if (date == 25) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 26) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 27) text =  "Penrose Library is open from 9am to 10pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 28) text =  "Open at 9am<br />Closed at 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 29) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am";
 	if (date == 30) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am";
 	if (date == 31) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed";

}
 // September
else if (month == 8) {
 	if (date == 1) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed";
 	if (date == 2) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 3) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 4) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 5) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 6) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 7) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 8) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 9) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 10) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 11) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 12) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 13) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 14) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 15) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 16) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 17) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 18) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 19) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 20) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 21) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 22) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 23) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 24) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 25) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 26) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 27) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 28) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 29) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed";
 	if (date == 30) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am";
}
 // October
else if (month == 9) {
 	if (date == 1) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am";
 	if (date == 2) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 3) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 4) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 5) text =  "Penrose Library is closing at 10pm today</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"
 	if (date == 6) text =  "Penrose Library is open from 9am to 10pm</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 7) text =  "Penrose Library is open from 9am to 10pm</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 8) text =  "Penrose Library is open from 9am to 12am</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 9) text =  "Open at 9am<br />Closed at 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 10) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 11) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 12) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 13) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 14) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 15) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 16) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 17) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 18) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 19) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 20) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 21) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 22) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 23) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 24) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 25) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 26) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 27) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 28) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 29) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am";
 	if (date == 30) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am";
 	if (date == 31) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am";
}
// November
else if (month == 10) {
 	if (date == 1) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am";
 	if (date == 2) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 3) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 4) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 5) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 6) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 7) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 8) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 9) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 10) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 11) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 12) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 13) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 14) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 15) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 16) text =  "Penrose Library is closing at 6pm today.</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 17) text =  "Penrose Library is open 9am to 5pm</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 18) text =  "Penrose Library is open 9am to 5pm</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 19) text =  "Penrose Library is open 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 20) text =  "Penrose Library is open 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 21) text =  "Penrose Library is open 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 22) text =  "Closed for Thanksgiving"; 
 	if (date == 23) text =  "Closed for Thanksgiving"; 
 	if (date == 24) text =  "Penrose Library is open from 1pm to 5pm</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 25) text =  "Open at 1pm <br />Closed at 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 26) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 27) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 28) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 29) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am";
 	if (date == 30) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed";
}
// December
else if (month == 11) {
 	if (date == 1) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed";
 	if (date == 2) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 3) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 4) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 5) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 6) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 7) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 8) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 9) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 10) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 11) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 12) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 13) text =  "Penrose Library is open 24 hours, open from 9am to 10pm to non-Whitman community</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is open from 8pm-1am"; 
 	if (date == 14) text =  "Penrose Library will close at 5pm today</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 15) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 16) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is closed</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 17) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 18) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 19) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 20) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 21) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 22) text =  "Penrose Library is closed for winter break."; 
 	if (date == 23) text =  "Penrose Library is closed for winter break."; 
 	if (date == 24) text =  "Penrose Library is closed for winter break."; 
 	if (date == 25) text =  "Penrose Library is closed for winter break."; 
 	if (date == 26) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 27) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 28) text =  "Penrose Library is open from 9am to 5pm</p><p>Whitman Archives is open from 10am-12pm and 1pm-4pm, and by appt.</p><p>Caf&eacute; 41 is closed"; 
 	if (date == 29) text =  "Penrose Library is closed for winter break.";
 	if (date == 30) text =  "Penrose Library is closed for winter break.";
 	if (date == 31) text =  "Penrose Library is closed for winter break.";
};


 return text;
}

