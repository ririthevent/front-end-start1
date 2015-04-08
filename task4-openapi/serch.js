  var serchBtn = document.getElementById('serch');
  var page = 5;
  function serchBtnClick(event){
	var page = 5;
	var serchStr = document.getElementById('serchString').value;
	var url = 'https://apis.daum.net/search/web?apikey=8fb3afd720609e3fb1001fca794a9b1d&q='+serchStr+'&result=50&output=json';
    getJSON(url , function(list){
    console.log(list);

    var template = document.getElementById('serchTemplate').innerHTML;
    var wrap = document.getElementById('wrap');
    var str = '';
    for(var i=0; (i<list.channel.item.length)&&(i<page); i++){
        str += tmpl(template, {serch :  list.channel.item[i]});
    }
    wrap.innerHTML = str;
	wrap.innerHTML += '<button id=\"more\" onClick=\"moreBtn()\">more</button>';
    });
  }

    function moreBtn(){
	page = page +5;
	var serchStr = document.getElementById('serchString').value;
	var url = 'https://apis.daum.net/search/web?apikey=8fb3afd720609e3fb1001fca794a9b1d&q='+serchStr+'&result=50&output=json';
    getJSON(url , function(list){
    var template = document.getElementById('serchTemplate').innerHTML;
    var wrap = document.getElementById('wrap');
    var str = '';
    for(var i=0; (i<list.channel.item.length)&&(i<page); i++){
        str += tmpl(template, {serch :  list.channel.item[i]});
    }
    wrap.innerHTML = str;
    wrap.innerHTML += '<button id=\"more\" onClick=\"moreBtn()\">more</button>';
	});
	}

  serchBtn.addEventListener("click", serchBtnClick);