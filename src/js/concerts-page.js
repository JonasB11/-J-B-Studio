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
        event: ["Concert"],
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
        event: ["Concert"],
        images: [
            "public/images/concerts/rolling-stones-1.jpg",
            "public/images/concerts/rolling-stones-2.jpg"
        ]
    },
    {
        id: 3,
        date: "2024-08-09",
        artist: {
            id: "artist1",
            name: "Rocco del Schlacko",
            genre: "Festival",
            image: "public/images/artists/rocco.jpeg",
            details: {
                venue: "Sauwasen",
                city: "Püttlingen",
                setlist: [
                    "Erstmal zu Penny",
                    "Punk zurück",
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
        event: ["Concert"],
        images: [
            "public/images/concerts/rolling-stones-1.jpg",
            "public/images/concerts/rolling-stones-2.jpg"
        ]
    },
    {
        id: 4,
        date: "2024-09-05",
        artist: {
            id: "artist1",
            name: "Lostboi Lino",
            genre: "Rap, Pop, Indie, Punk",
            image: "public/images/artists/lino.jpeg",
            details: {
                venue: "Kamgarn",
                city: "Kaiserlautern",
                setlist: [
                    "Erstmal zu Penny",
                    "Punk zurück",
                ],

                supportActs: [
                    {
                        name: "Belucci Boy",
                        type: "Support Act"
                    }
                ]
            }
        },
        description: "Lostboi Lino is a German rapper and singer-songwriter known for his unique blend of rap, pop, and indie music. His lyrics often explore themes of personal struggle, love, and social issues, resonating with a wide audience.",
        tags: ["First concert", "4 Support Acts", "First Moshpit"],
        companions: ["Logge", "Max", "Fynn", "Marita", "Jules", "Theresa"],
        event: ["Concert"],
        images: [
            "public/images/concerts/rolling-stones-1.jpg",
            "public/images/concerts/rolling-stones-2.jpg"
        ]
    },
    {
        "id": 5,
        "date": "2024-09-06",
        "artist": {
            "id": "mehnersmoos",
            "name": "Mehnersmoos",
            "genre": "Rap",
            "image": "public/images/artists/mehnersmoos.png",
            "details": {
                "venue": "Garage",
                "city": "Saarbrücken",
                "setlist": [
                    "Bir",
                    "Hurensohn",
                    "Rudi Völler",
                    "2 Idioten mit nem Wicküler",
                    "Blau",
                    "3 Bier",
                    "20 CM",
                    "Danke",
                    "Hätt Ich Gewusst",
                    "Halt dein Maul",
                    "Blue Man Group",
                    "Milky Way",
                    "Drachenlord",
                    "Rossmann/Lifehack",
                    "3 Uhr Nachts",
                    "Liebe ist ein verrücktes Spiel"
                ],
                "supportActs": [
                    {
                        "name": "Lars Kolbe",
                        "type": "Support Act"
                    }
                ]
            }
        },
        "description": "",
        "tags": ["Rap", "Garage Saarbrücken", "Support: Lars Kolbe"],
        "companions": ["Logge", "Max", "Marita"],
        "event": ["Concert"],
        "images": [
            "public/images/concerts/mehnersmoos-saarbruecken-2024.jpg"
        ]
    },
    {
        "id": 6,
        "date": "2024-10-18",
        "artist": {
            "id": "thebutchersisters",
            "name": "The Butcher Sisters",
            "genre": "Beatdown Hardcore, Deutschrap, Crossover",
            "image": "public/images/artists/tbs.jpg",
            "details": {
                "venue": "Maimarktclub",
                "city": "Mannheim",
                "setlist": [
                    "Drei Streifen",
                    "Alpha & Opfah",
                    "Reiner",
                    "Sonnenbrille",
                    "Bauchtasche",
                    "Banana",
                    "Dosenbier",
                    "UGA UGA BAM BAM",
                    "Baggersee",
                    "Mein Stern",
                    "Zeig Mir Dein",
                    "Bierdurst",
                    "Der Nudelsong",
                    "Freitag"
                ],
                "supportActs": [
                    {
                        "name": "Bluthund",
                        "type": "Support Act"
                    },
                    {
                        "name": "Samurai Pizza Cats",
                        "type": "Support Act"
                    },
                    {
                        "name": "King Nugget Gang",
                        "type": "Spezial Act"
                    },
                    {
                        "name": "257ers",
                        "type": "Spezial Act"
                    }

                ]
            }
        },
        "description": "",
        "tags": ["Heimspiel", "Album-Release"],
        "companions": ["Marita", "Logge", "Max", "Leon"],
        "event": ["Concert"],
        "images": [
            "public/images/concerts/the-butcher-sisters-mannheim-2024.jpg"
        ]
    },
    {
        "id": 7,
        "date": "2024-11-03",
        "artist": {
            "id": "kasi",
            "name": "Kasi",
            "genre": "Indie Pop, Deutschrap",
            "image": "public/images/artists/kasi.jpg",
            "details": {
                "venue": "Sektor Heimat",
                "city": "Saarbrücken",
                "setlist": [
                    "immatrikuliert",
                    "schweigen uns an_v3",
                    "zwischen allem und nichts",
                    "passt nicht",
                    "sommernacht",
                    "meinen die uns",
                    "einszweidrei",
                    "30 Zigaretten",
                    "leicht beschwipst_demo2",
                    "fensterbank",
                    "boys do cry",
                    "mein Herz setzt aus",
                    "tausend tattoos",
                    "73",
                    "17",
                    "Nur ein Wort",
                    "vielleicht in einem jahr",
                    "herbst"
                ],
                "supportActs": [
                    {
                        "name": "VINCE",
                        "type": "Support Act"
                    },
                    {
                        "name": "Aaron",
                        "type": "Spezial Act"
                    }
                ]
            }
        },
        "description": "",
        "tags": ["Kasi fährt auf Tour 2024", "Sektor Heimat"],
        "companions": ["Nele", "Theresa", "Malika"],
        "event": ["Concert"],
        "images": [
            "public/images/concerts/kasi-saarbruecken-2024.jpg"
        ]
    },
    {
        "id": 8,
        "date": "2025-03-23",
        "artist": {
            "id": "ritterlean",
            "name": "Ritter Lean",
            "genre": "Indie Pop, Deutschrap",
            "image": "public/images/artists/ritterlean.webp",
            "details": {
                "venue": "Kammgarn",
                "city": "Kaiserslautern",
                "setlist": [
                    "Der schlechteste",
                    "Bienenstich",
                    "Dua Lipa",
                    "Outfit Check",
                    "Stell dir vor"
                ],
                "supportActs": [
                    {
                        "name": "Sandra Isabel",
                        "type": "Support Act"
                    }
                ]
            }
        },
        "description": "",
        "tags": ["Stell dir vor du warst nicht da Tour 2025", "Support: Sandra Isabel", "Kammgarn Kaiserslautern"],
        "companions": ["Leon", "Nele", "Max", "Logge", "Theresa", "Fernanda", "Fynn"],
        "event": ["Concert"],
        "images": [
            "public/images/concerts/ritter-lean-kaiserslautern-2025.jpg"
        ]
    },
    {
        "id": 9,
        "date": "2025-03-29",
        "artist": {
            "id": "kiz",
            "name": "K.I.Z",
            "genre": "Hip-Hop, Rap, Satire",
            "image": "public/images/artists/kiz.avif",
            "details": {
                "venue": "Festhalle",
                "city": "Frankfurt am Main",
                "setlist": [
                    "Frieden",
                    "VIP in der Psychiatrie",
                    "Ehrenlos",
                    "Urlaub fürs Gehirn",
                    "Unterfickt und geistig behindert",
                    "Bier",
                    "Berlin wird dich töten",
                    "Sommer meines Lebens",
                    "Görlitzer Park",
                    "Hurra die Welt geht unter",
                    "Vierspur",
                    "Applaus",
                    "Filmriss",
                    "Kinderkram",
                    "Neuruppin",
                    "Illuminati",
                    "2001",
                    "Sensibel",
                    "Rap über Hass (Rage Against the Machine Remix)",
                    "Geld wie ein Magnet (Intro)",
                    "Geld wie ein Magnet",
                    "Samstag ist Krieg",
                    "Grabstein",
                    "Das Kannibalenlied",
                    "Hahnenkampf",
                    "Spasst",
                    "Gorilla",
                    "Halbstark",
                    "Böhses Mädchen",
                    "Fremdgehen",
                    "Lecken im Puff",
                    "Abteilungsleiter der Liebe",
                    "Der durch die Scheibeboxxxer",
                    "UNDERTHEKER (Drunken Masters Cover)",
                    "Walpurgisnacht",
                    "Lifehack (mit Mehnersmoos)",
                    "Oktoberfest (mit Mehnersmoos)",
                    "I Want It That Way (Backstreet Boys Cover)",
                    "Ich ficke euch (alle)",
                    "Ich mache Geld",
                    "Ein Affe und ein Pferd",
                    "Familienfeier",
                    "Familienfeier (Reprise)"
                ],
                "supportActs": [
                    {
                        "name": "Mehnersmoos",
                        "type": "Spezial Act"
                    },
                    {
                        "name": "Apsilon",
                        "type": "Support Act"
                    }
                ]
            }
        },
        "description": "",
        "tags": ["Görlitzer Park Tour 2025", "Festhalle Frankfurt", "Support: Mehnersmoos"],
        "companions": ["Max", "Logge", "Fernanda"],
        "event": ["Concert"],
        "images": [
            "public/images/concerts/kiz-frankfurt-2025.jpg"
        ]
    },
    {
        "id": 10,
        "date": "2025-05-01",
        "artist": {
            "id": "twentyonepilots",
            "name": "Twenty One Pilots",
            "genre": "Alternative, Indie Pop, Hip-Hop",
            "image": "public/images/artists/twenty-one-pilots.jpeg",
            "details": {
                "venue": "Lanxess Arena",
                "city": "Köln",
                "setlist": [
                    "Overcompensate",
                    "Holding On to You",
                    "Vignette",
                    "Car Radio",
                    "The Judge",
                    "The Craving (Jenna's Version)",
                    "Tear in My Heart",
                    "Backslide",
                    "Shy Away",
                    "Heathens",
                    "Next Semester",
                    "Routines in the Night",
                    "The Line",
                    "Mulberry Street",
                    "Navigating",
                    "Nico and the Niners",
                    "Heavydirtysoul",
                    "My Blood",
                    "Guns for Hands",
                    "Lavish",
                    "Ride",
                    "Paladin Strait",
                    "Jumpsuit",
                    "Midwest Indigo",
                    "Stressed Out",
                    "Trees"
                ],
                "supportActs": [
                    {
                        "name": "Balu Brigada",
                        "type": "Support Act"
                    }
                ]
            }
        },
        "description": "",
        "tags": ["The Clancy World Tour", "Alone", "FPE", "First Row", "Best Concert Ever"],
        "companions": ["Alone"],
        "event": ["Concert"],
        "images": [
            "public/images/concerts/twenty-one-pilots-koeln-2025.jpg"
        ]
    },
    {
        "id": 11,
        "date": "2025-05-22",
        "artist": {
            "id": "yu",
            "name": "Yu",
            "genre": "Rap, Pop, Politischer Indie",
            "image": "public/images/artists/YU.webp",
            "details": {
                "venue": "Zoom",
                "city": "Frankfurt am Main",
                "setlist": [
                    "Safe Psychopathen",
                    "Der, der dich liebt",
                    "Unique",
                    "\"Attraktiv\"?",
                    "Freund:innen Börse",
                    "Geld",
                    "Sex Sells",
                    "Danke Schule",
                    "Angst",
                    "Nicht krank",
                    "Ausbluten",
                    "\"Guter Tag\"?"
                ],
                "supportActs": [
                    {
                        "name": "Paulinko",
                        "type": "Support Act"
                    },
                    {
                        "name": "Eva-OK.Danke.Tschüss",
                        "type": "Spezial Act"
                    }
                ]
            }
        },
        "description": "",
        "tags": ["YU & You & You Tour 2025", "Zoom Frankfurt"],
        "companions": ["Jules", "Theresa", "Logge", "Fernanda"],
        "event": ["Concert"],
        "images": [
            "public/images/concerts/yu-frankfurt-2025.jpg"
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
                        <div class="detail-item">
                            <i class="fas fa-music"></i>
                            <span>${concert.event}</span>
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