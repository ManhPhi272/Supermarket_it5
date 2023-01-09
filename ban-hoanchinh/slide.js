/*slide*/
var count =1;
setInterval(function(){
    document.getElementById('img' + count).checked = true;
    count++;
    if(count > 6){
        count = 1;
    }
    
}, 4000);
/*shopping cart*/
var i = 0

function clickCounter() {
    i++ + 1;
    document.getElementById("result").innerHTML = "Giỏ hàng (" + i + ") sản phẩm.";
}
