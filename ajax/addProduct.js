function removeFileName(){
    let imgs = document.getElementById("imgProducts").getElementsByTagName("img");
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

function selectBrand(select){
    localStorage.setItem("selectBrandName", select[select.selectedIndex].value);
    localStorage.setItem("selectBrandID", select[select.selectedIndex].id);
}

function selectType(select){
    localStorage.setItem("selectTypeName", select[select.selectedIndex].value);
    localStorage.setItem("selectTypeID", select[select.selectedIndex].id);
}

function AddProduct(){
    let carName = document.getElementById("exampleInputName").value;
    let carPrice = document.getElementById("exampleInputPrice").value;
    let carColor = document.getElementById("exampleInputColor").value;
    let carBrandName = localStorage.getItem("selectBrandName");
    let carBrandID = localStorage.getItem("selectBrandID");
    let carTypeName = localStorage.getItem("selectTypeName");
    let carTypeID = localStorage.getItem("selectTypeID");


    if(carName == "" || carPrice == "" || carColor == "" || carBrandName == "" || carTypeName == ""){
        alert("Bạn chưa điền đầy đủ thông tin về mẫu xe");
    }else{
        let imgs = document.getElementById('imgProducts').getElementsByTagName('img');
        let imgProduct = [];
        if(imgs.length != 0){
            for(var i = 0; i < imgs.length; i++){
                if(!imgs[i].src == ""){
                    imgProduct.push(imgs[i].currentSrc);
                }
            }

            let http = new XMLHttpRequest();
            let url = "http://localhost:3000/addProduct";
            http.open("POST", url, true);
            http.setRequestHeader('Content-type','application/json; charset=utf-8');

            let Product = {
                productName: document.getElementById("exampleInputName").value,
                productBrand: carBrandID,
                productPrice: document.getElementById("exampleInputPrice").value,
                productColor: document.getElementById("exampleInputColor").value,
                productTypeID: carTypeID,
                imageList: imgProduct,
                account_added: "admin"
            }

            http.onload = function(){
                if(this.readyState == 4 && this.status == 200){
                  changeApp('/');
                  return false;
            }
        }
            http.send(JSON.stringify(Product));

        }else{
            alert("Bạn chưa thêm ảnh của mẫu xe này!")
        }
    }
}
