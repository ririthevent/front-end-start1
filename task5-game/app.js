var box = document.querySelectorAll('.box')[0];
var	score = 0;
var	scoreDiv = document.getElementById('score');

function randomNumber(endNum){
	return Math.floor(Math.random() * endNum) +1;
}

//박스 위치 변경 함수
function moveBox(){
	box.style.left = randomNumber(document.body.clientHeight) + 'px';
	box.style.top = randomNumber(document.body.clientWidth) + 'px';
}

//스타트 버튼을 누르면 박스와 점수가 나타나고 1초마다 박스의 위치가 변하게함
function start(){
	var startBtn = document.getElementById('start');
	startBtn.style.display = 'none';
	box.style.visibility = 'visible';
	scoreDiv.innerHTML = 'score : ' + score;
	box.style.left = randomNumber(document.body.clientWidth) + 'px';
	box.style.top = randomNumber(document.body.clientHeight) + 'px';
	setInterval(moveBox, 1000);
}

//박스가 클릭되면 점수가 10점 오르고 박스의 위치가 변하게 함
function boxClick(){
	score = score + 10;
	scoreDiv.innerHTML = 'score : ' + score;
	moveBox();
}

box.addEventListener('click', boxClick);