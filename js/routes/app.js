'use strict';

(function () {
    //Tạo hash, file html, đặt load mặc định
    function init() {
        var router = new Router([
            new Route('homepage', 'homepage.html', true),            
            new Route('addProduct', 'addProduct.html'),
            new Route('managementProducts', 'managementProducts.html')
        ]);
    }
    init();
}());