var images = document.querySelectorAll(".gallery .photos img");
var i = 0;

  function autoSlide() {
  images[i].className = "";
  i++;

  if(i >= images.length) {
    i = 0;
  }

  images[i].className = "showed";
}

setInterval(autoSlide, 3000);