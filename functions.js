(() => {
    const list = document.getElementById('event-list');
    const items = list.querySelectorAll('li');
    if (items.length <= 3) {
        list.style.justifyContent = 'center';
    } else {
        list.style.justifyContent = 'flex-start';
    }


    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    // Mouse events
    list.addEventListener('mousedown', startDrag);
    list.addEventListener('mouseleave', endDrag);
    list.addEventListener('mouseup', endDrag);
    list.addEventListener('mousemove', drag);

    // Touch events
    list.addEventListener('touchstart', startDrag);
    list.addEventListener('touchend', endDrag);
    list.addEventListener('touchmove', drag);

    function startDrag(e) {
        isDown = true;
        startX = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;
        scrollLeft = list.scrollLeft;
    }

    function endDrag() {
        isDown = false;
    }

    function drag(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
        const walk = (x - startX) * 2; // Adjust scroll speed here
        list.scrollLeft = scrollLeft - walk;
    }
})()

window.addEventListener('load', function () {
    var overlay = document.querySelector('.loading-screen');
    var body = this.document.querySelector('body')
    body.style.overflowY = 'auto'
    overlay.style.display = 'none';
});