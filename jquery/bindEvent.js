/**
 * Created by dong on 16/10/16.
 */
$(document).ready(function(){
    //当需要点击时间过多的时候, 会消耗内存
    /*$("#clickMeBtn").click(function(){
        alert("hello");
    });*/

    //bind:绑定事件
    $("#clickMeBtn").bind("click", clickHandler1);
    $("#clickMeBtn").bind("click", clickHandler2);

    //unbind:解除绑定事件
    //$("#clickMeBtn").unbind("click", clickHandler2); //解除绑定clickHandler2
    $("#clickMeBtn").unbind("click"); //解除全部绑定

});

function clickHandler1(e){
    console.log("clickHandler1");
}
function clickHandler2(e){
    console.log("clickHandler2");
}