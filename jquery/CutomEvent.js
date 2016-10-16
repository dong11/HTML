/**
 * Created by dong on 16/10/16.
 */
$(document).ready(function(){
    $("#clickMeBtn").click(function(){
        var e = jQuery.Event("MyEvent");
        $("#clickMeBtn").trigger(e);
    });

    $("#clickMeBtn").bind("MyEvent", function(e){
        console.log(e);
    });
});