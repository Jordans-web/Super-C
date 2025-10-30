document.addEventListener('DOMContentLoaded', () => {

    // ==================================
    // FUNGSI UNTUK NAVBAR MOBILE (HAMBURGER)
    // ==================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const allNavLinks = document.querySelectorAll('.nav-links li a');

    // Toggle menu saat hamburger di-klik
    hamburger.addEventListener('click', () => {
        // Animasi slide menu
        navLinks.classList.toggle('nav-active');
        
        // Animasi hamburger menjadi 'X'
        hamburger.classList.toggle('toggle');
    });

    // Menutup menu saat salah satu link di-klik
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });
    });

    // ==================================
    // FUNGSI ANIMASI SAAT SCROLL
    // Menggunakan Intersection Observer API
    // ==================================

    // Konfigurasi observer
    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // Elemen dianggap terlihat jika 10% areanya masuk viewport
    };

    // Callback function yang dijalankan saat elemen terlihat
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen (entry.target) sedang terlihat (isIntersecting)
            if (entry.isIntersecting) {
                // Tambahkan kelas 'is-visible' untuk memicu animasi CSS
                entry.target.classList.add('is-visible');
                
                // Hentikan pengamatan pada elemen ini agar animasi tidak berulang
                observer.unobserve(entry.target);
            }
        });
    };

    // Buat instance IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Pilih semua elemen yang ingin dianimasi
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Mulai amati setiap elemen
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

});