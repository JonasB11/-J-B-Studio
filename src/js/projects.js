// Example websites/projects
const websites = [
    {
        title: 'Website 1',
        description: 'Description of the website/project',
        image: 'placeholder.jpg',
        url: '#'
    },
    {
        title: 'Website 2',
        description: 'Description of the website/project',
        image: 'placeholder.jpg',
        url: '#'
    }
];

function createWebsitesGrid() {
    const websitesGrid = document.querySelector('.websites-grid');
    if (!websitesGrid) return;
    websites.forEach(website => {
        const websiteElement = document.createElement('div');
        websiteElement.className = 'website-card';
        websiteElement.innerHTML = `
            <img src="${website.image}" alt="${website.title}">
            <div class="website-card-content">
                <h3>${website.title}</h3>
                <p>${website.description}</p>
                <a href="${website.url}" target="_blank">Visit</a>
            </div>
        `;
        websitesGrid.appendChild(websiteElement);
    });
}

// Example music platforms
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

function createMusicLinks() {
    const musicLinks = document.querySelectorAll('.music-links');
    musicLinks.forEach(musicLinksContainer => {
        musicPlatforms.forEach(platform => {
            const linkElement = document.createElement('a');
            linkElement.className = 'music-platform-link';
            linkElement.href = platform.url;
            linkElement.target = '_blank';
            linkElement.innerHTML = `
                <i class="${platform.icon}"></i>
                <span>${platform.name}</span>
            `;
            musicLinksContainer.appendChild(linkElement);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createWebsitesGrid();
    createMusicLinks();
});
