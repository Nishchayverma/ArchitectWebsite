    //Scroll Animation
    AOS.init({
        disable: function () {
          if (window.innerWidth < 768)
            return true;
          else
            return false;
        }
      });
      $(window).resize(function () {
        AOS.init({
          disable: function () {
            if (window.innerWidth < 768)
              return true;
            else
              return false;
          }
        });
      });
      