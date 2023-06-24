function validateEmailAddress(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validate() {
  $("#result").text("");
  var emailaddress = $("#email").val();
  if (validateEmailAddress(emailaddress)) {
    $("#result").text(emailaddress + " is valid :)");
    $("#result").css("color", "green");
  } else {
    $("#result").text(emailaddress + " is not correct, please retry:(");
    $("#result").css("color", "red");
  }
  return false;
}
$("#validate").bind("click", validate);

// Cargar la imagen en miniatura del video de YouTube
function loadYouTubeThumbnail() {
  var players = document.querySelectorAll("#player");

  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var videoId = player.dataset.videoId;
    var thumbnailUrl =
      "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";

    // Asignar la URL de la imagen en miniatura al atributo src de la imagen
    var thumbnailImg = player.querySelector("img");
    thumbnailImg.src = thumbnailUrl;
  }
}

// Cargar la API de YouTube de forma asíncrona
function loadYouTubeAPI() {
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Cargar la imagen en miniatura una vez que se haya cargado la API
  tag.onload = function () {
    loadYouTubeThumbnail();
  };
}

// Cargar la API de YouTube y las imágenes en miniatura de forma asíncrona
loadYouTubeAPI();
