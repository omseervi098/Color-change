
var changecolor = document.getElementById("btn1");
var changeshape = document.getElementById("btn2");
var circle = document.getElementById("circle");
var inner = document.getElementById("inner");
var list = ["pink", "green", "blue", "red", "black", "yellow"];
var cnt = 0;
changecolor.addEventListener("click", function () {
  cnt = cnt % 6;
  circle.style.backgroundColor = list[cnt];
  cnt++;
});
var list2 = ["heart", "badge", "flower"];
var cnt1 = 0;
changeshape.addEventListener("click", function () {
  cnt1 = cnt1 % 3;
  inner.className = list2[cnt1];
  cnt1++;
});
