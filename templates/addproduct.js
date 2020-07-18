// function getListBrand(){
//     let http = new XMLHttpRequest();
//     let url = "http://localhost:3000/getBrand";
//     http.open("GET", url, true);
//     http.send();
//     http.onload = function(){
//         let data = JSON.parse(this.responseText);

//         let listBrand = "<option></option>"

//         for(var i = 0; i < data.length; i++){
//             listBrand += "<option id=" + data[i].brandID +">" + 
//             data[i].brandName +
//             "</option>";
//         }

//         localStorage.setItem("getListBrand", listBrand);
//     }
// }

// function getListType(){
//     let http = new XMLHttpRequest();
//     let url = "http://localhost:3000/getCarType";
//     http.open("GET", url, true);
//     http.send();
//     http.onload = function(){
//         let data = JSON.parse(this.responseText);

//         let listType = "<option></option>";

//         for(var i = 0; i < data.length; i++){
//             listType += "<option id=" + data[i].typeID+">" + 
//             data[i].typeName +
//             "</option>";
//         }

//         localStorage.setItem("getListType", listType);
//     }
// }

// getListBrand();

// getListType();

let addproduct = `
    <div class="container" id="addProduct">
        <center>
            <h1 id="title-add-product">Thêm mẫu ô tô mới vào Showroom</h1>
        </center>

        <div class="form-group">
            <label for="exampleInputName">Tên mẫu xe</label>
            <input type="text" class="form-control" id="exampleInputName">
        </div>

        <div class="form-group">
            <label for="listBrand">Hãng xe</label>
            <select class="form-control" id="listBrand" onchange="selectBrand(this);"></select>
        </div>

        <div class="form-group">
            <label for="listType">Loại xe</label>
            <select class="form-control" id="listType" onchange="selectType(this);"></select>
        </div>

        <div class="form-group">
            <label for="exampleInputPrice">Giá niêm yết</label>
            <input type="number" class="form-control" id="exampleInputPrice">
        </div>

        <div class="form-group">
            <label for="exampleInputColor">Màu xe</label>
            <input type="text" class="form-control" id="exampleInputColor">
        </div>

        <div  class="form-group" id="imgProducts">
            <label for="files">Một số ảnh minh hoạ về mẫu xe</label>
            <input onchange="load(this)" type="file" class="form-control-file" id="files" name="files[]" multiple>
           
            <small id="imagehelp" class="form-text text-muted">Bạn chỉ có thể đăng tối đa 9MB.</small>
        </div>

        <button type="button" class="btn btn-primary" id="btn-addProduct" onclick="AddProduct();">Thêm mẫu xe</button>
    </div>

    <link rel="stylesheet" href="../src/css/addProduct.css">
`;
