
  //Back to top
  window.addEventListener('scroll',function(){
    var scroll =document.querySelector('.back-to-top');
    if(window.innerWidth< 768)
    scroll.classList.toggle("active", window.scrollY > 300)
    else
    scroll.classList.toggle("active", window.scrollY > 1000)
  })
  function scrollToTop() {
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    })
} 


// TO remove scroll down on scrolling down
window.addEventListener('scroll',function(){
  if(window.scrollY > 500)
  document.getElementsByClassName('scrolldown')[0].remove();
})


// To close navbar on outside click
$(document).ready(function () {
  $(document).click(
      function (event) {
          var target = $(event.target);
          var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
          if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
              $("button.navbar-toggler").click();
          }
      }
  );
})




  //LightBox
  function openLightBox() {
    document.getElementById("mylightbox").style.display = "block";
    document.getElementById("light-image1").src="images/internship/high-quality/carousel-one-gallery.webp";
    document.getElementById("light-image2").src="images/internship/high-quality/carousel-two-gallery.webp";
    document.getElementById("light-image3").src="images/internship/high-quality/carousel-four.webp";
    document.getElementById("light-image4").src="images/internship/high-quality/carousel-five.webp";
    document.getElementById("light-image5").src="images/internship/high-quality/carousel-six.webp";
    document.getElementById("light-image6").src="images/internship/high-quality/project-one-one.webp";
    document.getElementById("light-image7").src="images/internship/high-quality/project-one-two.webp";
    document.getElementById("light-image8").src="images/internship/high-quality/project-two.webp";
    document.getElementById("light-image9").src="images/internship/high-quality/project-three-one.webp";
    document.getElementById("light-image10").src="images/internship/high-quality/project-three-two.webp";
    document.getElementById("light-image11").src="images/internship/high-quality/project-four-one.webp";
    document.getElementById("light-image12").src="images/internship/high-quality/project-four-two.webp";
    document.getElementById("light-image13").src="images/internship/high-quality/project-five-one.webp";
    document.getElementById("light-image14").src="images/internship/high-quality/project-five-two.webp";
  
  }
  document.body.addEventListener("keydown", function(event){
    if(event.which== 27)
    closeLightBox();
    else if(event.which== 39)
    plusSlides(+1);
    else if(event.which== 37)
    plusSlides(-1);
     });

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
  function openFullScreen(){
    var elem = document.getElementsByClassName('lightbox-content')[0];
    if(document.webkitFullscreenElement) {
      document.webkitCancelFullScreen();
    }
    else {
      elem.webkitRequestFullScreen();
    };
  }


  //Modals
  function openModal1(){
    document.getElementById("modal-image1").src="images/internship/high-quality/project-one-one.webp";
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
    document.getElementById("modal-image2").src="images/internship/high-quality/project-one-two.webp";
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
    document.getElementById("modal-image3").src="images/internship/high-quality/project-two.webp";
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
    document.getElementById("modal-image4").src="images/internship/high-quality/project-three-one.webp";
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
    document.getElementById("modal-image5").src="images/internship/high-quality/project-three-two.webp";
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
    document.getElementById("modal-image6").src="images/internship/high-quality/project-four-one.webp";
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
    document.getElementById("modal-image7").src="images/internship/high-quality/project-four-two.webp";
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
    document.getElementById("modal-image8").src="images/internship/high-quality/project-five-one.webp";
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
    document.getElementById("modal-image9").src="images/internship/high-quality/project-five-two.webp";
    $("#modals9").modal();
    document.body.addEventListener('keydown',function(event){
      if(event.which == 27)
      closeModal9();
    })
  }
  function closeModal9() {
    $("#modals9").modal("hide");
  }
 
