function selectBrandUpdate(select){
    localStorage.setItem("selectBrandNameUpdate", select[select.selectedIndex].value);
    localStorage.setItem("selectBrandIDUpdate", select[select.selectedIndex].id);
}

function selectTypeUpdate(select){
    localStorage.setItem("selectTypeNameUpdate", select[select.selectedIndex].value);
    localStorage.setItem("selectTypeIDUpdate", select[select.selectedIndex].id);
}

function updateProductInformation(){

    let productID = window.location.hash.substr(1);
    let productBrand = localStorage.getItem("selectBrandIDUpdate");
    let productName = document.getElementById("productNameUpdate").value;
    let productPrice = document.getElementById("productPriceUpdate").value;
    let productTypeID = localStorage.getItem("selectTypeIDUpdate");
    let productColor = document.getElementById("productColorUpdate").value;
    let account_added = "admin";


    let informationOfProductUpdate = {
        productID: productID,
        productBrand: productBrand,
        productName: productName,
        productPrice: productPrice,
        productTypeID: productTypeID,
        productColor: productColor,
        account_added: account_added,
    }

    if(productBrand != "" || productName != "" || productPrice != "" || productTypeID != "" || productColor != "" || account_added != ""){
        let http = new XMLHttpRequest();
        let url = "http://localhost:3000/updateProductInformation";
    
        http.open("PUT", url, true);
    
        http.setRequestHeader('Content-type','application/json; charset=utf-8');

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

        http.send(JSON.stringify(informationOfProductUpdate));
    }else{
        alert("Cập nhật thông tin thất bại!")
    }
}


