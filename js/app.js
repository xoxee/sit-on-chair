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


    //hover

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

})
