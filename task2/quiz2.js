var board = document.getElementById("board"); 
for(var i=0; i<4; i++){ 
    for(var j=0; j<4; j++){ 
		if((i+j)%2==0){
			board.innerHTML += "<span class=\"black\" id=\""+i+"and"+j+"\" onclick=\"setColor(\'"+i+"and"+j+"\')\"></span>";
		}
		else{
			board.innerHTML += "<span class=\"white\" id=\""+i+"and"+j+"\" onclick=\"setColor(\'"+i+"and"+j+"\')\"></span>";
		}
   } 
}

function setColor(id){
	var color = document.getElementById(id).style.backgroundColor;
	if(color!="red"){
		document.getElementById(id).style.backgroundColor = "red";		//�������� �ƴϸ� ���������� ��ȭ
	}
	else{
		document.getElementById(id).style.backgroundColor = document.getElementById(id).className;	//�������̸� ������(Ŭ���� �̸�)���� ��ȭ
	}
}