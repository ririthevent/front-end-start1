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
		document.getElementById(id).style.backgroundColor = "red";		//붉은색이 아니면 붉은색으로 변화
	}
	else{
		document.getElementById(id).style.backgroundColor = document.getElementById(id).className;	//붉은색이면 원래색(클래스 이름)으로 변화
	}
}