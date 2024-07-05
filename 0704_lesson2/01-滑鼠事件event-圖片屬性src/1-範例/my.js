var TT = document.getElementById('tt')
var PP = document.getElementById('pp')

document.getElementById('btn1').onclick = aaa;
document.getElementById('btn2').onclick = bbb;

function aaa() {
    TT.innerHTML = '小王綠'
    PP.src = './girl01.jpg'
}
 
function bbb() {
    TT.innerHTML = '腦殘粉'
    PP.src = './girl02.jpg'
}