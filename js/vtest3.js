// window.opener=null;
// window.open('','_self','');
// window.close();
// $("#btn").on("click",function(){
// 	window.open("v-test3.html","_self")
// });
// $("#btn_cancel").on('click',function(){
// 	 window.location.href="about:blank";
//  window.close();
// });


window.onload = function() {
    $("#btn").click(function(){
            window.open("http://www.baidu.com");
        }
    );
    $("btn_cancel").click(function(){
    	window.parent.close();
    });
}