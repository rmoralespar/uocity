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

(function () {
  var v = document.getElementsByClassName("reproductor");
  for (var n = 0; n < v.length; n++) {
    var p = document.createElement("div");
    p.innerHTML = labnolThumb(v[n].dataset.id);
    p.onclick = labnolIframe;
    v[n].appendChild(p);
  }
})();

function labnolThumb(id) {
  return (
    '<img class="imagen-previa" src="//i.ytimg.com/vi/' +
    id +
    '/hqdefault.jpg"><div class="youtube-play"></div>'
  );
}

function labnolIframe() {
  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "//www.youtube.com/embed/" +
      this.parentNode.dataset.id +
      "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("id", "youtube-iframe");
  this.parentNode.replaceChild(iframe, this);
}