var PIC = document.getElementById('pic');
var N = 0;

PIC.onmouseover = aaa;
PIC.onmouseout = bbb;
PIC.onmousedown = ccc;
PIC.onmouseup = ddd;

function aaa() {
    this.src ='./img/p1.png'
}
 
function bbb() {
    this.src = './img/p2.png'
}

function ccc() {
    N = N + 1
    this.src = './img/p3.png'
    document.getElementById('tt').innerHTML = N;
}

function ddd() {
    this.src = './img/p2.png'
}