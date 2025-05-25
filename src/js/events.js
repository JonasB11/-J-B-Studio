// Example events
const events = [
    {
        title: 'Event 1',
        year: '2023',
        description: 'Description of the event',
        image: 'placeholder.jpg'
    },
    {
        title: 'Event 2',
        year: '2022',
        description: 'Description of the event',
        image: 'placeholder.jpg'
    }
];

function createEventsGrid() {
    const eventsGrid = document.querySelector('.events-grid');
    if (!eventsGrid) return;
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event-card';
        eventElement.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="event-pic">
            <div class="event-title">${event.title}</div>
            <div class="event-year">${event.year}</div>
            <div class="event-desc">${event.description}</div>
        `;
        eventsGrid.appendChild(eventElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createEventsGrid();
});
