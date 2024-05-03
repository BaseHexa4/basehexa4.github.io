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

    /*map*/
    const mapview = document.querySelector('.third-page .map-view')
    const luzonhover = document.querySelector('.third-page .luzon');
    const luzonarea = document.querySelector('.third-page .luzonarea');
    const visayashover = document.querySelector('.third-page .visayas');
    const visayasarea = document.querySelector('.third-page .visayasarea');
    const mindanaohover = document.querySelector('.third-page .mindanao');
    const mindanaoarea = document.querySelector('.third-page .mindanaoarea');


    luzonhover.addEventListener('mouseover', function () {
        luzonarea.style.opacity = 1;
        mapview.style.backgroundImage = "url('./thirdpage/Luzon.png')";
        this.style.cursor = 'pointer';
    });
    luzonhover.addEventListener('mouseout', function () {
        luzonarea.style.opacity = 0;
        mapview.style.backgroundImage = "url('./thirdpage/map.png')";
    });
    visayashover.addEventListener('mouseover', function () {
        mapview.style.backgroundImage = "url('./thirdpage/Visayas.png')";
        visayasarea.style.opacity = 1;
        this.style.cursor = 'pointer';
    });
    visayashover.addEventListener('mouseout', function () {
        visayasarea.style.opacity = 0;
        mapview.style.backgroundImage = "url('./thirdpage/map.png')";
    });
    mindanaohover.addEventListener('mouseover', function () {
        mapview.style.backgroundImage = "url('./thirdpage/Mindanao.png')";
        mindanaoarea.style.opacity = 1;
        this.style.cursor = 'pointer';
    });
    mindanaohover.addEventListener('mouseout', function () {
        mindanaoarea.style.opacity = 0;
        mapview.style.backgroundImage = "url('./thirdpage/map.png')";
    });
    /*map*/
});

(() => {
    var page1 = document.querySelector('.first-page');
    var page2 = document.querySelector('.second-page');
    var page3 = document.querySelector('.third-page');
    var page4 = document.querySelector('.fourth-page');
    var page5 = document.querySelector('.fifth-page');
    var page6 = document.querySelector('.sixth-page');
    var dot1 = document.querySelector('.dot-1');
    var dot2 = document.querySelector('.dot-2');
    var dot3 = document.querySelector('.dot-3');
    var dot4 = document.querySelector('.dot-4');
    var dot5 = document.querySelector('.dot-5');
    var dot6 = document.querySelector('.dot-6');
    var isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        
        // Calculate the visible width and height of the element
        var visibleWidth = Math.min(bounding.right, viewportWidth) - Math.max(bounding.left, 0);
        var visibleHeight = Math.min(bounding.bottom, viewportHeight) - Math.max(bounding.top, 0);
    
        // Calculate the total area of the element
        var totalArea = (bounding.right - bounding.left) * (bounding.bottom - bounding.top);
    
        // Calculate the percentage of visible area
        var visibleArea = (visibleWidth * visibleHeight) / totalArea * 100;
    
        // Check if the visible area is more than 40%
        return visibleArea > 40;
    };

    page1.getBoundingClientRect()

    if (isInViewport(page1)) {
        console.log('tes')
        dot1.classList.add('dots-active');
    }
    document.addEventListener('scroll', function () {

        if (isInViewport(page1)) {
            dot1.classList.add('dots-active');
        } else {
            dot1.classList.remove('dots-active');
        }

        if (isInViewport(page2)) {
            dot2.classList.add('dots-active');
        } else {
            dot2.classList.remove('dots-active');
        }

        if (isInViewport(page3)) {
            dot3.classList.add('dots-active');
        } else {
            dot3.classList.remove('dots-active');
        }

        if (isInViewport(page4)) {
            dot4.classList.add('dots-active');
        } else {
            dot4.classList.remove('dots-active');
        }

        if (isInViewport(page5)) {
            dot5.classList.add('dots-active');
        } else {
            dot5.classList.remove('dots-active');
        }

        if (isInViewport(page6)) {
            dot6.classList.add('dots-active');
        } else {
            dot6.classList.remove('dots-active');
        }

    });
    //page indicator
})()