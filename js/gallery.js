var photo = document.getElementById("photo");
var thumbnail = document.querySelectorAll(".mini_img > li > img");

for ( var i = 0; i < thumbnail.length; i++ )
  thumbnail[i].addEventListener("click", function () {

    photo.setAttribute("src", this.getAttribute("src"));
  });
