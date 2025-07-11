//Ovládání mobilního menu (otevírá a zavírá Hamburger)
function toggleMenu() {
            var menu = document.getElementById('menu');
            if (menu.classList.contains('d-none')) {
                menu.classList.remove('d-none');
				menu.classList.toggle('show');
            } else {
                menu.classList.add('d-none');
				menu.classList.toggle('show');
            }
}

