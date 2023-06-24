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

// Función para cargar el <iframe> de forma asíncrona
function loadVideoAsync() {
  var videoContainer = document.getElementById('video');
  var videoId = "as3wq91Dl-k";

  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + videoId;
  iframe.width = '640';
  iframe.height = '360';
  iframe.allowFullscreen = true;

  videoContainer.appendChild(iframe);
}

window.addEventListener('load', loadVideoAsync);

function loadVideoAsync() {
  var videoContainer = document.getElementById("video");
  var videoId = "q_uLicmn8N8";

  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + videoId;
  iframe.width = "640";
  iframe.height = "360";
  iframe.allowFullscreen = true;

  videoContainer.appendChild(iframe);
}

window.addEventListener("load", loadVideoAsync);

function loadVideoAsync() {
  var videoContainer = document.getElementById("video");
  var videoId = "t3wUt2U7zZ4";

  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + videoId;
  iframe.width = "640";
  iframe.height = "360";
  iframe.allowFullscreen = true;

  videoContainer.appendChild(iframe);
}

window.addEventListener("load", loadVideoAsync);

function loadVideoAsync() {
  var videoContainer = document.getElementById("video");
  var videoId = "MD35zQk7xYs";

  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + videoId;
  iframe.width = "640";
  iframe.height = "360";
  iframe.allowFullscreen = true;

  videoContainer.appendChild(iframe);
}

window.addEventListener("load", loadVideoAsync);

function loadVideoAsync() {
  var videoContainer = document.getElementById("video");
  var videoId = "c4kdb-lUY3Y";

  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + videoId;
  iframe.width = "640";
  iframe.height = "360";
  iframe.allowFullscreen = true;

  videoContainer.appendChild(iframe);
}

window.addEventListener("load", loadVideoAsync);

function loadVideoAsync() {
  var videoContainer = document.getElementById("video");
  var videoId = "igZ6PoZAszQ";

  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + videoId;
  iframe.width = "640";
  iframe.height = "360";
  iframe.allowFullscreen = true;

  videoContainer.appendChild(iframe);
}

window.addEventListener("load", loadVideoAsync);

function loadVideoAsync() {
  var videoContainer = document.getElementById("video");
  var videoId = "k7Txk5LZo3k";

  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + videoId;
  iframe.width = "640";
  iframe.height = "360";
  iframe.allowFullscreen = true;

  videoContainer.appendChild(iframe);
}

window.addEventListener("load", loadVideoAsync);

function loadVideoAsync() {
  var videoContainer = document.getElementById("video");
  var videoId = "qoqiwWvF5lA";

  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + videoId;
  iframe.width = "640";
  iframe.height = "360";
  iframe.allowFullscreen = true;

  videoContainer.appendChild(iframe);
}

window.addEventListener("load", loadVideoAsync);