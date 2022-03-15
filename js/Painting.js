var fbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");


function openfullimg(pic){
fbox.style.display="flex";
fullimg.src=pic;
}
function closeimg(){
    fbox.style.display="none";
}

function openSlideMenu () {
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
  }
  
  function closeSlideMenu () {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
  }

  
