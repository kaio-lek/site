const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const submenu = item.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.classList.toggle('active');
        }

        menuItems.forEach(otherItem => {
            const otherSubmenu = otherItem.nextElementSibling;
            if (otherSubmenu && otherSubmenu !== submenu && otherSubmenu.classList.contains('submenu')) {
                otherSubmenu.classList.remove('active');
            }
        });
    });
});
