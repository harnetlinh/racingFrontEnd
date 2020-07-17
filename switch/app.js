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

//Change url not redirect
let changeApp = (pathName) =>{
    window.history.pushState({}, pathName, window.location.origin + pathName);
    app.innerHTML = routes[pathName];
}

//Inlucde html to index
app.innerHTML = routes[window.location.pathname];
