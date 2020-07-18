// function getDataUpdate(){
//     let hash = window.location.hash.substr(1);
    
//     let http = new XMLHttpRequest();
//     let url = "http://localhost:3000/getOneProduct/";

//     http.open("GET", url + hash, true);

//     http.send();

//     http.onload = function(){
//         let data = JSON.parse(this.responseText);

//         let brands = JSON.parse(localStorage.getItem("getListBrandUpdate"));

//         // console.log(data);

//         let listBrand = "<option></option>";
//         let listType = "<option></option>";


//         for(var i = 0; i < brands.length; i++){
//             // console.log("data information: " + data.information[0].brandName);
//             // console.log("brands: " + brands[i].brandName);

//             if(data.information[0].brandName != brands[i].brandName){
//                 listBrand += "<option id=" + brands[i].brandID + ">" + brands[i].brandName + "</option>"
//             }else{
//                 listBrand += "<option id=" + brands[i].brandID + " selected>" + brands[i].brandName + "</option>"
//             }
//         }

//         localStorage.setItem("getlistBrandtoUpdate", listBrand);

//         // console.log("1")
//     }
// }

// // console.log("2")



let updateproduct = `
    <div class="container" id="addProduct">
        <center>
            <h1 id="title-add-product">Cập nhật thông tin</h1>
        </center>

        <div class="form-group">
            <label for="productNameUpdate">Tên mẫu xe</label>
            <input type="text" class="form-control" id="productNameUpdate">
        </div>

        <div class="form-group">
            <label for="listBrandUpdate">Hãng xe</label>
            <select class="form-control" id="listBrandUpdate" onchange="selectBrandUpdate(this);"></select>
        </div>

        <div class="form-group">
            <label for="listTypeUpdate">Loại xe</label>
            <select class="form-control" id="listTypeUpdate" onchange="selectTypeUpdate(this);"></select>
        </div>

        <div class="form-group">
            <label for="productPriceUpdate">Giá niêm yết</label>
            <input type="number" class="form-control" id="productPriceUpdate">
        </div>

        <div class="form-group">
            <label for="productColorUpdate">Màu xe</label>
            <input type="text" class="form-control" id="productColorUpdate">
        </div>

        <button type="button" class="btn btn-primary" id="btn-addProduct" onclick="updateProductInformation();">Cập nhật thông tin</button>
    </div>

    <link rel="stylesheet" href="../src/css/addProduct.css">
`;