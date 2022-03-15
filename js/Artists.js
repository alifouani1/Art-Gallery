

ScrollReveal({
    reset: true,
    distance: '60px',
    duration:2500,
    delay:400
    });
    ScrollReveal().reveal('.main-title',{delay:500,origin:'left'});  
    ScrollReveal().reveal('.sec-01 .image ',{delay:600,origin:'bottom'});
    ScrollReveal().reveal('.sec-02 .image ',{delay:600,origin:'bottom'});
    ScrollReveal().reveal('.sec-03 .image ',{delay:600,origin:'bottom'});
    ScrollReveal().reveal('.textbox',{delay:700,origin:'right'});  
  
  
  
  
  function openSlideMenu () {
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
  }
  
  function closeSlideMenu () {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
  }
  
