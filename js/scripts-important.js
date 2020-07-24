
    AOS.init();
    if(window.innerWidth < 768){
      var x= document.getElementsByClassName('removeAos');
      for(var i=0;i<x.length;i++)
        x[i].removeAttribute("data-aos");
    }
    $(window).resize(function(){
      if(window.innerWidth < 768){
        var x= document.getElementsByClassName('removeAos');
        for(var i=0;i<x.length;i++)
          x[i].removeAttribute("data-aos");
      }
    })
// AOS WITH LAZYLoading optimized
      document.querySelectorAll('img')
    .forEach((img) =>
        img.addEventListener('load', () =>
            AOS.refresh()
        )
    );
      