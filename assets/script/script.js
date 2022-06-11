/// app-browser-name --disable-web-security --allow-file-access-from-files (run browser without security)

var base_url = window.location.origin;
var host = window.location.host;
// stackoverflow.com

var pathArray = window.location.pathname.split("/");
pathArray.unshift(base_url);
pathArray.pop();
let url = "";


for (pathName of pathArray) {
    url += pathName + "/";
}
console.log(url);
console.log(base_url, pathArray);
///=========================== Load another file HTML ===========================/// 
function loadHTML(file, section) {

    const menuHalaman = parseURLParams().get("menu");

    //============ AJAX with xhr ============//
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (this.status == 200) {
            section.innerHTML = xhr.responseText;
            addClass("#" + menuHalaman, "enabled");
        }
        else {
            console.warn("Failure status code not 200");
        }
    }
    xhr.open('get', file, true);
    xhr.send();
    //============ End AJAX with xhr ============//


    // fetch(file)
    //     .then(response => response.text())
    //     .then(text => {
    //         section.innerHTML = text;
    //         const menuHalaman = parseURLParams().get("menu");
    //         addClass("#" + menuHalaman, "enabled");
    //     });
}

const headerSection = document.getElementById("header");
const footerSection = document.getElementById("footer");
loadHTML(url + 'templates/header.html', headerSection);
loadHTML(url + 'templates/footer.html', footerSection);

///=========================== End Load another file HTML ===========================/// 


// === Coba session storage
// document.getElementById("login").addEventListener("click",()=>{
//     sessionStorage.username = document.getElementById("username").value;
//     console.log(sessionStorage.username);
// });
// console.log(sessionStorage.username);


function parseURLParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return urlParams;
}

const paramsUrl = parseURLParams();




// ============= Add & Remove Class ambil dari variabel dari setiap elemen pada object queryselectorAll =============//
function removeClass(selector, propertyVal) {
    const selectorObject = document.querySelectorAll(selector);
    const typeVar = typeof (selectorObject);
    const objSize = Object.keys(selectorObject).length;
    if (typeVar != "object" || objSize < 1) {
        selectorObject.classList.remove(propertyVal);
    }
    else {
        selectorObject.forEach(function (item) {
            item.classList.remove(propertyVal);
        });
    }

}

function addClass(selector, propertyVal) {
    const selectorObject = document.querySelectorAll(selector);
    const typeVar = typeof (selectorObject);
    const objSize = Object.keys(selectorObject).length;

    if (typeVar != "object" || objSize < 1) {
        selectorObject.classList.add(propertyVal);
    }
    else {
        selectorObject.forEach(function (item) {
            item.classList.add(propertyVal);
        });
    }
}
// ============= End Add & Remove Class ambil dari variabel dari setiap elemen pada object queryselectorAll =============//


const contentObj = document.getElementById("content");
const onloadObj = document.getElementById("onload-page");

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        onloadObj.style.display = "none";
    }
}