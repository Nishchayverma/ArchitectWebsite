// const logo=document.querySelectorAll("#logo path");

// for(let i=0; i<logo.length;i++)
// console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);



// residence
document.addEventListener('DOMContentLoaded',backKey);
function backKey(){
document.body.addEventListener('keydown', function(event){
  console.log("working");
  if(event.which== 27){
  console.log("working");
  window.history.back();
  }

}); 
}
  //Back to top
  window.addEventListener('scroll',function(){
    var scroll =document.querySelector('.back-to-top');
    if(window.innerWidth< 768)
    scroll.classList.toggle("active", window.scrollY > 1000)
    else
    scroll.classList.toggle("active", window.scrollY > 2000)
  })
  function scrollToTop() {
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    })
}


  //LightBox
  function openLightBox() {
    document.getElementById("mylightbox").style.display = "block";
    document.getElementById("light-image1").src="images/residence/high-quality/carousel-one.jpg";
    document.getElementById("light-image2").src="images/residence/high-quality/carousel-two.jpg";
    document.getElementById("light-image3").src="images/residence/high-quality/carousel-three.jpg";
    document.getElementById("light-image4").src="images/residence/high-quality/carousel-four.jpg";
    document.getElementById("light-image5").src="images/residence/high-quality/carousel-five.jpg";
    document.getElementById("light-image6").src="images/residence/high-quality/carousel-six.jpg";
    document.getElementById("light-image7").src="images/residence/high-quality/gallery-one.jpg";
    document.getElementById("light-image8").src="images/residence/high-quality/gallery-two.jpg";
    document.getElementById("light-image9").src="images/residence/high-quality/gallery-three.jpg";
    document.getElementById("light-image10").src="images/residence/high-quality/gallery-four.jpg";
    document.getElementById("light-image11").src="images/residence/high-quality/gallery-five.jpg";
    document.getElementById("light-image12").src="images/residence/high-quality/gallery-six.jpg";
    document.getElementById("light-image13").src="images/residence/high-quality/gallery-seven.jpg";
    document.getElementById("light-image14").src="images/residence/high-quality/gallery-eight.jpg";
    document.getElementById("light-image15").src="images/residence/high-quality/gallery-nine.jpg";
    document.getElementById("light-image16").src="images/residence/high-quality/gallery-ten.jpg";
    document.getElementById("light-image17").src="images/residence/high-quality/main-plan-one.jpg";
    document.getElementById("light-image18").src="images/residence/high-quality/main-plan-two.jpg";
    document.getElementById("light-image19").src="images/residence/high-quality/main-plan-three.jpg";
    document.getElementById("light-image20").src="images/residence/high-quality/plan-staircase-one.jpg";
    document.getElementById("light-image21").src="images/residence/high-quality/plan-kitchen-one.jpg";
    document.getElementById("light-image22").src="images/residence/high-quality/plan-kitchen-two.jpg";
    document.getElementById("light-image23").src="images/residence/high-quality/plan-balcony-one.jpg";
    document.getElementById("light-image24").src="images/residence/high-quality/plan-balcony-two.jpg";
    document.getElementById("light-image25").src="images/residence/high-quality/plan-toilet-one.jpg";
    document.getElementById("light-image26").src="images/residence/high-quality/plan-toilet-two.jpg";
    document.getElementById("light-image27").src="images/residence/high-quality/plan-electrical-two.jpg";
    document.getElementById("light-image28").src="images/residence/high-quality/plan-electrical-one.jpg";

    document.body.addEventListener("keydown", function(event){
     if(event.which== 27)
     closeLightBox();
     else if(event.which== 39)
     plusSlides(1);
     else if(event.which== 37)
     plusSlides(-1);
      });
  }

  function closeLightBox() {
    document.getElementById("mylightbox").style.display = "none";
  }
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
 


  //Modals
  function openModal1(){
    document.getElementById("modal-image1").src="images/residence/high-quality/carousel-one.jpg";
    $("#modals1").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal1();
    })
  }
  function closeModal1() {
    $("#modals1").modal("hide");
  }
  function openModal2(){
    document.getElementById("modal-image2").src="images/residence/high-quality/carousel-two.jpg";
    $("#modals2").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal2();
    })
  }
  
  function closeModal2() {
    $("#modals2").modal("hide");
  }
  function openModal3(){
    document.getElementById("modal-image3").src="images/residence/high-quality/carousel-three.jpg";
    $("#modals3").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal3();
    })
  }
 
  function closeModal3() {
    $("#modals3").modal("hide");
  }
  function openModal4(){
    document.getElementById("modal-image4").src="images/residence/high-quality/carousel-four.jpg";
    $("#modals4").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal4();
    })
  }
  function closeModal4() {
    $("#modals4").modal("hide");
  }
  function openModal5(){
    document.getElementById("modal-image5").src="images/residence/high-quality/main-plan-one.jpg";
    $("#modals5").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal5();
    })
  }
  function closeModal5() {
    $("#modals5").modal("hide");
  }
  function openModal6(){
    document.getElementById("modal-image6").src="images/residence/high-quality/main-plan-two.jpg";
    $("#modals6").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal6();
    })
  }
  function closeModal6() {
    $("#modals6").modal("hide");
  }
  function openModal7(){
    document.getElementById("modal-image7").src="images/residence/high-quality/main-plan-three.jpg";
    $("#modals7").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal7();
    })
  }
  function closeModal7() {
    $("#modals7").modal("hide");
  }
  function openModal8(){
    document.getElementById("modal-image8").src="images/residence/high-quality/plan-kitchen-two.jpg";
    $("#modals8").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal8();
    })
  }
  function closeModal8() {
    $("#modals8").modal("hide");
  }
  function openModal9(){
    document.getElementById("modal-image9").src="images/residence/high-quality/plan-kitchen-one.jpg";
    $("#modals9").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal9();
    })
  }
  function closeModal9() {
    $("#modals9").modal("hide");
  }
  function openModal10(){
    document.getElementById("modal-image10").src="images/residence/high-quality/plan-balcony-one.jpg";
    $("#modals10").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal10();
    })
  }
  function closeModal10() {
    $("#modals10").modal("hide");
  }
  function openModal11(){
    document.getElementById("modal-image11").src="images/residence/high-quality/plan-balcony-two.jpg";
    $("#modals11").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal11();
    })
  }
  function closeModal11() {
    $("#modals11").modal("hide");
  }
  function openModal12(){
    document.getElementById("modal-image12").src="images/residence/high-quality/plan-staircase-one.jpg";
    $("#modals12").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal12();
    })
  }
  function closeModal12() {
    $("#modals12").modal("hide");
  }
  function openModal13(){
    document.getElementById("modal-image13").src="images/residence/high-quality/plan-electrical-two.jpg";
    $("#modals13").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal13();
    })
  }
  function closeModal13() {
    $("#modals13").modal("hide");
  }
  function openModal14(){
    document.getElementById("modal-image14").src="images/residence/high-quality/plan-electrical-one.jpg";
    $("#modals14").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal14();
    })
  }
  function closeModal14() {
    $("#modals14").modal("hide");
  }
  function openModal15(){
    document.getElementById("modal-image15").src="images/residence/high-quality/plan-toilet-one.jpg";
    $("#modals15").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal15();
    })
  }
  function closeModal15() {
    $("#modals15").modal("hide");
  }
  function openModal16(){
    document.getElementById("modal-image16").src="images/residence/high-quality/plan-toilet-two.jpg";
    $("#modals16").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal16();
    })
  }
  function closeModal16() {
    $("#modals16").modal("hide");
  }
 