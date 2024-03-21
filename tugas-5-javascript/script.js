$(document).ready(function () {
  $(".gambar").mouseover(function () {
    // Mendapatkan id dari gambar yang diklik
    var id = $(this).attr("id");

    // Mendapatkan id audio yang sesuai dengan gambar yang diklik
    var audioId = "#suara" + id.charAt(0).toUpperCase() + id.slice(1);

    // Menghentikan audio sebelumnya dan memainkan audio yang baru
    $("audio").each(function () {
      if (!$(this)[0].paused) {
        $(this)[0].pause();
        $(this)[0].currentTime = 0;
      }
    });
    $(audioId)[0].play();
  });
});
