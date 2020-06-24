
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