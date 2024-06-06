// Fungsi untuk menangani tombol "Back to Top"
const tombolKembaliKeAtas = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) { // Tampilkan tombol saat pengguna menscroll ke bawah 100px
        tombolKembaliKeAtas.style.display = 'block';
    } else {
        tombolKembaliKeAtas.style.display = 'none';
    }
});

tombolKembaliKeAtas.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Penanganan pengiriman formulir
const formulirKontak = document.getElementById('contactForm');
formulirKontak.addEventListener('submit', (event) => {
    event.preventDefault();

    const nama = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('message').value;

    document.getElementById('currentName').textContent = nama;
    document.getElementById('currentDob').textContent = dob;
    document.getElementById('currentGender').textContent = jenisKelamin;
    document.getElementById('currentMessage').textContent = pesan;
});

// Fungsi untuk menampilkan/menyembunyikan navbar saat menggulir
let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Gulir ke bawah
        navbar.classList.add('hidden');
    } else {
        // Gulir ke atas
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

// Fungsi untuk mengubah nama pada banner menggunakan prompt
const namaBanner = document.getElementById('bannerName');

window.addEventListener('load', () => {
    const namaBaru = prompt('Masukkan nama Anda:');
    if (namaBaru) {
        namaBanner.textContent = `Halo ${namaBaru}, Selamat Datang di Website`;
    }
});

// Fungsi untuk menavigasi ke bagian tertentu saat mengklik tautan navbar
const tautanNavbar = document.querySelectorAll('nav ul li a');

tautanNavbar.forEach(tautan => {
    tautan.addEventListener('click', (event) => {
        event.preventDefault();
        const idTujuan = tautan.getAttribute('href').substring(1);
        const bagianTujuan = document.getElementById(idTujuan);
        bagianTujuan.scrollIntoView({ behavior: 'smooth' });
    });
});
