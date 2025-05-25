// Example partners
const partners = [
    {
        name: 'Partner 1',
        logo: 'placeholder.jpg',
        description: 'Description of the partner'
    },
    {
        name: 'Partner 2',
        logo: 'placeholder.jpg',
        description: 'Description of the partner'
    }
];

function createPartnersGrid() {
    const partnersGrid = document.querySelector('.partners-grid');
    if (!partnersGrid) return;
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

document.addEventListener('DOMContentLoaded', () => {
    createPartnersGrid();
});
