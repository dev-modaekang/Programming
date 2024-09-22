// Ctrl + / = single comment
// Art + Shift + A = all comment\

/*  ==============================
    ## Selector ##
    ==============================*/
document.getElementById('hello').innerHTML = 'Hello';   // change the content
document.getElementById('hello').style.color = 'red';   // change the color
// webdocument(.) HTML element . 내부글자

document.getElementById('hi').innerHTML = 'Nice to meet you';   // change the content
// selector = document.getElemntById('XXXXX')
document.getElementById('hi').style.fontsize = '30px';          // change the font size to 30px.


/*  ==============================
    ## Color Alert Box ##
    ==============================*/
let blueBox = document.getElementById('alert-blue');
let redBox = document.getElementById('alert-red');
let greenBox = document.getElementById('alert-green');
let yellowBox = document.getElementById('alert-yellow');

function AlertBoxBlue(val) {
    blueBox.style.display = val;
}
function AlertBoxRed(val) {
    redBox.style.display = val;
}
function AlertBoxGreen(val) {
    greenBox.style.display = val;
}
function AlertBoxYellow(val) {
    yellowBox.style.display = val;
}


/*  ==============================
    ## Alert Boxes for ID and Password ##
    ==============================*/
let box1 = document.getElementById('alert-box1');
let id1 = document.getElementById('id1');

function AlertBox(content, val){
    id1.innerHTML = content;
    box1.style.display = val;
} 


/*  ==============================
    ## EventListener  ##
    ==============================*/

let box2 = document.getElementById('alert-box2');
let id2 = document.getElementById('id2');

// when we click(called 'event') the "closed" element, run the function.
// event: click, keydown, scroll, mouseover, etc...
document.getElementById('Close').addEventListener('click', function() {
    box2.style.display = 'none';
}); 

document.getElementById('checkID').addEventListener('click', function() {
    box2.style.display = 'block';
    id2.innerHTML = 'No ID. Please put the ID';
}); 

document.getElementById('checkPW').addEventListener('click', function() {
    box2.style.display = 'block';
    id2.innerHTML = 'No Password. Please put the Password';
}); 


/*  ==============================
    ## jQuery  ##
    ==============================*/

// modify content (document.getElementById('test').innerHTML = '???')
$('#test1').html();
$('#test2').html('Nice to meet you');
$('#test2').css('color', 'blue');
$('#test3').attr('href', './index.html'); // change the src = 'xxx.jpg'. we can use any other things href, etc...
$('#test4').addClass('yellow-bg');
