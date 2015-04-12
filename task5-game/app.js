var box = document.querySelectorAll('.box')[0];
var	score = 0;
var	scoreDiv = document.getElementById('score');

function randomNumber(endNum){
	return Math.floor(Math.random() * endNum) +1;
}

//�ڽ� ��ġ ���� �Լ�
function moveBox(){
	box.style.left = randomNumber(document.body.clientHeight) + 'px';
	box.style.top = randomNumber(document.body.clientWidth) + 'px';
}

//��ŸƮ ��ư�� ������ �ڽ��� ������ ��Ÿ���� 1�ʸ��� �ڽ��� ��ġ�� ���ϰ���
function start(){
	var startBtn = document.getElementById('start');
	startBtn.style.display = 'none';
	box.style.visibility = 'visible';
	scoreDiv.innerHTML = 'score : ' + score;
	box.style.left = randomNumber(document.body.clientWidth) + 'px';
	box.style.top = randomNumber(document.body.clientHeight) + 'px';
	setInterval(moveBox, 1000);
}

//�ڽ��� Ŭ���Ǹ� ������ 10�� ������ �ڽ��� ��ġ�� ���ϰ� ��
function boxClick(){
	score = score + 10;
	scoreDiv.innerHTML = 'score : ' + score;
	moveBox();
}

box.addEventListener('click', boxClick);