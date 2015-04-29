//버튼 div들의 id를 통해서 document객체를 받아옴
var serchBtn = $('#serchBtn');
var tabs = $('#tabs');
tabs.html('<ul  class=\"nav nav-tabs\" style=\"margin-top:30px\"><li id=\"board\" class=\"active\"><a href=\"\" onClick=\"typeSelect(board); return false;\">게시판</a></li><li id=\"vclip\"><a href=\"\" onClick=\"typeSelect(vclip); return false;\">동영상</a></li><li id=\"image\"><a href=\"\" onClick=\"typeSelect(image); return false;\">이미지</a></li><li id=\"knowledge\"><a href=\"\" onClick=\"typeSelect(knowledge); return false;\">팁</a></li><li id=\"blog\"><a href=\"\" onClick=\"typeSelect(blog); return false;\">블로그</a></li><li id=\"cafe\"><a href=\"\" onClick=\"typeSelect(cafe); return false;\">카페</a></li></ul>');
var moreBtn = $('#moreBtn');

//tabs에 있는 메뉴들(검색할 종류)을 id를 통해 document객체로 받아옴
var board = $('#board');
var vclip = $('#vclip');
var image = $('#image');
var knowledge = $('#knowledge');
var blog = $('#blog');
var cafe = $('#cafe');

//전역변수로 사용될 변수들을 초기화
var serchType = "board";	//검색종류 기본값으로 게시판설정
var serchStr = "";		//검색어 기본값 ""
var pageno=1;			//다음API검색시 검색할 page설정. 더보기 버튼 클릭시 다음 페이지로
var printList=0;		//출력한 총 갯수 확인. 총검색 결과와 비교하기 위한 변수


//검색할 종류를 선택했을 때 css변화 및 검색종류변수(serchType)을 바꿔주기 위한 함수
function typeSelect(type){
	serchType = type.id;
	if(serchType=="board"){
		tabs.html('<ul  class=\"nav nav-tabs\" style=\"margin-top:30px\"><li id=\"board\" class=\"active\"><a href=\"\" onClick=\"typeSelect(board); return false;\">게시판</a></li><li id=\"vclip\"><a href=\"\" onClick=\"typeSelect(vclip); return false;\">동영상</a></li><li id=\"image\"><a href=\"\" onClick=\"typeSelect(image); return false;\">이미지</a></li><li id=\"knowledge\"><a href=\"\" onClick=\"typeSelect(knowledge); return false;\">팁</a></li><li id=\"blog\"><a href=\"\" onClick=\"typeSelect(blog); return false;\">블로그</a></li><li id=\"cafe\"><a href=\"\" onClick=\"typeSelect(cafe); return false;\">카페</a></li></ul>');
	}
	else if(serchType=="vclip"){
		tabs.html('<ul  class=\"nav nav-tabs\" style=\"margin-top:30px\"><li id=\"board\"><a href=\"\" onClick=\"typeSelect(board); return false;\">게시판</a></li><li id=\"vclip\" class=\"active\"><a href=\"\" onClick=\"typeSelect(vclip); return false;\">동영상</a></li><li id=\"image\"><a href=\"\" onClick=\"typeSelect(image); return false;\">이미지</a></li><li id=\"knowledge\"><a href=\"\" onClick=\"typeSelect(knowledge); return false;\">팁</a></li><li id=\"blog\"><a href=\"\" onClick=\"typeSelect(blog); return false;\">블로그</a></li><li id=\"cafe\"><a href=\"\" onClick=\"typeSelect(cafe); return false;\">카페</a></li></ul>');
	}
	else if(serchType=="image"){
		tabs.html('<ul  class=\"nav nav-tabs\" style=\"margin-top:30px\"><li id=\"board\"><a href=\"\" onClick=\"typeSelect(board); return false;\">게시판</a></li><li id=\"vclip\"><a href=\"\" onClick=\"typeSelect(vclip); return false;\">동영상</a></li><li id=\"image\" class=\"active\"><a href=\"\" onClick=\"typeSelect(image); return false;\">이미지</a></li><li id=\"knowledge\"><a href=\"\" onClick=\"typeSelect(knowledge); return false;\">팁</a></li><li id=\"blog\"><a href=\"\" onClick=\"typeSelect(blog); return false;\">블로그</a></li><li id=\"cafe\"><a href=\"\" onClick=\"typeSelect(cafe); return false;\">카페</a></li></ul>');
	}
	else if(serchType=="knowledge"){
		tabs.html('<ul  class=\"nav nav-tabs\" style=\"margin-top:30px\"><li id=\"board\"><a href=\"\" onClick=\"typeSelect(board); return false;\">게시판</a></li><li id=\"vclip\"><a href=\"\" onClick=\"typeSelect(vclip); return false;\">동영상</a></li><li id=\"image\"><a href=\"\" onClick=\"typeSelect(image); return false;\">이미지</a></li><li id=\"knowledge\" class=\"active\"><a href=\"\" onClick=\"typeSelect(knowledge); return false;\">팁</a></li><li id=\"blog\"><a href=\"\" onClick=\"typeSelect(blog); return false;\">블로그</a></li><li id=\"cafe\"><a href=\"\" onClick=\"typeSelect(cafe); return false;\">카페</a></li></ul>');
	}
	else if(serchType=="blog"){
		tabs.html('<ul  class=\"nav nav-tabs\" style=\"margin-top:30px\"><li id=\"board\"><a href=\"\" onClick=\"typeSelect(board); return false;\">게시판</a></li><li id=\"vclip\"><a href=\"\" onClick=\"typeSelect(vclip); return false;\">동영상</a></li><li id=\"image\"><a href=\"\" onClick=\"typeSelect(image); return false;\">이미지</a></li><li id=\"knowledge\"><a href=\"\" onClick=\"typeSelect(knowledge); return false;\">팁</a></li><li id=\"blog\" class=\"active\"><a href=\"\" onClick=\"typeSelect(blog); return false;\">블로그</a></li><li id=\"cafe\"><a href=\"\" onClick=\"typeSelect(cafe); return false;\">카페</a></li></ul>');
	}
	else{
		tabs.html('<ul  class=\"nav nav-tabs\" style=\"margin-top:30px\"><li id=\"board\"><a href=\"\" onClick=\"typeSelect(board); return false;\">게시판</a></li><li id=\"vclip\"><a href=\"\" onClick=\"typeSelect(vclip); return false;\">동영상</a></li><li id=\"image\"><a href=\"\" onClick=\"typeSelect(image); return false;\">이미지</a></li><li id=\"knowledge\"><a href=\"\" onClick=\"typeSelect(knowledge); return false;\">팁</a></li><li id=\"blog\"><a href=\"\" onClick=\"typeSelect(blog); return false;\">블로그</a></li><li id=\"cafe\" class=\"active\"><a href=\"\" onClick=\"typeSelect(cafe); return false;\">카페</a></li></ul>');
	}
	Serch(); //변수 및 css변화 후 검색
}


	//검색버튼을 누르거나 검색종류를 변경했을때 실행되는 함수
