// 01.確認所有超連結網址、圖片檔案名稱、商品名稱
// 02.確認所有商品數量
// 03.確認目前圖片檔案路徑
// 04.確認目前超連結網址
// 05.確認超連結、圖片、商品名稱id


$(function(){
			$("#showprev").bind("click", showprev);
			$("#shownext").bind("click", shownext);
		});
		
		// 01 
		var n = 0;
		var curimg, curname, curlink;
		var aryimgsrc = new Array("01.jpg","02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg");
		var aryproname = new Array("頂級麻質皮革長夾", "碎花束口袋-NEW", "尼泊爾大地圖騰絲巾", "尼泊爾彩虹萬用毯（大披肩）", "麻質萬用袋", "碎花小物包-NEW", "尼泊爾粗條紋絲巾", "尼泊爾彩虹斗篷");
		var aryprolink = new Array("136", "194", "167", "159", "41", "190","142", "160");

		function showprev(){
			n -- ;
			if(n<0) { n=7 };		// 02
			curimg = "images/waker/waker_product" + aryimgsrc[n];  // 03
			curname = aryproname[n];
			curlink = "https://www.waker.org.tw/ShopDetail.aspx?tid=52&id=" + aryprolink[n];	// 04
			// 05
			$("#proimg").attr("src", curimg);	 
			$("#proname").text(curname);
			$("#prolink").attr("href", curlink);
		};

		function shownext(){
			n ++ ;
			if(n>7) { n=0 };	 // 02
			curimg = "images/waker/waker_product" + aryimgsrc[n];  // 03
			curname = aryproname[n];
			curlink = "https://www.waker.org.tw/ShopDetail.aspx?tid=52&id=" + aryprolink[n];	// 04
			// 05
			$("#proimg").attr("src", curimg);
			$("#proname").text(curname);
			$("#prolink").attr("href", curlink);
		};