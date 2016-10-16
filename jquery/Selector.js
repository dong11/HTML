/**
 * Created by dong on 16/10/16.
 */
$(document).ready(function(){
    $("button").click(function(){
        //#:代表id   . : 代表class
        $("p").text("p元素被修改了");
        $("#p1").text("p1元素被修改了");
        $(".p3").text("p3元素被修改了");
    });
});