var canvas = new fabric.Canvas("myCanvas");
playerX = 123;
playerY = 70;
blocoheight = 60;
blocowidth = 60;
var playerobject = "";
var blocoobject = "";

function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject = Img;
        playerobject.scaleToWidth(20);
        playerobject.scaleToHeight(70);
        playerobject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerobject);
    });
};
function newimage(getimage){
    fabric.Image.fromURL(getimage, function(img){
    blocoobject= img;
    blocoobject.scaleToHeight(blocoheight);
    blocoobject.scaleToWidth(blocowidth);
    blocoobject.set({
        top:playerY,
        left:playerX
    });
    canvas.add(blocoobject);
    });  
};
window.addEventListener("keydown",mykeypressed);
function mykeypressed(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed=="80" && e.shiftKey== true){
        blocoheight=blocoheight+10;
        blocowidth=blocowidth+10;
        document.getElementById("larguraatual").innerHTML=blocowidth;
        document.getElementById("alturaatual").innerHTML=blocoheight;
    };
    if(keypressed=="77" && e.shiftKey== true){
        blocoheight=blocoheight-10;
        blocowidth=blocowidth-10;
        document.getElementById("larguraatual").innerHTML=blocowidth;
        document.getElementById("alturaatual").innerHTML=blocoheight;
    };
    if(keypressed=="84"){
        newimage("trunk.jpg");
        console.log("t")
    };
    if(keypressed=="86"){
        newimage("dark_green.png");
    }
    if(keypressed=="67"){
        newimage("light_green.png");
    };
    if(keypressed=="71"){
        newimage("ground.png");
    };
    if(keypressed=="87"){
        newimage("wall.jpg");
    };
    if(keypressed=="89"){
        newimage("yellow_wall.png");
    };
    if(keypressed=="82"){
        newimage("roof.jpg");
    };
    if(keypressed=="78"){
        newimage("cloud.jpg");
    };
    if(keypressed=="85"){
        newimage("unique.png");
    };
    if(keypressed=="38"){
        cima();
    };
    if(keypressed=="40"){
        baixo();
    };
    if(keypressed=="37"){
        esquerda();
    };
    if(keypressed=="39"){
        direita();
    };
};
function cima(){
    if(playerY>=0){
        playerY=playerY-blocoheight;
        canvas.remove(playerobject);
        playerupdate();
    };
};
function baixo(){
    if(playerY<=500){
        playerY=playerY+blocoheight;
        canvas.remove(playerobject);
        playerupdate();
    };
};
function esquerda(){
    if(playerX>=0){
        playerX=playerX-blocowidth;
        canvas.remove(playerobject);
        playerupdate();
    };
};
function direita(){
    if(playerX<=850){
        playerX=playerX+blocowidth;
        canvas.remove(playerobject);
        playerupdate();
    };
};