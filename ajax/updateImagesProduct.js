function removeImages(){
    let imgs = document.getElementById("editImages").getElementsByTagName("img");
    let countIMG = 0;

    for(var i = 0; i < imgs.length; i++){
        countIMG++;
    }

    if(document.getElementById("pip").click){
        countIMG--;
    }

    if(countIMG == 0){
        document.getElementById("files").value = "";
    }
}

function loadIMG(e) {  
  var filesimg = e.files[0];
    filesLength = files.length;
    var fileReader = new FileReader();
    fileReader.readAsDataURL(filesimg);
    fileReader.onload = function(e) {
      var file = e.target;
      let html = "<span class=\"pip\">" +
        "<img class=\"imageThumb\" src=\"" + e.target.result + "\" />" +
        "<br/><span class=\"remove\" onclick=" + "removeImages()" + " id=" + "pip" + ">Xoá ảnh</span>" +
        "</span>";
        $(html).appendTo("#editImages");
      $(".remove").click(function(){
        $(this).parent(".pip").remove();
      });
    };
}