// Data galeri foto
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

// Data quotes dan puisi
const contentData = {
    quotes: [
        {
            content: "Menjadi Orang Yang Disiplin Memang Sulit,Tetapi Lebih Sulit Lagi Jika Engkau Sedang Bersaing Dengan Orang - Orang Yang Berpegang Teguh Pada Nilai Kedisiplinan.",
            author: "Brodanz"
        },
        {
            content: "Engkau Harus Lambat Dalam Mempertimbangkan Suatu Hal Dan Cepat Dalam Melaksanakannya.",
            author: "Brodanz"
        },
        {
            content: "Di Dunia Ini Memang Tak Ada Yang Sempurna, Tapi Setidaknya Berusahalah Untuk Mendekati Kata Sempurna.",
            author: "Brodanz"
        },
        {
            content: "Dengan Banyaknya Persamaan, Kita Bisa Saling Membantu. Dengan Banyaknya perbedaan, Kita Bisa Saling Melengkapi.",
            author: "Brodanz"
        },
        {
            content: "Rasa Sakit Yang Disebabkan Oleh Kedisiplinan Lebih Baik Daripada Rasa Sakit Karena Penyesalan.",
            author: "Brodanz"
        }
    ],
    poems: [
        {
            title: "Didik",
            content: "Pendidikan...\n Semua orang membutuhkannya,\n Tapi tak semua diberi kesempatan untuk memilikinya.\n Ada yang tak sanggup membayar,\n Ada pula yang memilih menjauh darinya.\n\n Kenyataannya,\n Ijazah tak selalu jadi jaminan,\n Bahwa seseorang akan sukses di masa depan.\n Dan mereka yang tak sempat bersekolah,\n Bukan berarti akan gagal dalam hidupnya.\n\n Karena hidup,\n Bukan soal seberapa tinggi gelar,\n Tapi seberapa besar tekad untuk terus belajar…\n",
            author: "Brodanz"
        },
        {
            title: "Hujan",
            content: "Hujan Deras Membungkus Kota.\nJutaan Tetes Air Berjatuhan.\nTak Ada Keramaian Sejauh Mata Memandang.\nHanya Ada Keheningan Sejauh Telinga Mendengar.\n\nAku Menatap Ke Arah Awan kelabu,\nYang Tak Kuasa Menahan Tangis.\nKebanyakan Penduduk Bumi,\nMemilih Untuk Menghindarinya.\nTetapi Aku,\nMemilih Untuk Menangis Bersamanya",
            author: "Brodanz"
        },
        {
            title: "Sempurna",
            content: "Sempurna…\nSejauh Apapun Engkau Mencarinya,\nTakkan Bisa Kau Menemuinya.\n\nDi Dunia Ini Memang Tak Ada Yang Sempurna.\nTapi Setidaknya,\nKita Bisa Mendekatinya.\nWalaupun Tak Bisa Menggapainya.",
            author: "Brodanz"
        },
        {
            title: "Pergi",
            content: "Tujuh benua sudah kutapaki,\n Tujuh samudera pun pernah kularungi,\n Gunung tertinggi berhasil kutaklukkan,\n Semua kulalui demi satu tujuan.\n\n Sudah lama aku mencari,\n Ke mana bayangan itu pergi.\n Siang malam terus kulangkahkan kaki,\n Tanpa lelah, tanpa henti.\n\n Sampai akhirnya aku mengerti,\n Bahwa dia…\n Memang memilih untuk tak kembali.\n\n",
            author: "Brodanz"
        }
    ]
};

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initContentTabs();
    initNavbar();
    initScrollEffects();
    initSlider();
});

// Fungsi untuk inisialisasi galeri foto
function initGallery() {
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
}

// Fungsi untuk inisialisasi tab konten (quotes dan puisi)
function initContentTabs() {
    // Fungsi untuk menampilkan konten
    function displayContent() {
        const quotesGallery = document.getElementById('quotesGallery');
        const poemsGallery = document.getElementById('poemsGallery');
        
        // Kosongkan galeri
        quotesGallery.innerHTML = '';
        poemsGallery.innerHTML = '';
        
        // Tampilkan quotes
        contentData.quotes.forEach(quote => {
            const card = createCard(quote.content, quote.author, 'quote');
            quotesGallery.appendChild(card);
        });
        
        // Tampilkan puisi
        contentData.poems.forEach(poem => {
            const card = createCard(poem.content, poem.author, 'poem', poem.title);
            poemsGallery.appendChild(card);
        });
    }
    
    // Fungsi untuk membuat card
    function createCard(content, author, type, title = null) {
        const card = document.createElement('div');
        card.className = `card ${type}-card`;
        
        // Tambahkan judul jika puisi
        if (type === 'poem' && title) {
            const titleElement = document.createElement('div');
            titleElement.className = 'poem-title';
            titleElement.textContent = title;
            card.appendChild(titleElement);
        }
        
        const contentElement = document.createElement('div');
        contentElement.className = 'content';
        // Ganti newline dengan <br> untuk puisi
        contentElement.innerHTML = content.replace(/\n/g, '<br>');
        
        const authorElement = document.createElement('div');
        authorElement.className = 'author';
        authorElement.textContent = `— ${author}`;
        
        card.appendChild(contentElement);
        card.appendChild(authorElement);
        
        return card;
    }
    
    // Fungsi untuk berpindah tab
    function switchTab(tabId) {
        // Nonaktifkan semua tab
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Aktifkan tab yang dipilih
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
    }
    
    // Event listener untuk tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Tampilkan konten saat pertama kali dimuat
    displayContent();
}

// Fungsi untuk inisialisasi navbar
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Toggle body overflow when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Fungsi untuk inisialisasi efek scroll
function initScrollEffects() {
    // Scroll reveal animation
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    scrollReveal.reveal('.profile-section, .experience-section', { 
        interval: 200 
    });

    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial styles
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
}

// Fungsi untuk inisialisasi slider
function initSlider() {
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
}
