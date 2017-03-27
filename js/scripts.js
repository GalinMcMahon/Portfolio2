$(document).ready(function(){
   $(".btn1").click(function(){
       $(".panelAbout .panel-body").slideUp();
   });
   $(".btn2").click(function(){
       $(".panelAbout .panel-body").slideDown(function() {
         $(".panelResume .panel-body").slideUp();
         $(".panelInterests .panel-body").slideUp();
       });
   });

   $(".btn3").click(function(){
       $(".panelResume .panel-body").slideUp();
   });
   $(".btn4").click(function(){
       $(".panelResume .panel-body").slideDown(function() {
         $(".panelAbout .panel-body").slideUp();
         $(".panelInterests .panel-body").slideUp();
       });
   });

   $(".btn5").click(function(){
       $(".panelInterests .panel-body").slideUp()
   });
   $(".btn6").click(function(){
       $(".panelInterests .panel-body").slideDown(function() {
       $(".panelAbout .panel-body").slideUp();
       $(".panelResume .panel-body").slideUp();
   });
 });
});
