(function () {

    "use strict";

    var masthead = document.querySelector(".mh-image");

    var slides = [
        '<figure>' +
            '<img src="./img/flower.jpg" alt="flower">' +
            '<figcaption>Green is the future!</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/lighthouse.jpg" alt="lighthouse">' +
            '<figcaption>Green is the future!</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/solarpanel.jpg" alt="solarpanel">' +
            '<figcaption>Green is the future!</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/windmill.jpg" alt="windmill">' +
            '<figcaption>Green is the future!</figcaption>' +
        '</figure>'
    ];







    var i, k;

    function fadeOut() {
        masthead.style.opacity = 0;
    }

    i = 0;

    function runSlides() {
        masthead.style.opacity = 1;

        if (i > 3) {
            i = 0;

        }

        masthead.innerHTML = slides[i];

        i++;

        window.setTimeout(fadeOut, 5000);

    }

    runSlides();

    window.setInterval(runSlides, 6000);


    var buttons = document.querySelectorAll("main span");

    var contents = [
        '<figure class="clearfix">' +
            '<img src="./img/flower.jpg" alt="flower">' +
            '<figcaption>Renewable energy is a practical, affordable solution to our electricity needs.</figcaption>' +
        '</figure>',

         '<figure class="clearfix">' +
            '<img src="./img/lighthouse.jpg" alt="lighthouse">' +
            '<figcaption>It’s not always necessary to install a complete solar array to achieve some of the benefits of solar technology. Installing a solar water heater can be a great way to cut down on energy costs at a much lower initial expense.</figcaption>' +
        '</figure>',

        '<figure class="clearfix">' +
            '<img src="./img/solarpanel.jpg" alt="solarpanel">' +
            '<figcaption>Solar panels, or photovoltaic cells, are one of the best ways to reduce pollution and lower your electricity expenses.</figcaption>' +
        '</figure>'
    ];

    var container = document.querySelector(".container");
    container.innerHTML = contents[0];




    function handleClick(ev) {
        ev.preventDefault();
        var target = ev.target;

        for (k = 0; k < buttons.length; k++) {
            if (buttons[k].hasAttribute("id")) {
                buttons[k].removeAttribute("id");
            }
        }

        if (ev.target.innerHTML === "1") {
            container.innerHTML = contents[0];
        } else if (ev.target.innerHTML === "2") {
            container.innerHTML = contents[1];
        } else {
            container.innerHTML = contents[2];
        }

        ev.target.setAttribute("id", "active");
    }

    for (k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener("click", handleClick);
    }


})();
