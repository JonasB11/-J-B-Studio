// Get concert ID from URL
const urlParams = new URLSearchParams(window.location.search);
const concertId = urlParams.get('id');

// Function to load concert details
function loadConcertDetails() {
    // Find the concert in our data
    const concert = concerts.find(c => c.id === parseInt(concertId));
    
    if (!concert) {
        document.querySelector('.concert-detail').innerHTML = '<p>Concert not found</p>';
        return;
    }

    // Set page title
    document.title = `\J|B/Studio - ${concert.artist.name} Concert`;

    // Set artist accent color
    document.body.setAttribute('data-artist', concert.artist.id);

    // Update artist profile
    document.getElementById('artist-image').src = concert.artist.image;
    document.getElementById('concert-title').textContent = concert.artist.name;
    document.getElementById('concert-date').textContent = formatDate(concert.date);
    
    // Update social links if they exist
    if (concert.artist.social) {
        const spotifyLink = document.getElementById('spotify-link');
        const youtubeLink = document.getElementById('youtube-link');
        const instagramLink = document.getElementById('instagram-link');

        if (concert.artist.social.spotify) {
            spotifyLink.href = concert.artist.social.spotify;
        } else {
            spotifyLink.style.display = 'none';
        }

        if (concert.artist.social.youtube) {
            youtubeLink.href = concert.artist.social.youtube;
        } else {
            youtubeLink.style.display = 'none';
        }

        if (concert.artist.social.instagram) {
            instagramLink.href = concert.artist.social.instagram;
        } else {
            instagramLink.style.display = 'none';
        }
    }

    // Update concert details
    document.getElementById('artist-description').textContent = concert.description;
    document.getElementById('concert-venue').textContent = concert.artist.details.venue + ", " + concert.artist.details.city;
    document.getElementById('concert-date-full').textContent = formatDate(concert.date);
    document.getElementById('concert-songs-count').textContent = `${concert.artist.details.setlist.length} Songs`;
    
    // Update companions
    const companionsElement = document.getElementById('concert-companions');
    if (concert.companions && concert.companions.length > 0) {
        companionsElement.textContent = `Went with: ${concert.companions.join(', ')}`;
    } else {
        companionsElement.parentElement.style.display = 'none';
    }

    // Update support acts if they exist
    const supportActsElement = document.getElementById('support-acts');
    if (concert.artist.details.supportActs && concert.artist.details.supportActs.length > 0) {
        supportActsElement.innerHTML = `
            <h3>Support Acts</h3>
            <ul class="support-acts-list">
                ${concert.artist.details.supportActs.map(act => `
                    <li class="support-act-item">
                        <span class="act-name">${act.name}</span>
                        ${act.type ? `<span class="act-type">${act.type}</span>` : ''}
                    </li>
                `).join('')}
            </ul>
        `;
    } else {
        supportActsElement.style.display = 'none';
    }

    // Update setlist
    const setlistElement = document.getElementById('concert-setlist');
    setlistElement.innerHTML = concert.artist.details.setlist
        .map(song => `<li>${song}</li>`)
        .join('');

    // Update highlights
    const highlightsElement = document.getElementById('concert-highlights');
    if (concert.tags && concert.tags.length > 0) {
        highlightsElement.innerHTML = concert.tags
            .map(highlight => `<li>${highlight}</li>`)
            .join('');
    } else {
        highlightsElement.parentElement.style.display = 'none';
    }

    // Update gallery
    const galleryElement = document.getElementById('concert-gallery');
    if (concert.images && concert.images.length > 0) {
        galleryElement.innerHTML = concert.images
            .map(image => `<img src="${image}" alt="${concert.artist.name} concert photo">`)
            .join('');
    } else {
        galleryElement.style.display = 'none';
    }
}

// Format date function
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Initialize page
document.addEventListener('DOMContentLoaded', loadConcertDetails); 