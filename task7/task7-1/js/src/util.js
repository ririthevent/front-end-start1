


(function(app) {

  app.util = {
    uniqId: function() {
      return new Date().getTime();
    },
	//저장한 날짜의 년, 월, 일을 구하기 위한 함수
	getDate : function() {
		var today = new Date();
		var year = today.getFullYear();
		var month = today.getMonth()+1;
		var day = today.getDate();
		var DateString = year+'-'+month+'-'+day;
		return DateString;
	},
    storage : {
      load: function () {
        console.log('storage.load()');
        return JSON.parse(localStorage.getItem(app.storageKey) || "[]");
      },
      save: function (event, data) {
        console.log('storage.save()');
        localStorage.setItem(app.storageKey, JSON.stringify(data));
		data[data.length-1].complete = true;			//저장한 후 complete를 true로 변경
      }
    }
  };


  app.$wrap.on('addCollection', app.util.storage.save);
  app.$wrap.on('removeCollection', app.util.storage.save);

})(Todo);

