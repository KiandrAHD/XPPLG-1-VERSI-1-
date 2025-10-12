// 🌐 Language Data
const translations = {
    id: {
        'home-title': 'Selamat Datang di Website Kelas XPPLG 1',
        'home-desc': 'Kami adalah siswa dari SMK Telkom Purwokerto jurusan PPLG. Website ini dibuat untuk memperkenalkan kelas kami dan menyimpan kenangan bersama.',
        'gallery-title': 'Kenangan Bersama Teman-teman XPPLG 1',
        'gallery-desc': 'Beberapa momen terbaik kami selama perjalanan di SMK Telkom Purwokerto.',
        'members-title': 'Anggota Kelas XPPLG 1',
        'footer-text': '© 2025 XPPLG 1 | Website dibuat oleh Kiandra ❤️',
        'lang-btn': '🇮🇩'
    },
    en: {
        'home-title': 'Welcome to XPPLG 1 Class Website',
        'home-desc': 'We are students of SMK Telkom Purwokerto, Software Engineering major. This site is made to showcase our class and memories together.',
        'gallery-title': 'Memories Together with XPPLG 1 Friends',
        'gallery-desc': 'Some of our best moments during the journey at SMK Telkom Purwokerto.',
        'members-title': 'XPPLG 1 Class Members',
        'footer-text': '© 2025 XPPLG 1 | Website made by Kiandra ❤️',
        'lang-btn': '🇬🇧'
    }
};

// 👥 Members Data
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

// 🈯 Update Language
function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[id]').forEach(el => {
        if (translations[lang][el.id]) el.textContent = translations[lang][el.id];
    });
    document.getElementById('langToggle').textContent = translations[lang]['lang-btn'];
    generateMembers();
}

// 🧑‍🤝‍🧑 Generate Members Grid
function generateMembers() {
    const grid = document.getElementById('members-grid');
    grid.innerHTML = '';
    members.forEach((name, index) => {
        const card = document.createElement('div');
        card.className = 'member-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center text-center';
        card.innerHTML = `
            <img src="https://via.placeholder.com/80x80/4F46E5/FFFFFF?text=${index+1}" alt="${name}" class="w-20 h-20 rounded-full mb-4 object-cover">
            <div class="text-lg font-semibold mb-2">${index + 1}</div>
            <div class="text-sm">${name}</div>
        `;
        grid.appendChild(card);
    });
}

// 🌗 Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
});

// 🏳️ Language Toggle
document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'id' ? 'en' : 'id';
    updateLanguage(newLang);
});

// 🌀 Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// 🧭 Navbar Shadow Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) navbar.classList.add('shadow-lg');
    else navbar.classList.remove('shadow-lg');
});

// 🚀 Initialize
generateMembers();
updateLanguage('id');
