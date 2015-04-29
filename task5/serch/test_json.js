var getJSON = (function(){
 
  var unique = 0;
  
  return function(url, callback, context) {
    
	//JSON�� �޾ƿ��� �۾��� ���۵Ǹ� loadingImage�� ȭ�鿡 ���
	var loadingImage=document.getElementById('loadingImage');
    loadingImage.innerHTML='<img src=\"ajax-loader.gif\">';


    var name = "_jsonp_" + unique++;
    if (url.match(/\?/)) url += "&callback="+name;
    else url += "?callback="+name;

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    window[name] = function(data){
      callback.call((context || window), data);
      document.getElementsByTagName('head')[0].removeChild(script);
      script = null;
      delete window[name];
    };

    document.getElementsByTagName('head')[0].appendChild(script);

	//JSON�� �޾ƿ��� �۾��� �� �� loadingImage�� ����
	setTimeout(function(){loadingImage.innerHTML="";},1000);
  };
})();