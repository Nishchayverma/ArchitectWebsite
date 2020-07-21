
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

  
// TO remove scroll down on scrolling down
window.addEventListener('scroll',function(){
    if(window.scrollY > 800)
    document.getElementsByClassName('scrolldown')[0].remove();
  })


// Quote Animation
var spans = document.getElementById('quote').getElementsByTagName("span");
for(var i=0;i<spans.length;i++){
    spans[i].style.animationDelay = i*70+"ms";
}

// PROJECT IMAGE TILT

$(document).ready(function(){
    if(window.innerWidth > 660){
        $('.js-project').tilt({
            perspective: 700,
            scale: 1.05,
            speed:  500,
        })
    }
    
})

// PORTFOLIO PROJECT BACKGROUND
var projectTextRight=document.getElementsByClassName("project-text-right");
var projectTextLeft=document.getElementsByClassName("project-text-left");
var changeOpacityOfOtherProjects =document.getElementsByClassName("js-project");
var backgroundImageName=document.getElementsByClassName("back")[0];
var backgroundImageOpacity = document.getElementsByClassName("fixed-background")[0];


function addBackgroundOne(){
    // MAKING ALL TEXT ELEMENT VISIBLE
    if(window.innerWidth > 660){
        for(var i=0;i<projectTextRight.length;i++){
            projectTextRight[i].style.opacity="1";
            projectTextRight[i].style.transform="translateY(0%) translateZ(20px)";
        }
        for(var i=0;i<projectTextLeft.length;i++){
            projectTextLeft[i].style.opacity="1";
            projectTextLeft[i].style.transform="translateY(0%)  translateZ(35px)";
        }
        for(var i=0;i<changeOpacityOfOtherProjects.length;i++){
            if(i==0)
            continue;
            changeOpacityOfOtherProjects[i].style.opacity="0.6";
        }
        backgroundImageName.style.backgroundImage =" url('./images/thesis/thesis-thumbnail.webp')";
        backgroundImageOpacity.style.opacity="1";
    }
   

}


function addBackgroundTwo(){
    if(window.innerWidth > 660){
        for(var i=0;i<projectTextRight.length;i++){
            projectTextRight[i].style.opacity="1";
            projectTextRight[i].style.transform="translateY(0%) translateZ(20px)";
        }
        for(var i=0;i<projectTextLeft.length;i++){
            projectTextLeft[i].style.opacity="1";
            projectTextLeft[i].style.transform="translateY(0%) translateZ(35px)";
        }
        for(var i=0;i<changeOpacityOfOtherProjects.length;i++){
            if(i==1)
            continue;
            changeOpacityOfOtherProjects[i].style.opacity="0.6";
        }
        backgroundImageName.style.backgroundImage =" url('./images/residence/residence-thumbnail.webp')";
        backgroundImageOpacity.style.opacity="1";
    }
   
}


function addBackgroundThree(){
    if(window.innerWidth > 660){
        for(var i=0;i<projectTextRight.length;i++){
            projectTextRight[i].style.opacity="1";
            projectTextRight[i].style.transform="translateY(0%) translateZ(20px)";
        }
        for(var i=0;i<projectTextLeft.length;i++){
            projectTextLeft[i].style.opacity="1";
            projectTextLeft[i].style.transform="translateY(0%) translateZ(35px)";
        }
        for(var i=0;i<changeOpacityOfOtherProjects.length;i++){
            if(i==2)
            continue;
            changeOpacityOfOtherProjects[i].style.opacity="0.6";
        }
        backgroundImageName.style.backgroundImage =" url('./images/internship/internship-thumbnail.webp')";
        backgroundImageOpacity.style.opacity="1";
    }
    
}

function removeBackground(){
    if(window.innerWidth > 660){
        for(var i=0;i<projectTextRight.length;i++){
            projectTextRight[i].style.opacity="0";
            projectTextRight[i].style.transform="translateY(50%) translateZ(20px)";
        }
        for(var i=0;i<projectTextLeft.length;i++){
            projectTextLeft[i].style.opacity="0";
            projectTextLeft[i].style.transform="translateY(50%) translateZ(35px)";
        } 
        for(var i=0;i<changeOpacityOfOtherProjects.length;i++){
            changeOpacityOfOtherProjects[i].style.opacity="1";
        }
        backgroundImageOpacity.style.opacity="0";
    }
   
}



// ABOUT MOVE TEXT
$(document).on('scroll', function(){
    console.log(window.scrollY);
    $('.about-heading').css("left", Math.max(3000 - 1.25 * window.scrollY, 50) + "px" );
})

$(document).on('scroll', function(){
    console.log(window.scrollY);
    $('.connect-heading').css("left", Math.max(4000 - 1.25 * window.scrollY, 50) + "px" );
})