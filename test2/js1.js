function f1(){
alert('hello');
}
//window.onload表示当整个html文档全部解析完毕，
//也就是说整个dom树已经生成之后，浏览器会产生一个load事件
window.onload = function(){
var obj = document.getElementById('b1');
obj.onclick = f1;
};
//load事件不是用户参与产生的，是浏览器自己产生的
//下面事件是用于触发的
//click  blur  mouseover submit change  