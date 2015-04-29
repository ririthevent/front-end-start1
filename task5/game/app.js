var box = $('.box');
//document.querySelectorAll('.box')[0];
var	score = 0;
var	scoreDiv = $('#score');
//document.getElementById('score');
var body = $('body');
var X = 0;
var Y = 0;
function randomNumber(endNum){
	return Math.floor(Math.random() * endNum) +1;
}

//박스 위치 변경 함수
function moveBox(){
	X = randomNumber(body.outerWidth(true)) - 15;
	Y = randomNumber(body.outerHeight(true)) - 15;
	box.css({
		left : X + 'px',
		top : Y + 'px'
	});
//	box.style.left = X + 'px';
//	box.style.top = Y + 'px';
}

//스타트 버튼을 누르면 박스와 점수가 나타나고 1초마다 박스의 위치가 변하게함
function start(){
	var startBtn = $('#start');
	scoreString = 'score : ' + score;
	scoreDiv.html(scoreString);
	X = randomNumber(body.outerWidth(true)) - 15;
	Y = randomNumber(body.outerHeight(true)) - 15;
	box.css({
		left : X + 'px',
		top : Y + 'px',
		visibility: 'visible'
	});
	setInterval(moveBox, 2000);
}

//박스가 클릭되면 점수가 10점 오르고 박스의 위치가 변하게 함
box.click(function(){
	score = score + 10;
	scoreString = 'score : ' + score;
	scoreDiv.html(scoreString);
	moveBox();
});