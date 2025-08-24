document.addEventListener('DOMContentLoaded', function() {
    // Data quotes dan puisi
    const galleryData = {
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
    
    // Fungsi untuk menampilkan konten
    function displayContent() {
        const quotesGallery = document.getElementById('quotesGallery');
        const poemsGallery = document.getElementById('poemsGallery');
        
        // Kosongkan galeri
        quotesGallery.innerHTML = '';
        poemsGallery.innerHTML = '';
        
        // Tampilkan quotes
        galleryData.quotes.forEach(quote => {
            const card = createCard(quote.content, quote.author, 'quote');
            quotesGallery.appendChild(card);
        });
        
        // Tampilkan puisi
        galleryData.poems.forEach(poem => {
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
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});
