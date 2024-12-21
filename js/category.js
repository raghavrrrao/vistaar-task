import { categoryData } from "./category-data.js";

onload = function () {
    // Get the URL parameter for category, default to "women" if not provided
    let urlParams = new URLSearchParams(window.location.search);
    let selectedCategory = urlParams.get('category') || 'women'; // Default to "women"

    let radioButtons = document.querySelectorAll('input[name="productCategory"]');
    let productSection = document.querySelector('#productSection'); // Common section for all products

    // Set the selected category in the radio buttons
    // Check the selected radio button
    let selectedRadioButton = document.querySelector(`input[name="productCategory"][value="${selectedCategory}"]`);
    if (selectedRadioButton) {
        selectedRadioButton.checked = true; 
    }

    //  radio buttons
    selectCategory(radioButtons, productSection, categoryData);

    //Called in onload for the purpose of displaying the default category
    displayProducts(selectedCategory, productSection, categoryData);

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

// Function to initialize category selection with radio buttons
function selectCategory(radioButtons, productSection, categoryData) {
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('click', function () {
            let selectedCategory = this.value;
            // called after selecting a specific 
            displayProducts(selectedCategory, productSection, categoryData);
        });
    });
}

// Function to display products in the selected section
function displayProducts(category, productSection, categoryData) {
    productSection.innerHTML = ''; // Clear any previous products

    // Filter products for the selected category
    let products = categoryData.products[category];

    if (products.length === 0) {
        productSection.innerHTML = `<p>No products available in this category.</p>`;
        return;
    }

    // Used filter(product => product) to ensure only valid product objects are processed i.e no null entries
    products.filter(product => product).forEach(product => {
        let productElement = document.createElement('div');
        productElement.classList.add('col-md-3');
        productElement.innerHTML = `
            <div>
                <a href="javaScript:void(0)" class="text-decoration-none text-black">
                    <div class="image-sizer">
                        ${product.images[0] ? `<img class="hover-pattern" src="${product.images[0]}" alt="" loading="lazy">` : ""}
                        <img class="hover-image" src="${product.images[0]}" alt="" loading="lazy">
                        <img class="image" src="${product.images[0]}" alt="${product.title}" loading="lazy">
                    </div>
                    <div class="row">
                        <section class="col-7 ps-5 ps-lg-5">
                            <p class="mb-0 fs-19">New!</p>
                            <p class="fs-19"><b>${product.title}</b></p>
                        </section>
                        <section class="col-5 pe-5 pe-lg-5">
                            <p class="text-end fs-19">Rs. ${product.price}</p>
                        </section>
                    </div>
                </a>
            </div>
        `;
        productSection.appendChild(productElement);
    });
}
