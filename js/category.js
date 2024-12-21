import {categoryData} from "./category-data.js";

onload = function () {
    // Get the URL parameter for category, default to "women" if not provided

    let selectedCategory = sessionStorage.getItem('selectedCategory') || 'women'; // Default to "women"

    let radioButtons = document.querySelectorAll('input[name="productCategory"]');
    let productSection = document.querySelector('#productSection'); // Common section for all products

    // Set the selected category in the radio buttons
    // Check the selected radio button
    document.querySelector(`input[name="productCategory"][value="${selectedCategory}"]`).checked = true;

    //  radio buttons
    selectCategory(radioButtons, productSection, categoryData);

    //Called in onload for the purpose of displaying the default category
    productSection.innerHTML = displayProducts(selectedCategory, categoryData);

    // Code for the nav bar to go up when scrolling down
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
};

function selectCategory(radioButtons, productSection, categoryData) {
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('click', function () {
            let selectedCategory = this.value;
            // called after selecting a specific 
            productSection.innerHTML = displayProducts(selectedCategory, categoryData);
        });
    });
}

// Function to display products in the selected section
function displayProducts(selectedCategory, categoryData) {
    
    // Filter products for the selected category
    let products = categoryData.products[selectedCategory];
    
    if (products.length === 0) {
        productSection.innerHTML = `<p>No products available in this category.</p>`;
        return;
    }

    // using for each to render data
    let productElement = "";
    products.forEach(product => {
        productElement += `
            <div class="col-md-3 mb-5">
                <a href="javaScript:void(0)" class="box text-decoration-none text-black">
                    <div class="image-sizer">
                        ${product.images[0] ? `<img class="hover-pattern" src="${product.images[0]}" alt="" loading="lazy">` : ""}
                        <img class="hover-image" src="${product.images[0]}" alt="" loading="lazy">
                        <img class="image" src="${product.images[0]}" alt="${product.title}" loading="lazy">
                    </div>
                    <section class="w-50 float-start">
                        <span class="mb-0 fs-19 ">New! <br/></span>
                        <span class="fs-19"><b>${product.title}</b></span>
                    </section>
                    <section class="  float-end">
                        <span class="text-end fs-19">Rs. ${product.price}</span>
                    </section>
                </a>
            </div>
        `;
        // productSection.appendChild(productElement);
        
    });

    return productElement;
}
