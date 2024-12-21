// testModule.js
export function renderProducts(container, data) {
    container.innerHTML = ""; // Clear any previous content

    data.forEach(product => {
        let productCard = `
            <div class="col-md-3">
                <a href="JavaScript:void(0)" class="text-decoration-none text-black">
                    <div class="image-sizer">
                        ${product.imgHoverPattern ? `<img class="hover-pattern" src="${product.imgHoverPattern}" alt="" loading="lazy">` : ""}
                        <img class="hover-image" src="${product.imgHover}" alt="" loading="lazy">
                        <img class="image" src="${product.img}" alt="${product.title}" loading="lazy">
                    </div>
                    <div class="row">
                        <section class="col-7 ps-5 ps-lg-3">
                            ${product.new === "y" ? '<p class="mb-0 fs-19">New!</p>' : ""}
                            <p class="fs-19"><b>${product.title}</b></p>
                        </section>
                        <section class="col-5 pe-5 pe-lg-3">
                            <p class="text-end fs-19">${product.cost}</p>
                        </section>
                    </div>
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
                <a href="JavaScript:void(0)"  class="text-decoration-none text-black">
                    <div class="image-sizer">
                        ${product.imgHoverPattern ? `<img class="hover-pattern" src="${product.imgHoverPattern}" alt="" loading="lazy">` : ""}
                        <img class="hover-image" src="${product.imgHover}" alt="" loading="lazy">
                        <img class="image" src="${product.img}" alt="${product.title}" loading="lazy">
                    </div>
                    <div class="row">
                        <section class="col-7 ps-5 ps-lg-3">
                            ${product.new === "y" ? '<p class="mb-0 fs-19">New!</p>' : ""}
                            <p class="fs-19"><b>${product.title}</b></p>
                        </section>
                        <section class="col-5 pe-5 pe-lg-3">
                            <p class="text-end fs-19">${product.cost}</p>
                        </section>
                    </div>
                </a>
            </div>
        `;
        container.insertAdjacentHTML("beforeend", productCard);
    });
}

export function renderProducts3(container, data2) {
    data2.forEach(product => {
        let colClass = product.isBig ? 'col-md-12' : 'col-md-6';
        let productHTML = `
            <div class="${colClass}">
                <a href="JavaScript:void(0)"  class="text-decoration-none text-black">
                    <div class="${product.isBig ? 'image-sizerBig' : 'image-sizer'}">
                        <img class="hover-pattern" src="${product.hoverPattern}" alt="" loading="lazy">
                        <img class="hover-image" src="${product.hoverImage}" alt="" loading="lazy">
                        <img class="image" src="${product.image}" alt="${product.title}" loading="lazy">
                    </div>
                    <div class="row">
                        <section class="col-7 ps-5 ps-lg-3">
                            <p class="mb-0 fs-19">New!</p>
                            <p class="fs-19"><b>${product.title}</b></p>
                        </section>
                        <section class="col-5 pe-5 pe-lg-3">
                            <p class="text-end fs-19">${product.price}</p>
                        </section>
                    </div>
                </a>
            </div>
        `;
        
        container.innerHTML += productHTML;  // Append the dynamically created HTML
    });
}

export function renderProducts4(container, data3) {
    data3.forEach(product => {
        let colClass = product.isBig ? 'col-md-12' : 'col-md-6';
        let productHTML = `
            <div class="${colClass}">
                <a href="JavaScript:void(0)"  class="text-decoration-none text-black">
                    <div class="${product.isBig ? 'image-sizerBig' : 'image-sizer'}">
                        <img class="hover-pattern" src="${product.hoverPattern}" alt="" loading="lazy">
                        <img class="hover-image" src="${product.hoverImage}" alt="" loading="lazy">
                        <img class="image" src="${product.image}" alt="${product.title}" loading="lazy">
                    </div>
                    <div class="row">
                        <section class="col-7 ps-5 ps-lg-3">
                            <p class="mb-0 fs-19">New!</p>
                            <p class="fs-19"><b>${product.title}</b></p>
                        </section>
                        <section class="col-5 pe-5 pe-lg-3">
                            <p class="text-end fs-19">${product.price}</p>
                        </section>
                    </div>
                </a>
            </div>
        `;
        
        container.innerHTML += productHTML;  // Append the dynamically created HTML
    });
}



export * from "./testModule.js";