
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