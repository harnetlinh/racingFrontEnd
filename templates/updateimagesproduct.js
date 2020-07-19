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