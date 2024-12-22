// testModule.js
export function renderProducts(container, data) {
    container.innerHTML = ""; // Clear any previous content

    data.forEach(product => {
        let productCard = `
            <div class="col-md-3">
                <a href="JavaScript:void(0)" class="box text-decoration-none text-black">
                    <div class="image-sizer">
                        ${product.imgHoverPattern ? `<img class="hover-pattern" src="${product.imgHoverPattern}" alt="" loading="lazy">` : ""}
                        <img class="hover-image" src="${product.imgHover}" alt="" loading="lazy">
                        <img class="image" src="${product.img}" alt="${product.title}" loading="lazy">
                    </div>
                    <section class="w-50 float-start">
                        ${product.new === "y" ? '<span class="mb-0 fs-19 ">New! <br/></span>' : ""}
                        <span class="fs-19"><b>${product.title}</b></span>
                    </section>
                    <section class="  float-end">
                        <span class="text-end fs-19">${product.cost}</span>
                    </section>
                </a>
            </div>
        `;
        container.insertAdjacentHTML("beforeend", productCard);
    });
}

export function renderProductsRepeat(container, data) {
    container.innerHTML = ""; // Clear any previous content

    data.forEach(product => {
        let productCard = `
            <div class="col-md-3">
                <a href="JavaScript:void(0)"  class="box text-decoration-none text-black">
                    <div class="image-sizer">
                        ${product.imgHoverPattern ? `<img class="hover-pattern" src="${product.imgHoverPattern}" alt="" loading="lazy">` : ""}
                        <img class="hover-image" src="${product.imgHover}" alt="" loading="lazy">
                        <img class="image" src="${product.img}" alt="${product.title}" loading="lazy">
                    </div>
                    <section class="w-50 float-start">
                        ${product.new === "y" ? '<span class="mb-0 fs-19 ">New! <br/></span>' : ""}
                        <span class="fs-19"><b>${product.title}</b></span>
                    </section>
                    <section class="  float-end">
                        <span class="text-end fs-19">${product.cost}</span>
                    </section>
                </a>
            </div>
        `;
        container.insertAdjacentHTML("beforeend", productCard);
    });
}

export function renderProducts3(container, data2) {
    data2.forEach(product => {
        let colClass = product.isBig ? 'col-md-12 boxBig mb-5 mb-lg-5 ' : ' col-md-6 box mb-5 mb-lg-5';
        let productHTML = `
            <div class="${colClass}">
                <a href="JavaScript:void(0)"  class="  text-decoration-none text-black">
                    <div class="${product.isBig ? 'image-sizerBig' : 'image-sizer'}">
                        <img class="hover-pattern" src="${product.hoverPattern}" alt="" loading="lazy">
                        <img class="hover-image" src="${product.hoverImage}" alt="" loading="lazy">
                        <img class="image" src="${product.image}" alt="${product.title}" loading="lazy">
                    </div>
                    <section class="w-50 float-start">
                        ${product.new === "y" ? '<span class="mb-0 fs-19 ">New! <br/></span>' : ""}
                        <span class="fs-19"><b>${product.title}</b></span>
                    </section>
                    <section class="  float-end">
                        <span class="text-end fs-19">Rs. ${product.price}</span>
                    </section>
                </a>
            </div>
        `;

        container.innerHTML += productHTML;  // Append the dynamically created HTML
    });
}

export function renderProducts4(container, data3) {
    data3.forEach(product => {
        let colClass = product.isBig ? 'col-md-12 mb-5 mb-lg-0 ' : 'mb-5 mb-lg-0 col-md-6';
        let productHTML = `
            <div class="${colClass}">
                <a href="JavaScript:void(0) "  class=" box text-decoration-none text-black">
                    <div class="${product.isBig ? 'image-sizerBig' : 'image-sizer'}">
                        <img class="hover-pattern" src="${product.hoverPattern}" alt="" loading="lazy">
                        <img class="hover-image" src="${product.hoverImage}" alt="" loading="lazy">
                        <img class="image" src="${product.image}" alt="${product.title}" loading="lazy">
                    </div>
                    <section class="w-50 float-start">
                        ${product.new === "y" ? '<span class="mb-0 fs-19 ">New! <br/></span>' : ""}
                        <span class="fs-19"><b>${product.title}</b></span>
                    </section>
                    <section class="  float-end">
                        <span class="text-end fs-19">${product.price}</span>
                    </section>
                </a>
            </div>
        `;

        container.innerHTML += productHTML;  // Append the dynamically created HTML
    });
}

export function setCategory(category) {
    // Store the selected category in sessionStorage
    sessionStorage.setItem('selectedCategory', category);
}

export * from "./homeModule.js";