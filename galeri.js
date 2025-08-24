// Data galeri
const galleryData = [
    {
        src: "cool1.jpg",
        category: "cool",
        caption: "Gunung Merapi"
    },
    {
        src: "freak1.jpg",
        category: "freak",
        caption: "before reading the book"
    },
    {
        src: "cool2.jpg",
        category: "cool",
        caption: "Pulang Kampung"
    },
    {
        src: "cool3.jpg",
        category: "cool",
        caption: "modal lightroom"
    },
    {
        src: "cool4.jpg",
        category: "cool",
        caption: "Danz The Explorer"
    },
    {
        src: "cool5.jpg",
        category: "cool",
        caption: "Danz The Explorer part 2"
    },
    {
        src: "cool6.jpg",
        category: "cool",
        caption: "bukit merapi"
    },
    {
        src: "freak2.jpg",
        category: "freak",
        caption: "yang bener..."
    },
    {
        src: "freak3.jpg",
        category: "freak",
        caption: "first time eating gacoan noodles"
    },
    {
        src: "memories1.jpg",
        category: "memories",
        caption: "penampakan 2 anomali"
    },
    {
        src: "memories2.jpg",
        category: "memories",
        caption: "juara 1 lomba fashion show"
    },
    {
        src: "cool7.jpg",
        category: "cool",
        caption: "mabar di rumah icat"
    },
    {
        src: "cool8.jpg",
        category: "cool",
        caption: "sunset with gacoan"
    },
     {
        src: "memories3.JPG",
        category: "memories",
        caption: "Duo maut"
    },
     {
        src: "memories4.jpg",
        category: "memories",
        caption: "..."
    },
    {
        src: "memories5.jpg",
        category: "memories",
        caption: "Tim jurnalistik & peserta lomba"
    },
    {
        src: "memories6.jpg",
        category: "memories",
        caption: "Muhadhoroh Akbar"
    },
    {
        src: "memories7.jpg",
        category: "memories",
        caption: "setelah rapat paripurna organisasi"
    },
    {
        src: "memories8.jpg",
        category: "nature",
        caption: "Backpacker to monas"
    },
    {
        src: "memories5.jp",
        category: "nature",
        caption: "Pemandangan gunung yang indah"
    },
    // Tambahkan lebih banyak foto sesuai kebutuhan
];

// Inisialisasi galeri
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.querySelector('.modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.querySelector('.caption');
    const closeBtn = document.querySelector('.close');

    // Load gambar ke galeri
    function loadGallery(filter = 'all') {
        gallery.innerHTML = '';
        
        galleryData.forEach(item => {
            if (filter === 'all' || item.category === filter) {
                const galleryItem = document.createElement('div');
                galleryItem.className = `gallery-item ${item.category}`;
                galleryItem.innerHTML = `
                    <img src="${item.src}" alt="${item.caption}" class="gallery-img">
                `;
                gallery.appendChild(galleryItem);

                // Tambahkan event listener untuk modal
                galleryItem.addEventListener('click', function() {
                    modal.style.display = "block";
                    modalImg.src = item.src;
                    captionText.innerHTML = item.caption;
                });
            }
        });
    }

    // Filter galeri
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Hapus class active dari semua tombol
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Tambahkan class active ke tombol yang diklik
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            loadGallery(filter);
        });
    });

    // Tutup modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Tutup modal saat klik di luar gambar
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Load galeri pertama kali
    loadGallery();

});
