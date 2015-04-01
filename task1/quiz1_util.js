function beforeBtnClick(event){
//처음 페이지면 이전으로 돌아가지 않게 하기 위한 if문
  if(current <= 0) {
    current = 0;
    return ;
  }
  current = current - 1;
  var str = '';
  main.innerHTML = '';
  for(var i=current*3; i<=current*3+2; i++){
    str += tmpl(template, {photo :  todayPhoto[i]});
  }
  main.innerHTML = str;
  var pageStr = '';
  var currentPage = current+1;
  var pageStr = currentPage + ' / ' + max;
  page.innerHTML = pageStr;
}

function nextBtnClick(event) {
//마지막 페이지면 다음으로 넘어가지 않게 하기 위한 부분
    current = current + 1;
  if(current >= max) {
    current = max-1;
    return ;
  }

  var str = '';
  main.innerHTML = '';
  for(var i=current*3; (i<=current*3+2)&&(i<todayPhoto.length); i++){
    str += tmpl(template, {photo :  todayPhoto[i]});
  }
  main.innerHTML = str;
  var pageStr = '';
	var currentPage = current+1;
	var pageStr = currentPage + ' / ' + max;
	page.innerHTML = pageStr;
}