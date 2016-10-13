/**
 * Created by dong on 16/7/8.
 */
$(document).ready(
    function(){
        //在这里调用外面的函数
        console.log(add(1,1));
    });

//封装document.write
function print(obj){
    document.write(obj);
    document.write("<br>");
}

//简单的示例方法
function add(left, right){
    return left + right;
}
