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

let homepage = `
    <div class="container" id="showProducts">
        <div class="row" id="productList"></div>
    </div>
`;