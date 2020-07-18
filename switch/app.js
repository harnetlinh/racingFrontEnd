//Get id app
let app = document.getElementById("app");

//Create routes
let routes = {
    '/': homepage,
    '/index.html': homepage,
    '/addproduct': addproduct,
    '/managementproduct': managementproduct,
    '/updateproduct': updateproduct,
}

//onpopstate
window.onpopstate = () => {
    app.innerHTML = routes[window.location.pathname];
}

// Change url not redirect
// let changeApp = (pathName) =>{
//     window.history.pushState({}, pathName, window.location.origin + pathName);
//     app.innerHTML = routes[pathName];
// }

//Home page
let changeHome = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    app.innerHTML = routes[pathName];

    function loadAllProduct(){
        var http = new XMLHttpRequest();
        var url = "http://localhost:3000/homePageLoader";
        http.open("GET", url, true);
        http.send();
        http.onload = function(){
            var data = JSON.parse(this.responseText);
    
            var product = "";
            
            for(var i = 0; i < data.length; i++){
                product += 
                '<div class="col-md-4 Product">' +
                '<div class="card mb">' +
                '<img class="card-img-top" src="' + data[i].image_ + '" alt="Card image cap">' +
                '<div class="card-body mb">' +
                '<h5 class="card-title">' + data[i].productName + '</h5>' +
                '<p class="card-text">' + data[i].brandName + '</p>' +
                '<h5 class="card-title" id="price">' + data[i].productPrice + '</h5>' +
                '<button type="button" class="btn btn-primary mb">Show Detail</button>' +
                '</div>' +
                '</div>' + 
                '</div>';
            }
    
            $(document).ready(function () {
                $(product).appendTo("#productList");
            });
        }
    }

    loadAllProduct();
}

//Add
let changeAdd = (pathName) =>{
    window.history.pushState({}, pathName, window.location.origin + pathName);
    app.innerHTML = routes[pathName];

    function getListBrand(){
        let http = new XMLHttpRequest();
        let url = "http://localhost:3000/getBrand";
        http.open("GET", url, true);
        http.send();
        http.onload = function(){
            let data = JSON.parse(this.responseText);
    
            let listBrand = "<option></option>"
    
            for(var i = 0; i < data.length; i++){
                listBrand += "<option id=" + data[i].brandID +">" + 
                data[i].brandName +
                "</option>";
            }
    
            $(document).ready(function () {
                $(listBrand).appendTo("#listBrand");
            });
        }
    }

    getListBrand();

    function getListType(){
        let http = new XMLHttpRequest();
        let url = "http://localhost:3000/getCarType";
        http.open("GET", url, true);
        http.send();
        http.onload = function(){
            let data = JSON.parse(this.responseText);
    
            let listType = "<option></option>";
    
            for(var i = 0; i < data.length; i++){
                listType += "<option id=" + data[i].typeID+">" + 
                data[i].typeName +
                "</option>";
            }
    
            $(document).ready(function () {
                $(listType).appendTo("#listType");
            });
        }
    }

    getListType();
}

//Management
let changeManagement = (pathName) =>{
    window.history.pushState({}, pathName, window.location.origin + pathName);
    app.innerHTML = routes[pathName];

    function loadTable(){
        var http = new XMLHttpRequest();
        var url = "http://localhost:3000/homePageLoader";
        http.open("GET", url, true);
        http.send();
        http.onload = function(){
            var data = JSON.parse(this.responseText);
    
            var products = "";
    
            var no = 1;
    
            for(var i = 0; i < data.length; i++){
                
                products += 
                '<tr id=' + data[i].productID + '>' + 
                    '<th scope="row">' + no + '</th>' +
                    '<td>' + data[i].productName + '</td>' +
                    '<td>' + data[i].brandName + '</td>' +
                    '<td>' + data[i].typeName + '</td>' +
                    '<td>' + data[i].productColor + '</td>' +
                    '<td>' + data[i].productPrice + '</td>' +
                    '<td> <button type="submit" class="btn btn-primary" id="' + data[i].productID + '" onclick="changeUpdate(' + "'/updateproduct', this.id" +'); return false;"> Edit </button>' +
                    '<button type="submit" class="btn btn-primary" id="' + data[i].productID + '" onclick="deleteProduct(this.id)"> Delete </button>' + 
                    '</td>' +
                '</tr>';
    
                no++;
            }
    
            $(document).ready(function () {
                $(products).appendTo("#tableProduct");
            });
        }
    }
    
    loadTable();
}

//Update
let changeUpdate = (pathName, id) =>{

    function getListBrandUpdate(){
        let http = new XMLHttpRequest();
        let url = "http://localhost:3000/getBrand";

        http.open("GET", url, true);

        http.send();

        http.onload = function(){
            let data = JSON.parse(this.responseText);

            localStorage.setItem("getListBrandUpdate", JSON.stringify(data));
        }
    }

    getListBrandUpdate();

    function getListTypeUpdate(){
        let http = new XMLHttpRequest();
        let url = "http://localhost:3000/getCarType";

        http.open("GET", url, true);

        http.send();

        http.onload = function(){
            let data = JSON.parse(this.responseText);
    
            localStorage.setItem("getListTypeUpdate", JSON.stringify(data));
        }
    }

    getListTypeUpdate();

    window.history.pushState({}, pathName, window.location.origin + pathName);
    app.innerHTML = routes[pathName];
    window.location.hash = id;

    function getDataUpdate(){
        let hash = window.location.hash.substr(1);
        
        let http = new XMLHttpRequest();
        let url = "http://localhost:3000/getOneProduct/";

        http.open("GET", url + hash, true);

        http.send();

        http.onload = function(){
            let data = JSON.parse(this.responseText);

            let brands = JSON.parse(localStorage.getItem("getListBrandUpdate"));
            let types = JSON.parse(localStorage.getItem("getListTypeUpdate"));
            

            // console.log(data);

            let listBrand = "<option></option>";
            let listType = "<option></option>";


            for(var i = 0; i < brands.length; i++){
                // console.log("data information: " + data.information[0].brandName);
                // console.log("brands: " + brands[i].brandName);

                if(data.information[0].brandName != brands[i].brandName){
                    listBrand += "<option id=" + brands[i].brandID + ">" + brands[i].brandName + "</option>";
                }else{
                    listBrand += "<option id=" + brands[i].brandID + " selected>" + brands[i].brandName + "</option>";
                    localStorage.setItem("selectBrandIDUpdate", brands[i].brandID);
                }
            }

            for(var i = 0; i < types.length; i++){
                if(data.information[0].typeName != types[i].typeName){
                    listType += "<option id=" + types[i].typeID + ">" + types[i].typeName + "</option>";
                }else{
                    listType += "<option id=" + types[i].typeID + " selected>" + types[i].typeName + "</option>";
                    localStorage.setItem("selectTypeIDUpdate", types[i].typeID);
                }
            }

            let productName = data.information[0].productName;
            let productPrice = data.information[0].productPrice;
            let productColor = data.information[0].productColor;

            $(document).ready(function () {
                $(listBrand).appendTo("#listBrandUpdate");
                $(listType).appendTo("#listTypeUpdate");
                document.getElementById("productNameUpdate").value = productName;
                document.getElementById("productPriceUpdate").value = productPrice;
                document.getElementById("productColorUpdate").value = productColor;
            });

        }

    }

    getDataUpdate();
}

//Inlucde html to index
app.innerHTML = routes[window.location.pathname];
