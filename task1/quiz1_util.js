function beforeBtnClick(event){
//ó�� �������� �������� ���ư��� �ʰ� �ϱ� ���� if��
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
//������ �������� �������� �Ѿ�� �ʰ� �ϱ� ���� �κ�
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