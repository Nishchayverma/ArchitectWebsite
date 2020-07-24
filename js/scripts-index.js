// window.addEventListener("load",function(){
//     fade out loader
// })


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



// SECTION TEXT DISPLAY
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top <= 600 );
}
function isInViewportPort(element){
    const rect = element.getBoundingClientRect();
    return (rect.top <= 250 );
}

var about= document.getElementById('about');
var portfolio = document.getElementById('portfolio');
var sectionText= document.getElementsByClassName('section-text')[0];

window.addEventListener('scroll',function(){

   
    if(isInViewport(about)){
        sectionText.style.opacity= "0";
    }
    else{
        if(isInViewportPort(portfolio))
        sectionText.style.opacity= "1";
        else
        sectionText.style.opacity="0";
    }
})


// PROJECT IMAGE TILT
if(window.innerWidth > 660){
VanillaTilt.init(document.querySelectorAll(".js-project"), {
    perspective: 700,
    scale: 1.05,
    speed:  500,
});
}

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

// GMAIL LINK
if(window.innerWidth > 768)
    document.getElementById('gmail-link').href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=kartik.verma1996@gmail.com";
    else
    document.getElementById('gmail-link').href="mailto:kartik.verma1996@gmail.com";


