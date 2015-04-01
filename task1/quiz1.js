    var max = (todayPhoto.length + 1) / 3;
    var current = 0;
    max = parseInt(max);
	var page = document.getElementById('page');
    var beforeBtn = document.getElementById('beforeBtn');
    var nextBtn = document.getElementById('nextBtn');
    var template = document.getElementById('photoTemplate').innerHTML;
    var main = document.getElementById('main');
    var str = '';
    for(var i=0; i<=2; i++){
        str += tmpl(template, {photo :  todayPhoto[i]});
    }
    main.innerHTML = str;
	var pageStr = '';
	var currentPage = current+1;
	var pageStr = currentPage + ' / ' + max;
	page.innerHTML = pageStr;



    beforeBtn.addEventListener("click", beforeBtnClick);
    nextBtn.addEventListener("click", nextBtnClick);
