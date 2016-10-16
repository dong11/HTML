/**
 * Created by dong on 16/10/16.
 */
$(document).ready(function(){
    $("body").bind("click", bodyHandler);
    $("div").bind("click", divHandler1);
    $("div").bind("click", divHandler2);
});

function bodyHandler(e){
    console.log("body:" + e);
}

function divHandler1(e){
    console.log("div:" + e);
    //e.stopPropagation();
    e.stopImmediatePropagation(); //立刻截止冒泡,即阻断了divHandler2的执行
}

function divHandler2(e){
    console.log("div:" + e);
}