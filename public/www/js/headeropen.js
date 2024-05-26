document.querySelector('.navi-menu').addEventListener('click', function() { 
    var openMenu = document.querySelector('.open-menu');

    if (openMenu.style.display === 'none') {
        openMenu.style.display = 'block';
    } else {
        openMenu.style.display = 'none';
    }
});