document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('timeline');

    fetch('src/data/concerts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Sort concerts by date, most recent first
            data.sort((a, b) => new Date(b.date) - new Date(a.date));

            data.forEach(concert => {
                const timelineItem = document.createElement('div');
                timelineItem.classList.add('timeline-item');

                const itemContent = `
                    <div class="timeline-img">
                        <img src="${concert.image}" alt="${concert.artist}">
                    </div>
                    <div class="timeline-content">
                        <h3>${concert.artist}</h3>
                        <div class="date">${new Date(concert.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>
                        <p>${concert.venue}, ${concert.city}</p>
                        <a href="concert-detail.html?id=${concert.id}" class="btn">Details</a>
                    </div>
                `;

                timelineItem.innerHTML = itemContent;
                timeline.appendChild(timelineItem);
            });
        })
        .catch(error => console.error('Error loading concert data:', error));
});
