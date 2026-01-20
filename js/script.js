/*
ex1
*/

function showText(){
  document.getElementById('h3').innerHTML = "Hello World!";
}

/*
ex2
*/

function changeText(){
  document.getElementById('output').innerHTML = "Hello";
}

/*
ex3
*/
function showDate(){
  document.getElementById('sdate').innerHTML = Date();
}

/*
ex4
*/
function bulbOn(){
document.getElementById('b_img').src="img/light.on.gif";
}
function bulbOff(){
  document.getElementById('b_img').src="img/light.off.gif";
}

/*
ex5
*/

function changeCss(){
  document.getElementById('c_css').style.backgroundColor="red";
}

/*
ex6
*/

function showContent(){
  document.getElementById('show_hide').style.display="block";
}
function hideContent(){
  document.getElementById('show_hide').style.display="none";
}

/*
ex7
*/
let num1 = 5;
let num2 = 5;

let answer = num1 + num2;

function showAnswer(){
  document.getElementById('result').innerHTML= answer;
}

/*
ex8
*/
 let text1 = "he is" ;
 let num = 3;
 let text2 = "years old";

 let result = text1 + " " + num + " " + text2;

 function showResult(){
  document.getElementById('show').innerHTML= result;
}

/*
ex9
*/

function any(){
  document.getElementById('c_me').style.fontSize = '35px';
}
/*
ex10
*/
function myFunction() {
  document.getElementById("demu").innerHTML = "Paragraph changed.";
}
/*
ex11
*/
let res1 = 5;
let res2 = 5;

let res = res1 - res2;

function showRes(){
  document.getElementById('r').innerHTML= res;
}
/*
ex12
*/
let resu1 = 5;
let resu2 = 5;

let resu = resu1 * resu2;

function showResu(){
  document.getElementById('re').innerHTML= resu;
}
/*
ex13
*/
let resul1 = 5;
let resul2 = 5;

let resul = resul1 / resul2;

function showResul(){
  document.getElementById('res').innerHTML= resul;
}
/*
ex14
*/
let ros1 = 5;
let ros2 = 5;

let rsul = ros1 % ros2;

function showRsul(){
  document.getElementById('ros').innerHTML= rsul;
}
/*
ex15
*/
function seeAns(){
  window.alert('hello');
}
/*
ex16
*/
function seeAnsw(){
  window.alert(5 + 6);
}

/*
ex16
*/
function seeAnswe(){
  window.alert(5 - 6);
}
/*
ex17
*/
function seeAnswer(){
  window.alert(5 * 6);
}
/*
ex18
*/
function seeAnswerr(){
  window.alert(5 / 6);
}
/*
ex19
*/
function seeAnswerrr(){
  window.alert(5 % 6);
}
/*
ex20
*/
let rose1 = 10;
let rose2 = 5;

let rose = resu1 < resu2;

function showRos(){
  document.getElementById('er').innerHTML= rose;
}
/*
ex21
*/
let rose11 = 10;
let rose22 = 5;

let rosee = rose11 > rose22;

function showRos1(){
  document.getElementById('ere').innerHTML= rosee;
}
/*
ex22
*/
let rose111 = 10;
let rose222 = 5;

let roseee = rose111 != rose222;

function showRos11(){
  document.getElementById('eren').innerHTML= roseee;
}
/*
ex23
*/
let rose1111 = 10;
let rose2222 = 5;

let roseeee = rose1111 !== rose2222;

function showRos111(){
  document.getElementById('erenn').innerHTML= roseeee;
}
/*
ex24
*/
let rifat1 = '10';
let rifat2 = 5;

let roseeeee = rifat1 !== rifat2;

function showRos10(){
  document.getElementById('erennn').innerHTML= roseeeee;
}
/*
ex25
*/
let rifat10 = '10';
let rifat20 = 5;

let rose10 = rifat10 === rifat20;

function showRos20(){
  document.getElementById('eren10').innerHTML= rose10;
}
/*
ex26
*/
let yamin1 = 5;
let yamin2 = 5;

