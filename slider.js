document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.slider .list .item');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const thumbnails = document.querySelectorAll('.thumbnail .item');
    
    // Validasi elemen
    if (!items.length || !next || !prev || !thumbnails.length) {
        console.error('Elemen slider tidak ditemukan!');
        return;
    }

    let countItem = items.length;
    let itemActive = 0;
    let refreshInterval;

    function showSlider() {
        // Remove active class from old items
        const itemActiveOld = document.querySelector('.slider .list .item.active');
        const thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
        
        if (itemActiveOld) itemActiveOld.classList.remove('active');
        if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');

        // Add active class to new items
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

        // Clear and reset auto slide
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click();
        }, 5000);
    }

    // Next button event
    next.addEventListener('click', () => {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    });

    // Prev button event
    prev.addEventListener('click', () => {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showSlider();
    });

    // Thumbnail click event
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });

    // Auto play
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);

    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(refreshInterval);
    });

    slider.addEventListener('mouseleave', () => {
        refreshInterval = setInterval(() => {
            next.click();
        }, 5000);
    });

    // Initialize
    showSlider();
});