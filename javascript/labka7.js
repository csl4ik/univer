/*var val = prompt("num","")
alert((val==1000)?"true":"false")*/

//8

/*var a = 5 + 7;
switch (a) {
case 9:
alert ("Это меньше а");
break;
case 10:
alert ("Это a");
break;
case 11:
alert ("Это больше a");
break;
default:
alert ("Это не a");
}*/

//9

/*var lang = prompt("language",""), week
if (lang == "en"){
week = ["monday", "tuesday", "wednesday"]
console.log(week);}
if (lang == "ru"){
week = ["понедельник", "вторник", "среда"];

console.log(week)}
*/

/*var question = prompt("What is Your NaMe?","")
var que = prompt("year","")
if(!(question =="Asan" || que == 2018))
alert("ns boy")
else {
  alert("не красава")
}*/

//10

var num1 = +prompt("num1","")
var sign = prompt("sign","")
var num2 = +prompt("num2","")

switch (sign) {
  case "+":
  alert(num1 + num2)
    break;
  case "-":
  alert(num1 - num2)
      break;
  case "*":
  alert(num1*num2)
    break;
  case "/":
  if (num2 === 0){
    alert('na 0 ne delitsya')
    break;}
    else
    alert(num1/num2)
  default:
}
