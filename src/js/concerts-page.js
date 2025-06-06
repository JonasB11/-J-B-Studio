// JavaScript for the Concerts page (concerts.html)

// You can add functions here to fetch and display your concert list.
// Example: fetch data from an API, read from a local JSON file, or build the HTML directly.

// Sample concert data
const concerts = [
    {
        id: 1,
        date: "2024-04-19",
        artist: {
            id: "artist1",
            name: "Swiss und die Andern",
            genre: "Punk, Rap, Hip-Hop",
            image: "public/images/artists/Swiss und die andern.jpg",
            details: {
                venue: "Schlachthof",
                city: "Wiesbaden",
                setlist: [
                    "Erstmal zu Penny",
                    "Punk zurück",
                    "So bereuen",
                    "Besteste Band",
                    "Ich hasse es",
                    "Schwarze Flagge",
                    "Landgang",
                    "Schwarz Rot Braun",
                    "Dörty Dörte",
                    "Schrei nach Liebe (Die Ärzte cover)",
                    "Timm Thaler",
                    "Jamaica",
                    "Punkah auf Sri Lanka",
                    "Nicht für ein Land",
                    "Urlaub bei Omi",
                    "Antarktis",
                    "Hotel zu den Sternen",
                    "Drive Bye",
                    "Vermisse dich",
                    "Rollin / Break Stuff / Killing in the Name (Rock Medley)",
                    "ZickZackKind",
                    "Perfekte Imperfektion",
                    "Wir gegen die",
                    "Angezeigt",
                    "Punkahboiz",
                    "Punkahpolizei",
                    "Bullenwagen",
                    "Fick dich",
                    "Fahrrad",
                    "Kuhle Typen",
                    "Rausschmeisser Song",
                    "Nicht kommen sehen (Encore)",
                    "Asche zu Staub (Encore)",
                    "Große Freiheit (Encore)",
                    "Pogo (Encore)",
                    "Linksradikaler Schlager (Encore)",
                ],
                
                supportActs: [
                    {
                        name: "Ferris MC",
                        type: "Support Act"
                    },
                    {
                        name: "Lostboi Lino",
                        type: "Support Act"
                    },
                    {
                        name: "Mehnersmoos",
                        type: "Spezial Act"
                    },
                    {
                        name: "Saltatio Mortis",
                        type: "Spezial Act"
                    }
                ]
            }
        },
        description: "Swiss und die Andern are a German punk, rap, and hip-hop band formed in 2010. They are known for their political and social commentary in their music.",
        tags: ["First concert", "4 Support Acts", "First Moshpit"],
        companions: ["Logge"],
        images: [
            "public/images/concerts/rolling-stones-1.jpg",
            "public/images/concerts/rolling-stones-2.jpg"
        ]
    },
    {
        id: 2,
        date: "2024-07-27",
        artist: {
            id: "artist2",
            name: "Finch",
            genre: "Rap, Hip-Hop, Techno, Schlager",
            image: "public/images/artists/finch.jpg",
            details: {
                venue: "IGA-Park",
                city: "Rostock",
                setlist: [
                    "Nachbarn",
                    "1990",
                    "Onkelz Poster",
                    "Liebe ist ...",
                    "Verdammt, ich lieb dich (Matthias Reim cover)",
                    "Easy Peasy",
                    "FiNCHiBOY",
                    "Fick mich Finch",
                    "EiSMANN",
                    "Pech & Schwefel",
                    "Kai hat frei",
                    "TATTOO",
                    "Keine Regeln",
                    "Maria / Major Tom / Gummibären / Pokemon / Sailor Moon",
                    "ONS",
                    "Der letzte echte Macho",
                    "Rave Witchers",
                    "Herzalarm",
                    "Kamikaze",
                    "Liebe auf der Rückbank",
                    "Vamos",
                    "Erwischt",
                    "Liebe ist… (with SDP)",
                    "Abenteuerland (with SDP)",
                    "Freitag, Samstag (Harris & Ford cover)",
                    "Erwischt",
                    "Ein letztes Mal",
                    "Eskalation",
                    "Pyrotechnik/Durch den Monsun/Spongebob Theme",
                    "Abfahrt"
                ],
                supportActs: [
                    {
                        name: "Dennis dies das",
                        type: "Support Act"
                    },
                    {
                        name: "SDP",
                        type: "Spezial Act"
                    }
                ]
            }
        },
        description: "FiNCH, also known as FiNCH ASOZiAL, is a German rapper known for his humorous, provocative lyrics blending elements of Schlager, techno, and rap. His energetic performances and unique style make him a standout figure in the German music scene.",
        tags: ["Much Bass", " 2 Support Acts", "900Km away", "Firework"],
        companions: ["Marius"],
        images: [
            "public/images/concerts/rolling-stones-1.jpg",
            "public/images/concerts/rolling-stones-2.jpg"
        ]
    },


    // Add more concerts here
];

// Format date function
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Create timeline function
function createTimeline() {
    const timelineContainer = document.getElementById('timeline');
    if (!timelineContainer) return;

    // Sort concerts by date (newest first)
    const sortedConcerts = [...concerts].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedConcerts.forEach(concert => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.setAttribute('data-artist', concert.artist.id);

        const date = new Date(concert.date);
        const formattedDate = formatDate(date);

        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="artist-card">
                    <div class="artist-header">
                        <img src="${concert.artist.image}" alt="${concert.artist.name}" class="artist-logo">
                        <div class="artist-info">
                            <h3 class="artist-name">${concert.artist.name}</h3>
                            <p class="artist-genre">${concert.artist.genre}</p>
                        </div>
                    </div>
                    <div class="artist-details">
                        <div class="detail-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${concert.artist.details.venue}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-city"></i>
                            <span>${concert.artist.details.city}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-music"></i>
                            <span>${concert.artist.details.setlist.length} Songs</span>
                        </div>
                    </div>
                    <p class="artist-description">${concert.description}</p>
                    <div class="artist-tags">
                        ${concert.tags.map(tag => `<span class="artist-tag">${tag}</span>`).join('')}
                        ${concert.artist.details.supportActs ? 
                            `<span class="artist-tag">Support: ${concert.artist.details.supportActs.map(act => act.name).join(', ')}</span>` 
                            : ''}
                    </div>
                    <a href="concert-detail.html?id=${concert.id}" class="artist-link">
                        <i class="fas fa-arrow-right"></i>
                        View Details
                    </a>
                </div>
            </div>
            <div class="timeline-date">${formattedDate}</div>
        `;

        timelineContainer.appendChild(timelineItem);
    });
}

// Handle scroll animations
function handleScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    createTimeline();
    handleScrollAnimations();
}); 