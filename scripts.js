// const logo=document.querySelectorAll("#logo path");

// for(let i=0; i<logo.length;i++)
// console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);




// thesis

  //LightBox
  function openLightBox() {
    document.getElementById("mylightbox").style.display = "block";
    document.getElementById("light-image1").src="images/thesis/high-quality/carousel-one.jpg";
    document.getElementById("light-image2").src="images/thesis/high-quality/carousel-two.jpg";
    document.getElementById("light-image3").src="images/thesis/high-quality/carousel-three.jpg";
    document.getElementById("light-image4").src="images/thesis/high-quality/carousel-four.jpg";
    document.getElementById("light-image5").src="images/thesis/high-quality/carousel-five.jpg";
    document.getElementById("light-image6").src="images/thesis/high-quality/zone-two-five-carousel-six.jpg";
    document.getElementById("light-image7").src="images/thesis/high-quality/all-zones.jpg";
    document.getElementById("light-image8").src="images/thesis/high-quality/plan-one-two.jpg";
    document.getElementById("light-image9").src="images/thesis/high-quality/plan-one-three.jpg";
    document.getElementById("light-image10").src="images/thesis/high-quality/plan-one-four.jpg";
    document.getElementById("light-image11").src="images/thesis/high-quality/plan-one-five.jpg";
    document.getElementById("light-image12").src="images/thesis/high-quality/plan-two.jpg";
    document.getElementById("light-image13").src="images/thesis/high-quality/zone-site-plan.jpg";
    document.getElementById("light-image14").src="images/thesis/high-quality/plan-zone-one.jpg";
    document.getElementById("light-image15").src="images/thesis/high-quality/zone-one-one.jpg";
    document.getElementById("light-image16").src="images/thesis/high-quality/zone-one-two.jpg";
    document.getElementById("light-image17").src="images/thesis/high-quality/zone-one-three.jpg";
    document.getElementById("light-image18").src="images/thesis/high-quality/zone-one-four.jpg";
    document.getElementById("light-image19").src="images/thesis/high-quality/zone-two-one.jpg";
    document.getElementById("light-image20").src="images/thesis/high-quality/zone-two-two.jpg";
    document.getElementById("light-image21").src="images/thesis/high-quality/zone-two-three.jpg";
    document.getElementById("light-image22").src="images/thesis/high-quality/zone-two-four.jpg";
    document.getElementById("light-image23").src="images/thesis/high-quality/zone-three-one.jpg";
    document.getElementById("light-image24").src="images/thesis/high-quality/zone-three-four.jpg";
    document.getElementById("light-image25").src="images/thesis/high-quality/zone-three-three.jpg";
    document.getElementById("light-image26").src="images/thesis/high-quality/zone-three-two.jpg";
    
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
    document.getElementById("modal-image1").src="images/thesis/high-quality/carousel-one.jpg";
    $("#modals1").modal();
  }
  function closeModal1() {
    $("#modals1").modal("hide");
  }
  function openModal2(){
    document.getElementById("modal-image2").src="images/thesis/high-quality/carousel-two.jpg";
    $("#modals2").modal();
  }
  
  function closeModal2() {
    $("#modals2").modal("hide");
  }
  function openModal3(){
    document.getElementById("modal-image3").src="images/thesis/high-quality/carousel-four.jpg";
    $("#modals3").modal();
  }
 
  function closeModal3() {
    $("#modals3").modal("hide");
  }
  function openModal4(){
    document.getElementById("modal-image4").src="images/thesis/high-quality/carousel-five.jpg";
    $("#modals4").modal();
  }
  function closeModal4() {
    $("#modals4").modal("hide");
  }
  function openModal5(){
    document.getElementById("modal-image5").src="images/thesis/high-quality/all-zones.jpg";
    $("#modals5").modal();
  }
  function closeModal5() {
    $("#modals5").modal("hide");
  }
  function openModal6(){
    document.getElementById("modal-image6").src="images/thesis/high-quality/plan-one-two.jpg";
    $("#modals6").modal();
  }
  function closeModal6() {
    $("#modals6").modal("hide");
  }
  function openModal7(){
    document.getElementById("modal-image7").src="images/thesis/high-quality/plan-one-three.jpg";
    $("#modals7").modal();
  }
  function closeModal7() {
    $("#modals7").modal("hide");
  }
  function openModal8(){
    document.getElementById("modal-image8").src="images/thesis/high-quality/plan-one-four.jpg";
    $("#modals8").modal();
  }
  function closeModal8() {
    $("#modals8").modal("hide");
  }
  function openModal9(){
    document.getElementById("modal-image9").src="images/thesis/high-quality/plan-one-five.jpg";
    $("#modals9").modal();
  }
  function closeModal9() {
    $("#modals9").modal("hide");
  }
  function openModal10(){
    document.getElementById("modal-image10").src="images/thesis/high-quality/plan-two.jpg";
    $("#modals10").modal();
  }
  function closeModal10() {
    $("#modals10").modal("hide");
  }
  function openModal11(){
    document.getElementById("modal-image11").src="images/thesis/high-quality/zone-site-plan.jpg";
    $("#modals11").modal();
  }
  function closeModal11() {
    $("#modals11").modal("hide");
  }
  function openModal12(){
    document.getElementById("modal-image12").src="images/thesis/high-quality/plan-zone-one.jpg";
    $("#modals12").modal();
  }
  function closeModal12() {
    $("#modals12").modal("hide");
  }
  function openModal13(){
    document.getElementById("modal-image13").src="images/thesis/high-quality/zone-one-one.jpg";
    $("#modals13").modal();
  }
  function closeModal13() {
    $("#modals13").modal("hide");
  }
  function openModal14(){
    document.getElementById("modal-image14").src="images/thesis/high-quality/zone-one-two.jpg";
    $("#modals14").modal();
  }
  function closeModal14() {
    $("#modals14").modal("hide");
  }
  function openModal15(){
    document.getElementById("modal-image15").src="images/thesis/high-quality/zone-one-three.jpg";
    $("#modals15").modal();
  }
  function closeModal15() {
    $("#modals15").modal("hide");
  }
  function openModal16(){
    document.getElementById("modal-image16").src="images/thesis/high-quality/zone-one-four.jpg";
    $("#modals16").modal();
  }
  function closeModal16() {
    $("#modals16").modal("hide");
  }
  function openModal17(){
    document.getElementById("modal-image17").src="images/thesis/high-quality/zone-two-five-carousel-six.jpg";
    $("#modals17").modal();
  } 
  function openModal18(){
    document.getElementById("modal-image18").src="images/thesis/high-quality/zone-two-one.jpg";
    $("#modals18").modal();
  }
  
  function closeModal17() {
    $("#modals17").modal("hide");
  }
  function closeModal18() {
    $("#modals18").modal("hide");
  }
  function openModal19(){
    document.getElementById("modal-image19").src="images/thesis/high-quality/zone-two-two.jpg";
    $("#modals19").modal();
  }
  function closeModal19() {
    $("#modals19").modal("hide");
  }
  function openModal20(){
    document.getElementById("modal-image20").src="images/thesis/high-quality/zone-two-three.jpg";
    $("#modals20").modal();
  }
  function closeModal20() {
    $("#modals20").modal("hide");
  }
  function openModal21(){
    document.getElementById("modal-image21").src="images/thesis/high-quality/zone-two-four.jpg";
    $("#modals21").modal();
  }
  function closeModal21() {
    $("#modals21").modal("hide");
  }
  function openModal22(){
    document.getElementById("modal-image22").src="images/thesis/high-quality/zone-three-one.jpg";
    $("#modals22").modal();
  }
  function closeModal22() {
    $("#modals22").modal("hide");
  }
  function openModal23(){
    document.getElementById("modal-image23").src="images/thesis/high-quality/zone-three-four.jpg";
    $("#modals23").modal();
  }
  function closeModal23() {
    $("#modals23").modal("hide");
  }
  function openModal24(){
    document.getElementById("modal-image24").src="images/thesis/high-quality/zone-three-two.jpg";
    $("#modals24").modal();
  }
  function closeModal24() {
    $("#modals24").modal("hide");
  }
  function openModal25(){
    document.getElementById("modal-image25").src="images/thesis/high-quality/zone-three-three.jpg";
    $("#modals25").modal();
  }
  function closeModal25() {
    $("#modals25").modal("hide");
  }