serchBtn.click(function(){
	pageno = 1;  	//새로 검색하는 것이기 때문에 pageno는1로, 출력개순느 0으로 초기화
	printList = 0;
	serchStr = $('#serchString').val();
	if(serchStr == ""){
		window.alert("검색어를 넣어주세요.");
		return;
	}

	var url = 'https://apis.daum.net/search/'+serchType+'?apikey=8fb3afd720609e3fb1001fca794a9b1d&q='+serchStr+'&pageno='+pageno+'&output=json';
    getJSON(url , function(list){
		console.log(list);

		var print = $('#print');
		var str = '';
		//검색 종류가 image일 때와 동영상일 때는 image또한 json에 있기 때문에 image일때와 동영상일 때, 그 외의 경우를 if문으로 구분해서 화면에 출력
		if(serchType=="image"){
			for(var i=0; i<list.channel.item.length; i++, printList++){
				str += '<li><a href=\"'+list.channel.item[i].link+'\"><img src=\"'+list.channel.item[i].image+'\" width=\"100\">'+list.channel.item[i].title+'</a></li>';
			}
		}
		else if(serchType=="vclip"){
			for(var i=0; i<list.channel.item.length; i++, printList++){
				str += '<li><a href=\"'+list.channel.item[i].link+'\"><img src=\"'+list.channel.item[i].thumbnail+'\" width=\"100\">'+list.channel.item[i].title+'</a></li>';
			}
		}
		else{
			for(var i=0; i<list.channel.item.length; i++, printList++){
				str += '<li><a href=\"'+list.channel.item[i].link+'\">'+list.channel.item[i].title+'</a></li>';
			}
		}
		print.html(str);		//새로 검색하는 것이기 때문에 print의 innerHTML을 모두 새로 초기화

		//화면에 출력된 데이터보다 받아온 데이터가 더 많을 경우에는 '더보기'버튼 출력
		if(list.channel.pageCount>printList){
			moreBtn.html('<button class=\"btn btn-default btn-block\" onClick=\"moreBtnClick()\">더보기</button>');
		}
		else{
			moreBtn.html("");
		}
    });

	
  });

	//더보기 버튼을 클릭 했을 때를 위한 함수
  function moreBtnClick(){
	pageno++;	//더보기를 클릭했기 때문에 다음페이지와 비교
	var url = 'https://apis.daum.net/search/'+serchType+'?apikey=8fb3afd720609e3fb1001fca794a9b1d&q='+serchStr+'&pageno='+pageno+'&output=json';
    getJSON(url , function(list){
    console.log(list);

    var print = $('#print');
    var str = '';
	//검색 종류가 image일 때와 동영상일 때는 image또한 json에 있기 때문에 image일때와 동영상일 때, 그 외의 경우를 if문으로 구분해서 화면에 출력
	if(serchType=="image"){
		for(var i=0; i<list.channel.item.length; i++, printList++){
		    str += '<li><a href=\"'+list.channel.item[i].link+'\"><img src=\"'+list.channel.item[i].image+'\" width=\"100\">'+list.channel.item[i].title+'</a></li>';
		}
	}
	else if(serchType=="vclip"){
		for(var i=0; i<list.channel.item.length; i++, printList++){
		    str += '<li><a href=\"'+list.channel.item[i].link+'\"><img src=\"'+list.channel.item[i].thumbnail+'\" width=\"100\">'+list.channel.item[i].title+'</a></li>';
		}
	}
	else{
		for(var i=0; i<list.channel.item.length; i++, printList++){
		    str += '<li><a href=\"'+list.channel.item[i].link+'\">'+list.channel.item[i].title+'</a></li>';
		}
	}
    print.innerHTML += str;	//더보기 이기 때문에 기존에 출력된 데이터는 남기고 그 뒤에 +로 출력

	//화면에 출력된 데이터보다 받아온 데이터가 더 많을 경우에는 '더보기'버튼 출력
	if(list.channel.pageCount>printList){
		moreBtn.html('<button class=\"btn btn-default btn-block\" onClick=\"moreBtnClick()\">더보기</button>');
	}
	else{
		moreBtn.html("");
	}
    });

  }