// 01.確認所有超連結網址、圖片檔案名稱、商品名稱
// 02.確認所有商品數量
// 03.確認目前超連結網址
// 04.確認目前圖片檔案路徑
// 05.確認超連結、圖片、商品名稱id
// 06.確認商品輪播撥放速度

var index = 0;
//01
var aryhref = new Array("136", "194", "167", "159", "41", "190");
var aryimg = new Array("01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg");
var aryname = new Array("頂級麻質皮革長夾", "碎花束口袋-NEW", "尼泊爾大地圖騰絲巾", "尼泊爾彩虹萬用毯（大披肩）", "麻質萬用袋", "碎花小物包-NEW");
var curhref, curimg, curname;
$(function(){
	setInterval(function(){
		index ++;
		if(index > 5){  //02
			index = 0;
		}
		curhref = "https://www.waker.org.tw/ShopDetail.aspx?tid=52&id=" + aryhref[index];	//03
		curimg = "images/waker/waker_product" + aryimg[index];	//04
		curname = aryname[index];
		//05
		$("#adhref").attr("href", curhref);
		$("#adimg").attr("src", curimg);  
		$("#adname").text(curname);
	}, 2000);  //06
});