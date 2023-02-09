for(let i = 0;i<100;i++){
  $("ul").append("<li>"+i+"</li>");
} 
let scl = 0;
// $("div").scrollTop("scroll",function(){
//   scl-=10;
//   $("ul").css("top",scl+"px");
//   console.log(scl+"px");

// })
$(window).scroll(function() {
  const scl =$('div').offset().top;
  $("ul").css("top",-scl+"px");
  console.log(-scl);
})