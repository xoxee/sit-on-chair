document.addEventListener('DOMContentLoaded', function () {

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
})
