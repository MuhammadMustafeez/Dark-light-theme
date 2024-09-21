var color = document.getElementById("color_change");
var body = document.getElementById("body");
var isDark=false;

color.addEventListener("click",function(){
    if(isDark === false){
        body.style.backgroundColor="black";
        color.style.backgroundColor="white";
        color.style.color="black";
        document.getElementById("color_change").innerHTML="Light";
        // document.getElementById("color_change").style.boxShadow = "10px 20px 30px white";
        isDark=true;
    }
    else if(isDark === true){
        body.style.backgroundColor="White";
        color.style.backgroundColor="black";
        color.style.color="white";
        document.getElementById("color_change").innerHTML="Dark";
        // document.getElementById("color_change").style.boxShadow = "10px 20px 30px black";
        isDark=false;
    } 

});