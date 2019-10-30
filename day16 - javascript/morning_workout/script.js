const changeClass = () => {
    const menu = document.querySelector('#ikona');
    menu.className = 'menu_content';
};

const hiddenMenu = () => {
    const menu = document.querySelector('#ikona');
    menu.className = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector('.icon');
    icon.addEventListener('mouseover', changeClass);
});

document.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector('#zkouska');
    icon.addEventListener('mouseleave', hiddenMenu);
});