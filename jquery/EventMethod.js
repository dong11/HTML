/**
 * Created by dong on 16/10/16.
 */
$(document).ready(function(){
    //单击隐藏
    /*$("button").click(function(){
        $(this).hide();
    });*/

    //双击隐藏
    /*$("button").dblclick(function(){
        $(this).hide();
    });*/

    //鼠标进入隐藏
    /*$("button").mouseenter(function(){
        $(this).hide();
    });*/

    //鼠标移开隐藏
    $("button").mouseleave(function(){
        $(this).hide();
    });
});