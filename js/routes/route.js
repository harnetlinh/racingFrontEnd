'use stict';

//Khởi tạo Route
function Route(name, htmlName, defaultRoute) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}

//Thuộc tính của Route
Route.prototype = {
    name: undefined,
    htmlName: undefined,
    default: undefined,
    constructor: function (name, htmlName, defaultRoute) {
        this.name = name; //Tên của hash
        this.htmlName = htmlName; //File html cần include
        this.default = defaultRoute; //Đặt mặc định khi load trang web sẽ vào hash nào
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name; 
    }
}