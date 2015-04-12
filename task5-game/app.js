function randomNumber(endNum){
	return Math.floor(Math.random() * endNum) +1;
}

var box = document.querySelectorAll('.box')[0];
var x = randomNumber(document.body.clientWidth);
var y = randomNumber(document.body.clientHeight);
var score = 0;
var scoreDiv = document.getElementById('score');

scoreDiv.innerHTML = 'score : ' + score;

box.style.left = x + 'px';
box.style.top = y + 'px';

function moveBox(){
	x = randomNumber(document.body.clientWidth);
	y = randomNumber(document.body.clientHeight);
	box.style.left = x + 'px';
	box.style.top = y + 'px';
}

function startMove(){
	score = score + 10;
	scoreDiv.innerHTML = 'score : ' + score;
	moveBox();
}

box.addEventListener('click', startMove);