// Bahasa (ID & EN)
const translations = {
    id: {
        'home-title': 'Selamat Datang di Website Kelas XPPLG 1',
        'home-desc': 'Kami adalah siswa dari SMK Telkom Purwokerto jurusan PPLG. Website ini dibuat untuk memperkenalkan kelas kami dan menyimpan kenangan bersama.',
        'gallery-title': 'Kenangan Bersama Teman-teman XPPLG 1',
        'gallery-desc': 'Beberapa momen terbaik kami selama perjalanan di SMK Telkom Purwokerto.',
        'members-title': 'Anggota Kelas XPPLG 1',
        'jadwal-title': 'Jadwal Kelas',
        'sosmed-title': 'Sosial Media',
        'sosmed-desc': 'Ikuti kami di media sosial untuk update terbaru dari kelas XPPLG 1.',
        'footer-text': '© 2025 XPPLG 1 | Website dibuat oleh Kiandra ',
        'lang-btn': 'ID'
    },
    en: {
        'home-title': 'Welcome to XPPLG 1 Class Website',
        'home-desc': 'We are students of SMK Telkom Purwokerto, Software Engineering major. This site is made to showcase our class and memories together.',
        'gallery-title': 'Memories Together with XPPLG 1 Friends',
        'gallery-desc': 'Some of our best moments during the journey at SMK Telkom Purwokerto.',
        'members-title': 'XPPLG 1 Class Members',
        'jadwal-title': 'Class Schedule',
        'sosmed-title': 'Social Media',
        'sosmed-desc': 'Follow us on social media for the latest updates from XPPLG 1 class.',
        'footer-text': '© 2025 XPPLG 1 | Website made by Kiandra',
        'lang-btn': 'EN'
    }
};

// Data anggota
const members = [
    'Achmad Fanani', 'Afrin Shabria Eshal', 'Akmal Ari Fauzan', 'Ali Hasan', 'Ananda Yosi Marsania',
    'Arsyad Arfa Sakhi', 'Axelle Iniko Igun', 'Cresendo Assyabani Darmawan', 'Earlene Nuri Aulia', 'Ezar Nirbana',
    'Firaz Raziq Satria Afandi', 'Griselda Felixia Santoso', 'Hamizano Ghafara Valiant', 'Humaira Bahiya Narendra', 'Ikraam Alwahid Setyowibowo',
    'Khairani Nirmala Putri', 'Kiandra Gagah Satria Utama', 'Marcelly Magani Maharani', 'Mochammad Fahmi Thahir', 'Muhammad Faruq Alfarehzi',
    'Nandana Afan Aryaguna', 'Nasywa Mufidah', 'Nuzultan Aryan Ramadhan', 'Prawira Ichsan Bagus Badrika', 'Queen Abkar Utsruba',
    'Rafa Aldivo', 'Raiyan Danish Aufa', 'Ryasta Dewantha', 'Safa Anindya Lituhayu', 'Syafrida Khumayra',
    'Vin Emerald Khalif', 'Zahida Hulwa Fadila'
];

let currentLang = 'id';
let isDark = false;

// Ganti Bahasa
function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[id]').forEach(el => {
        if (translations[lang][el.id]) el.textContent = translations[lang][el.id];
    });
    document.getElementById('langToggle').textContent = translations[lang]['lang-btn'];
    document.getElementById('langToggleMobile').textContent = translations[lang]['lang-btn'];
    generateMembers();
}

// Generate daftar anggota
function generateMembers() {
    const grid = document.getElementById('members-grid');
    grid.innerHTML = '';
    members.forEach((name, i) => {
        const card = document.createElement('div');
        card.className = 'member-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center text-center';
        card.innerHTML = `
            <img src="https://via.placeholder.com/80x80/4F46E5/FFFFFF?text=${i + 1}" class="w-20 h-20 rounded-full mb-4 object-cover" alt="${name}">
            <div class="text-lg font-semibold mb-2">${i + 1}</div>
            <div class="text-sm">${name}</div>
        `;
        grid.appendChild(card);
    });
}

// Tema Gelap/Terang
function toggleTheme() {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌑';
    document.getElementById('themeToggleMobile').textContent = isDark ? '☀️' : '🌑';
}

// Bahasa
function toggleLanguage() {
    updateLanguage(currentLang === 'id' ? 'en' : 'id');
}

// Menu Mobile
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Tombol Desktop & Mobile
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('themeToggleMobile').addEventListener('click', toggleTheme);
document.getElementById('langToggle').addEventListener('click', toggleLanguage);
document.getElementById('langToggleMobile').addEventListener('click', toggleLanguage);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            mobileMenu.classList.remove('open'); // tutup menu mobile setelah klik
        }
    });
});

// Scroll Navbar Efek
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) navbar.classList.add('shadow-lg');
    else navbar.classList.remove('shadow-lg');
});

// Inisialisasi
generateMembers();
updateLanguage('id');
