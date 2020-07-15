$(document).ready(function () {
  if (window.File && window.FileList && window.FileReader) {
    $("#files").on("change", function(e) {
      var files = e.target.files,
        filesLength = files.length;
      for (var i = 0; i < filesLength; i++) {
        var f = files[i]
        var fileReader = new FileReader();
        fileReader.onload = (function(e) {
          var file = e.target;
          $("<span class=\"pip\">" +
            "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + files[0].name + "\"/>" +
            "<br/><span class=\"remove\" onclick=" + "removeFileName();" + " id=" + "pip" + ">Xoá ảnh</span>" +
            "</span>").insertAfter("#files");
          $(".remove").click(function(){
            $(this).parent(".pip").remove();
          });
        });
        fileReader.readAsDataURL(f);
      }
    });
  } else {
    alert("Trình duyệt của bạn không hỗ trợ việc thêm nhiều ảnh cùng một lúc");
  }
});
