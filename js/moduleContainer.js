import { data1,data2,data3} from "./product-data.js";
import * as tm from "./testModule.js";

onload = function () {
    let container1 = document.querySelector("#products-container1");

    container1.innerHTML = "";
    tm.renderProducts(container1, data1);

    let container2 = document.querySelector("#products-container2");

    container2.innerHTML = "";
    tm.renderProductsRepeat(container2, data1);


    let container3 = document.querySelector("#products-container3");
    container3.innerHTML="";
    tm.renderProducts3(container3, data2);

    let container4 = document.querySelector("#products-container4");
    container4.innerHTML="";
    tm.renderProducts3(container4, data3);

    // code for nav bar to go up when scrolling down
    let lastScrollTop = 0;
    let bigScreenHeader = document.querySelector(".big-screen-header");
    let mobileViewHeader = document.querySelector(".mobile-view-header");

    let headers = [bigScreenHeader, mobileViewHeader];

    window.addEventListener("scroll", () => {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            headers.forEach(header => header.style.transform = "translateY(-100%)");
        } else {
            // Scrolling up
            headers.forEach(header => header.style.transform = "translateY(0)");
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For mobile or when at the top
    });

    
}
