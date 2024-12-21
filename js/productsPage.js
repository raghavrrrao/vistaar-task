
//Make sold out button enabled/disabled
function makeBtnEnabledDisabled(objBtn, sVal) {
    if (sVal > 0) {
        objBtn.disabled = false;
    } else {
        objBtn.disabled = true;
    }
}

function imageGallerySwitcher() {
    let smallBoxes = document.querySelectorAll('.small-box img');
    let bigBox = document.getElementById('bigBox');

    smallBoxes.forEach(function (box) {
        box.addEventListener('click', function () {
            // Remove 'active' class from all small images
            smallBoxes.forEach(function (b) {
                b.classList.remove('active');
            });

            // Add 'active' class to the clicked image
            box.classList.add('active');

            // Change the big image to the clicked small image's src
            let imgSrc = box.src;
            bigBox.innerHTML = `<img src='${imgSrc}' alt='Selected Image'>`;
        });
    });
}