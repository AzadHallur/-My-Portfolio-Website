
const hamb = document.querySelector('.hamb');
const mobile_menu = document.querySelector('.nav-list ul');
const header = document.querySelector('#header .header');
const menu_items = document.querySelectorAll('.nav-list ul li a');

hamb.addEventListener('click', () => {
	hamb.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

    menu_items.forEach((item) => {
	item.addEventListener('click', () => {
		hamb.classList.remove('active');
		mobile_menu.classList.remove('active');
	});
});
