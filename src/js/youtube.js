// Example YouTube videos
const youtubeVideos = [
    {
        title: 'Video 1',
        thumbnail: 'placeholder.jpg',
        views: '1.2K',
        date: '2 days ago',
        url: '#'
    },
    {
        title: 'Video 2',
        thumbnail: 'placeholder.jpg',
        views: '3.4K',
        date: '1 week ago',
        url: '#'
    },
    {
        title: 'Video 3',
        thumbnail: 'placeholder.jpg',
        views: '5.6K',
        date: '2 weeks ago',
        url: '#'
    }
];

function createYouTubeGrid() {
    const videosGrid = document.querySelector('.youtube-videos-grid');
    if (!videosGrid) return;
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
                        <span>${video.views} views</span>
                        <span>${video.date}</span>
                    </div>
                </div>
            </a>
        `;
        videosGrid.appendChild(videoElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createYouTubeGrid();
});
