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
                '<td> <button type="submit" class="btn btn-primary" id="' + data[i].productID + '"> Edit </button>' +
                '<button type="submit" class="btn btn-primary" id="' + data[i].productID + '" onclick="deleteProduct(this.id)"> Delete </button>' + 
                '</td>' +
            '</tr>';

            no++;
        }

        localStorage.setItem("loadTable", products);
    }
}

loadTable();


let managementproduct = `
    <div class="container">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Type</th>
                    <th scope="col">Color</th>
                    <th scope="col">Price</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody id="tableProduct">`
                + localStorage.getItem("loadTable") +   
            `</tbody>
        </table>
    </div>
`;


