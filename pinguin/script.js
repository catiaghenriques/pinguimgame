/*    
        @licstart  The following is the entire license notice for this page.

        Copyright (C) 2015  Carlos J. Costa

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
*/

    var MaxHeight, MaxWidth, YPos, XPos, interval1, interval2, interval3, interval4, moveTo, pontos, peixe1, peixe2, peixe3, peixe4 , peixe5, peixe6, peixe, peixe8;

function init(){
	YPos = -500;
	XPos = -500;
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	pontos=0;
	peixe1 = false;
	peixe2 = false;
	peixe3 = false;
	peixe4 = false;
	peixe5 = false;
	peixe6 = false;
	peixe7 = false;
	peixe8 = false;
}
function move(){
	if ((YPos >= 0)||(YPos <= -700)||(XPos >= 0)||(XPos >= MaxHeight)) {
	    stop();
	}

        toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	document.getElementById("pos").innerHTML=toMove.style.backgroundPosition;
        
        //Verificacao para entrar no castelo
        if ((YPos<=-275)&&(YPos>=-328)&&(XPos<=-342)&&(XPos>=-405)) {
            toMove.style.background = "url('castle.png')";
        };
        
        if(peixe1 == false){
            if ((YPos<=-603)&&(YPos>=-633)&&(XPos<=-350)&&(XPos>=-388)) {
                peixe1 = true;
                pontos += 10;
    
                document.getElementById("pontos").innerHTML=pontos + 'pontos';
            };
        }
        
        if(peixe2 == false){
            if ((YPos<=-573)&&(YPos>=-605)&&(XPos<=-568)&&(XPos>=-611)) {
                peixe2 = true;
                pontos += 10;                
                document.getElementById("pontos").innerHTML=pontos + 'pontos';
            };
        }
        
        if(peixe3 == false){
            if ((YPos<=-337)&&(YPos>=-367)&&(XPos<=-309)&&(XPos>=-341)) {
                peixe3 = true;
                pontos += 20;                
                document.getElementById("pontos").innerHTML=pontos + 'pontos';
            };
        }
        
        if(peixe4 == false){
            if ((YPos<=-488)&&(YPos>=-518)&&(XPos<=-97)&&(XPos>=-139)) {
                peixe4 = true;
                pontos += 10;
                document.getElementById("pontos").innerHTML=pontos + 'pontos';
            };
        }
        
        if(peixe5 == false){
            if ((YPos<=-229)&&(YPos>=-259)&&(XPos<=-218)&&(XPos>=-262)) {
                peixe5 = true;
                pontos += 10;
                document.getElementById("pontos").innerHTML=pontos + 'pontos';
            };
        }
        
        if(peixe6 == false){
            if ((YPos<=-98)&&(YPos>=-137)&&(XPos<=-112)&&(XPos>=-153)) {
                peixe6 = true;
                pontos += 10;
                document.getElementById("pontos").innerHTML=pontos + 'pontos';
            };
        }
        
        if(peixe7 == false){
            if ((YPos<=-31)&&(YPos>=-64)&&(XPos<=-338)&&(XPos>=-379)) {
                peixe7 = true;
                pontos += 10;
                document.getElementById("pontos").innerHTML=pontos + 'pontos';
            };
        }
        
        if(peixe8 == false){
            if ((YPos<=-218)&&(YPos>=-258)&&(XPos<=-536)&&(XPos>=-589)) {
                peixe8 = true;
                pontos += 10;
                document.getElementById("pontos").innerHTML=pontos + 'pontos';
            };
        }
        
};
function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos--;        
	move();

};
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos++;        
	move();
};
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos--;        
	move();
};
function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos++;        
	move();
};

function moveB() {
	stop(); 
	interval1 = setInterval(moveBx, 10);
};
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 10);
};
function moveD() {
	stop();	
	interval2 = setInterval(moveDir, 10);
};
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 10);
};
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
};
window.onload =init;

function Key(e) {
    if (e.keyCode===37) moveE();
    if (e.keyCode===38) moveC();
    if (e.keyCode===39) moveD();
    if (e.keyCode===40) moveB();
    if (e.keyCode===32) stop();
}