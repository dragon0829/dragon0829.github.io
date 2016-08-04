window.onload =function (argument) {
// 轮播图部分s
var mySwiper = new Swiper('.swiper-container',{
	autoplay : 2000,
	loop : true,
	pagination : '.swiper-pagination',
	paginationHide :false,
	autoplayDisableOnInteraction: false
});
// 轮播图部分e

//search智能提示s
$(".inp").keyup(function(){
    var value = $(this).val();
    var url  = 'https://suggest.taobao.com/sug?code=utf-8&_ksTS=1468573812937_30235&k=1&bucketid=16&area=c2c';
    url += "&q="+value;
    $.ajax({
        type:"get",
        dataType:"jsonp",
        url:url ,
        success:function show(obj){
           var result = obj.result;
           var str = "";
           for(var i = 0 ; i < result.length ;  i++)
           {
               str += "<li>"+result[i][0]+"</li>";
           }
           $(".showList").html(str);
       }
    })
});
$(".inp").keyup(function () {
	$(".showList").slideDown(500,function () {
	});
}).blur(function () {
	$(".showList").slideUp(500,function () {
	});
});
//$(".showList ul li").click().css("background":"#ccc","color":"#fff")
//search智能提示s




}
