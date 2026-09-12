// Dünyanın dört bir yanından ve arşivlerden derlenmiş geniş ilahi havuzu
const ilahiler = [
    { title: "Taleal Bedru Aleyna", artist: "Grup Dergah", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { title: "Açtı Gül Zamanı", artist: "Abdurrahman Önül", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { title: "Aştu Neve", artist: "Sami Yusuf", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { title: "Gel Gör Beni Aşk Neyledi", artist: "Yunus Emre", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { title: "Sen Sensin", artist: "Dursun Ali Erzincanlı", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { title: "Bülbüller Söyler", artist: "Sedat Uçan", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
    { title: "Medine'ye Varan Yollar", artist: "Celalettin Ada", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { title: "Ağlatır Beni", artist: "Eşref Ziya Terzi", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
    { title: "Gül Ahmedim", artist: "Mustafa Cihat", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
    { title: "Sultanım", artist: "Menzil İlahileri", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" }
];

const searchInput = document.getElementById('searchInput');
const ilahiList = document.getElementById('ilahiList');
const listAllBtn = document.getElementById('listAllBtn');
const audioPlayer = document.getElementById('audioPlayer');
const currentTitle = document.getElementById('currentTitle');

function renderList(data) {
    ilahiList.innerHTML = '';
    data.forEach(ilahi => {
        const li = document.createElement('li');
        li.innerHTML = `<b>${ilahi.title}</b><span>${ilahi.artist}</span>`;
        li.addEventListener('click', () => {
            currentTitle.textContent = `${ilahi.title} - ${ilahi.artist}`;
            audioPlayer.src = ilahi.src;
            audioPlayer.play();
        });
        ilahiList.appendChild(li);
    });
}

// Canlı Arama Filtresi
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    const filtered = ilahiler.filter(i => 
        i.title.toLowerCase().includes(term) || i.artist.toLowerCase().includes(term)
    );
    renderList(filtered);
});

// İlahilerim Butonu: Alfabetik Sıralama (Türkçe Karakter Uyumlu)
listAllBtn.addEventListener('click', () => {
    const sorted = [...ilahiler].sort((a, b) => a.title.localeCompare(b.title, 'tr'));
    renderList(sorted);
});

// Uygulama açıldığında listeyi yükle
renderList(ilahiler);

