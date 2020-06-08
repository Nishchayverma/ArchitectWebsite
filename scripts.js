// const logo=document.querySelectorAll("#logo path");

// for(let i=0; i<logo.length;i++)
// console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);




// thesis

  //LightBox
  function openLightBox() {
    document.getElementById("mylightbox").style.display = "block";
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
  function closeModal1() {
    $("#modals1").modal("hide");
  }
  function closeModal2() {
    $("#modals2").modal("hide");
  }
  function closeModal3() {
    $("#modals3").modal("hide");
  }
  function closeModal4() {
    $("#modals4").modal("hide");
  }
  function closeModal5() {
    $("#modals5").modal("hide");
  }
  function closeModal6() {
    $("#modals6").modal("hide");
  }
  function closeModal7() {
    $("#modals7").modal("hide");
  }
  function closeModal8() {
    $("#modals8").modal("hide");
  }
  function closeModal9() {
    $("#modals9").modal("hide");
  }
  function closeModal10() {
    $("#modals10").modal("hide");
  }
  function closeModal11() {
    $("#modals11").modal("hide");
  }
  function closeModal12() {
    $("#modals12").modal("hide");
  }
  function closeModal13() {
    $("#modals13").modal("hide");
  }
  function closeModal14() {
    $("#modals14").modal("hide");
  }

  function closeModal15() {
    $("#modals15").modal("hide");
  }
  function closeModal16() {
    $("#modals16").modal("hide");
  }
  function closeModal17() {
    $("#modals17").modal("hide");
  }
  function closeModal18() {
    $("#modals18").modal("hide");
  }
  function closeModal19() {
    $("#modals19").modal("hide");
  }

  function closeModal20() {
    $("#modals20").modal("hide");
  }
  function closeModal21() {
    $("#modals21").modal("hide");
  }
  function closeModal22() {
    $("#modals22").modal("hide");
  }
  function closeModal23() {
    $("#modals23").modal("hide");
  }
  function closeModal24() {
    $("#modals24").modal("hide");
  }
  function closeModal25() {
    $("#modals25").modal("hide");
  }