let rose00 = yamin1 == yamin2;

function showRos00(){
  document.getElementById('eren00').innerHTML= rose00;
}
/*
ex27
*/
let rifat101 = 5;
let rifat201 = 5;

let rose101 = rifat101 === rifat201;

function showRos200(){
  document.getElementById('eren101').innerHTML= rose101;
}
/*
ex28
*/
let yamin01 = 10;
let yamin02 = 5;

let rose001 = yamin01 == yamin02;

function showRos001(){
  document.getElementById('eren001').innerHTML= rose001;
}
/*
ex29
*/
let any11 = 10;
let any22 = 5;

let any111 = any11 >= any22;

function showRo001(){
  document.getElementById('e1').innerHTML= any111;
}
/*
ex30
*/
let any11122 = 5;
let any22222 = 5;

let any1112 = any11122 >= any22222;

function showRo0012(){
  document.getElementById('e12').innerHTML= any1112;
}
/*
ex31
*/
let number1 = Array('rifat','yamin');

function showRol(){
  document.getElementById('e123').innerHTML= number1[1];
}
/*
ex32
*/
for (var yamin = 1; yamin <= 4; yamin++) {
  function showRol0(){
    document.getElementById('e1234').innerHTML = yamin;
  }
  
}

/*
ex33
*/
function checkValue() {
      let value = 2;

      if (value < 3) {
        document.getElementById("pen").innerHTML = "TRUE: 2 is less than 3";
      } else {
        document.getElementById("pen").innerHTML = "FALSE: 2 is NOT less than 3";
      }
    }
    /*
    ex34
    */
    function any1(){
  document.getElementById('c_me2').style.color = 'red';
 }
/*
ex35
*/
document.getElementById('hello').innerHTML = "hello world";
/*
ex36
*/
let x,y,z;
x = 5;
y = 6;
z = x+y;
document.getElementById('demoo').innerHTML = "the value of z is" + z;
/*
ex37
*/
// change heading:
document.getElementById('myh').innerHTML = "javascript comments";
// change paragraph:
document.getElementById('myp').innerHTML = "my first paragraph";
/*
ex38
*/
let carName = "BMW"
document.getElementById('deemo').innerHTML = carName;
/*
ex39
*/
let person = "john Doe", carNamee = "Volvo", price = "500$";
document.getElementById('dimo').innerHTML = person; 
document.getElementById('dimo').innerHTML = person; 
/*
ex40
*/
let lineTwo;
document.getElementById('hu').innerHTML = lineTwo;
/*
ex41
*/
let h = 10;
h += 5;
document.getElementById('new').innerHTML = h;
/*
ex42
*/
let k = 10;
k -= 5;
document.getElementById('new2').innerHTML = k;
/*
ex43
*/
let g = 10;
g *= 5;
document.getElementById('new3').innerHTML = g;
/*
ex44
*/
let o = 10;
o /= 5;
document.getElementById('newo').innerHTML = o;
/*
ex45
*/
document.getElementById("ide").innerHTML = 
typeof "John" + "<br>" +
typeof ("John" + "Doe") + "<br>" +
typeof 3.14 + "<br>" +
typeof (22 + 66) + "<br>" +
typeof true + "<br>" +
typeof false + "<br>" +
typeof 1234n + "<br>" +
typeof x;
/*
ex46
*/
// Create an Object:
const car = {type:"Fiat", model:"500", color:"white"};

// Display Data from the Object:
document.getElementById("uli").innerHTML =
"The car type is " + car.type;
/*
ex47
*/
document.getElementById("oo").innerHTML = Math.PI;
/*
ex48
*/
document.getElementById("ii").innerHTML = Math.pow(8,2);
/*
ex49
*/
document.getElementById("ss").innerHTML = Math.abs(-4.7);
/*
ex50
*/
document.getElementById("aa").innerHTML =
Math.min(0, 150, 30, 20, -8, -200);