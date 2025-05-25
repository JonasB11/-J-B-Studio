// Smooth Scrolling für Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.backgroundColor = 'var(--primary-color)';
    }
});

// Logo-Animation beim Scrollen
window.addEventListener('scroll', function() {
    const heroLogoBg = document.querySelector('.hero-logo-bg');
    const heroBgWatermark = document.querySelector('.hero-bg-watermark');
    if (!heroLogoBg || !heroBgWatermark) return;
    if (window.scrollY > 80) {
        heroLogoBg.classList.add('scrolled');
        heroBgWatermark.classList.add('visible');
    } else {
        heroLogoBg.classList.remove('scrolled');
        heroBgWatermark.classList.remove('visible');
    }
});

// Beispiel für Webseiten (kann später angepasst werden)
const websites = [
    {
        title: 'Webseite 1',
        description: 'Beschreibung der Webseite',
        image: 'placeholder.jpg',
        url: '#'
    },
    {
        title: 'Webseite 2',
        description: 'Beschreibung der Webseite',
        image: 'placeholder.jpg',
        url: '#'
    }
];

// Webseiten dynamisch einfügen
function createWebsitesGrid() {
    const websitesGrid = document.querySelector('.websites-grid');
    websites.forEach(website => {
        const websiteElement = document.createElement('div');
        websiteElement.className = 'website-card';
        websiteElement.innerHTML = `
            <img src="${website.image}" alt="${website.title}">
            <div class="website-card-content">
                <h3>${website.title}</h3>
                <p>${website.description}</p>
                <a href="${website.url}" target="_blank">Besuchen</a>
            </div>
        `;
        websitesGrid.appendChild(websiteElement);
    });
}

// Beispiel für Musikplattformen (kann später angepasst werden)
const musicPlatforms = [
    {
        name: 'Spotify',
        icon: 'fab fa-spotify',
        url: '#'
    },
    {
        name: 'SoundCloud',
        icon: 'fab fa-soundcloud',
        url: '#'
    },
    {
        name: 'YouTube Music',
        icon: 'fab fa-youtube',
        url: '#'
    }
];

// Musikplattform-Links dynamisch einfügen
function createMusicLinks() {
    const musicLinks = document.querySelector('.music-links');
    musicPlatforms.forEach(platform => {
        const linkElement = document.createElement('a');
        linkElement.className = 'music-platform-link';
        linkElement.href = platform.url;
        linkElement.target = '_blank';
        linkElement.innerHTML = `
            <i class="${platform.icon}"></i>
            <span>${platform.name}</span>
        `;
        musicLinks.appendChild(linkElement);
    });
}

// Beispiel für Partner (kann später angepasst werden)
const partners = [
    {
        name: 'Partner 1',
        logo: 'placeholder.jpg',
        description: 'Beschreibung des Partners'
    },
    {
        name: 'Partner 2',
        logo: 'placeholder.jpg',
        description: 'Beschreibung des Partners'
    }
];

// Partner dynamisch einfügen
function createPartnersGrid() {
    const partnersGrid = document.querySelector('.partners-grid');
    partners.forEach(partner => {
        const partnerElement = document.createElement('div');
        partnerElement.className = 'partner-card';
        partnerElement.innerHTML = `
            <img src="${partner.logo}" alt="${partner.name}" class="partner-logo">
            <h3>${partner.name}</h3>
            <p>${partner.description}</p>
        `;
        partnersGrid.appendChild(partnerElement);
    });
}

// Beispiel für YouTube-Videos (kann später angepasst werden)
const youtubeVideos = [
    {
        title: 'Video 1',
        thumbnail: 'placeholder.jpg',
        views: '1.2K',
        date: 'vor 2 Tagen',
        url: '#'
    },
    {
        title: 'Video 2',
        thumbnail: 'placeholder.jpg',
        views: '3.4K',
        date: 'vor 1 Woche',
        url: '#'
    },
    {
        title: 'Video 3',
        thumbnail: 'placeholder.jpg',
        views: '5.6K',
        date: 'vor 2 Wochen',
        url: '#'
    }
];

// YouTube-Videos dynamisch einfügen
function createYouTubeGrid() {
    const videosGrid = document.querySelector('.youtube-videos-grid');
    youtubeVideos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-card';
        videoElement.innerHTML = `
            <a href="${video.url}" target="_blank">
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}">
                </div>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <div class="video-stats">
                        <span>${video.views} Aufrufe</span>
                        <span>${video.date}</span>
                    </div>
                </div>
            </a>
        `;
        videosGrid.appendChild(videoElement);
    });
}

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    createWebsitesGrid();
    createYouTubeGrid();
    createMusicLinks();
    createPartnersGrid();
}); 