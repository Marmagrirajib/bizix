$(document).ready(function () {
    
/*
 ==============================================
 sticky menu  
 ==============================================
 */  

$(".about-js-section").waypoint(function(valu){
    if(valu == "down"){
        $("nav").addClass("sticky");
    }else{
    $("nav").removeClass("sticky")
    }
 });


 new WOW().init();
/*
 ==============================================
 testimonial section  
 ==============================================
 */  

 







});








/*
 ==============================================
  responsive menu  js code
 ==============================================
 */ 
const openmenu=document.querySelector(".open-menu span");
const closebtn=document.querySelector(".menu-and-btn");
const closemenu=document.querySelector(".close-menu");


openmenu.addEventListener("click",function(){
    closebtn.style.left="0%";
    openmenu.style.display="none";
    closemenu.style.display="block";
});

closebtn.addEventListener("click",function(){
    closebtn.style.left="-100%";
    openmenu.style.display="block";
    closemenu.style.display="none";
    
});

closemenu.addEventListener("click",function(){
    closebtn.style.left="-100%";
    closemenu.style.display="none";
    openmenu.style.display="block";
    
});
