// var circle = document.querySelector("circle");
// circle.setAttribute("fill", "cyan");

var canvas = document.querySelector("canvas");
var cx = canvas.getContext("2d");
cx.strokeStyle = "blue";
cx.lineWidth = 3;
// context.fillStyle = "red";
// context.fillRect(10,10,100,50);
cx.beginPath();
// Fail 1
cx.moveTo(5, 5);
cx.lineTo(5, 210);
cx.lineTo(190,210);
cx.lineTo(190, 200);
cx.lineTo(10,200);
cx.lineTo(10, 10);
cx.lineTo(100, 10);
cx.lineTo(100, 5);
cx.lineTo(5, 5);
// Fail 2
cx.moveTo(100, 10);
cx.lineTo(100, 40);
cx.moveTo(115, 55);
// Fail 3
cx.arc(100, 55, 15, 0, 7);
// Fail 4
cx.moveTo(100, 70);
cx.lineTo(100, 140);
// Fail 5
cx.lineTo(70, 170);
// Fail 6
cx.moveTo(100, 140);
cx.lineTo(130, 170);
// Fail 7
cx.moveTo(100, 100);
cx.lineTo(70, 80);
// Fail 8
cx.moveTo(100, 100);
cx.lineTo(130, 80);
cx.stroke();
