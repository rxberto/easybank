document.addEventListener('DOMContentLoaded', function() {
    var _items = document.getElementById('_items');
    var _toggle = document.getElementById('_toggle');
    var body = document.body; // Add this line to define the body variable

    _toggle.onclick = function() {
        _items.classList.toggle('open');
        _toggle.classList.toggle('close');
        body.classList.toggle('no-scroll');
    };
});
