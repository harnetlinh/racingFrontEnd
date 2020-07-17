function deleteProduct(id){
    let http = new XMLHttpRequest();
    let url = "http://localhost:3000/delete";

    let productIdDelete = {
        productID: id
    }

    http.open("DELETE", url, true);

    http.setRequestHeader('Content-type','application/json; charset=utf-8');

    http.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById(id).remove();
        }else{
            alert("Delete failed");
        }
    }

    http.send(JSON.stringify(productIdDelete));
}