function updateImgProduct() {

    let productID = window.location.hash.substr(1);

    let imgs = document.getElementById('editImages').getElementsByTagName('img');

    let imgProductUpdate = [];
    
    let length = localStorage.getItem("numberImgUpdate");

    if(imgs.length > length){
        alert("Cập nhật ảnh không thành công! Bạn không được cập nhật nhiều hơn số ảnh ban đầu");
    }else{

        for(var i = 0; i < imgs.length; i++){
            if(imgs[i].src != ""){
                imgProductUpdate.push(imgs[i].currentSrc);
            }
        }

        let http = new XMLHttpRequest();

        let url = "http://localhost:3000/updateProductImage";

        http.open("PUT", url, true);

        http.setRequestHeader('Content-type','application/json; charset=utf-8');

        //Tmp
        let imagesProduct = {
            productID: productID,
            image_: imgProductUpdate,
            //ID image, image__
        }

        http.onload = function() {
            if(this.readyState == 4 && this.status == 200){
                changeManagement('/managementproduct');
                return false;
            }else{
                alert("Thêm sản phẩm thất bại!");
                changeManagement('/managementproduct');
                return false;
            }
        }

        http.send(JSON.stringify(imagesProduct));
    }
}


let updateimagesproduct = `
    <div class="container">
        <center>
            <h1 id="title-add-product">Cập nhật ảnh</h1>

            <div id="editImages">

            </div>
            <div class="form-group" id="imgProductsUpdate">
                <label for="files">Một số ảnh minh hoạ về mẫu xe</label>
                <input onchange="loadIMG(this)" type="file" class="form-control-file" id="files" name="files[]" multiple>
                <small id="imagehelp" class="form-text text-muted">Bạn chỉ có thể đăng tối đa 9MB/1 lần.</small>
            </div>

            <button type="button" class="btn btn-primary" id="btn-updateimgProduct" onclick="updateImgProduct()">Cập nhật ảnh</button>
        </center>
    </div>
`;