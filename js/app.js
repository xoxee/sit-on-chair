document.addEventListener('DOMContentLoaded', function () {

    //submenu

    var menuItems = document.querySelectorAll('.menu ul li');
    var subMenu = document.querySelector('.subMenu');

    menuItems[0].addEventListener('mouseover', function () {
        subMenu.classList.remove('hidden');
    })

    subMenu.addEventListener('mouseleave', function () {
        subMenu.classList.add('hidden');
    })

    for (var i = 1; i <= 2; i++) {
        menuItems[i].addEventListener('mouseover', function () {
            subMenu.classList.add('hidden');
        })
    }



    //slider

    var arrowLeft = document.querySelector('#arrowLeft');
    var arrowRight = document.querySelector('#arrowRight');
    var headerContent = document.querySelectorAll('.headerContent');
    var counter = 0;

    headerContent[counter].classList.remove('hidden');

    arrowRight.addEventListener('click', function () {
        headerContent[counter].classList.add('hidden');
        counter++;
        if (counter > 2) {
            counter = 0;
        }
        headerContent[counter].classList.remove('hidden');

    })

    arrowLeft.addEventListener('click', function () {
        headerContent[counter].classList.add('hidden');
        counter--;
        if (counter < 0) {
            counter = 2;
        }
        headerContent[counter].classList.remove('hidden');

    })


    //hover 1

    var thumb = document.querySelectorAll('.thumbnail');
    var caption = document.querySelectorAll('.caption');

    for (var i = 0; i < 2; i++) {
        thumb[i].addEventListener('mouseover', function () {

            this.firstElementChild.classList.add('hidden');
        })

        thumb[i].addEventListener('mouseleave', function () {

            this.firstElementChild.classList.remove('hidden');
        })
    }


    //hover 2

    var boxes = document.querySelectorAll('.box');

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', function () {
            this.classList.add('boxActive');
        })

        boxes[i].addEventListener('mouseleave', function () {
            this.classList.remove('boxActive');
        })
    }


    //calculator

    var listArrow = document.querySelectorAll('.list_arrow');
    var listPanel = document.querySelectorAll('.list_panel');

    for (var i = 0; i < listArrow.length; i++) {
        listArrow[i].addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('hidden');
        })
    }

    var title = document.querySelector('.title');
    var color = document.querySelector('.color');
    var pattern = document.querySelector('.pattern');
    var checkbox = document.querySelector('#transport');
    var transport = document.querySelector('.transport');

    var values = document.querySelectorAll('.value');
    var sum = document.querySelector('.sum');

    var panelElements1 = listPanel[0].querySelectorAll('li');
    var panelElements2 = listPanel[1].querySelectorAll('li');
    var panelElements3 = listPanel[2].querySelectorAll('li');

    function suma() {
        result = 0;
        for (var i = 0; i < values.length; i++) {
            if (values[i]) {
                result += Number(values[i].innerText);
            }
        }
        sum.innerText = result;
    }

    for (var i = 0; i < panelElements1.length; i++) {
        panelElements1[i].addEventListener('click', function () {
            title.innerText = this.innerText;
            this.parentElement.classList.add('hidden');
            if (title.innerText == "Clair") {
                values[0].innerText = "200";
            } else if (title.innerText == "Margarita") {
                values[0].innerText = "270";
            } else if (title.innerText == "Selena") {
                values[0].innerText = "300";
            }
            suma();
        })
    }

    for (var i = 0; i < panelElements2.length; i++) {
        panelElements2[i].addEventListener('click', function () {
            color.innerText = this.innerText;
            this.parentElement.classList.add('hidden');

            if (color.innerText == "Czerwony" || color.innerText == "Pomarańczowy") {
                values[1].innerText = "50";
            } else if (color.innerText == "Czarny") {
                values[1].innerText = "20";
            }
            suma();
        })
    }

    for (var i = 0; i < panelElements3.length; i++) {
        panelElements3[i].addEventListener('click', function () {
            pattern.innerText = this.innerText;
            this.parentElement.classList.add('hidden');

            if (pattern.innerText == "Tkanina") {
                values[2].innerText = "70";
            } else if (pattern.innerText == "Skóra") {
                values[2].innerText = "130";
            }
            suma();

        })
    }

    checkbox.addEventListener('click', function () {
        this.classList.toggle('checked');
        if (this.classList.contains('checked')) {
            transport.innerText = "Transport";
            values[3].innerText = "70";
        } else {
            transport.innerText = "";
            values[3].innerText = "";
        }
        suma();
    })


    //Form



})
