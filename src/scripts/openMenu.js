var openMenu = function openMenu(navId, toggleId) {
    var nav = document.getElementById(navId);
    var toggle = document.getElementById(toggleId);

    if (!nav || !toggle) return;

    toggle.addEventListener('click', function () {
        nav.classList.toggle('show');
        toggle.classList.toggle('active');
    });
};

exports.default = openMenu;