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

//�ڽ� ��ġ ���� �Լ�
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

//��ŸƮ ��ư�� ������ �ڽ��� ������ ��Ÿ���� 1�ʸ��� �ڽ��� ��ġ�� ���ϰ���
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

//�ڽ��� Ŭ���Ǹ� ������ 10�� ������ �ڽ��� ��ġ�� ���ϰ� ��
box.click(function(){
	score = score + 10;
	scoreString = 'score : ' + score;
	scoreDiv.html(scoreString);
	moveBox();
});