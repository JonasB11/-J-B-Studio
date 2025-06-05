// Example partners
const partners = [
    {
        name: 'Gummibärenbande',
        logo: './public/images/gummi.png',
        description: '<a href="https://discord.gg/xAQ5RBhD6h">Discord</a>'
    },
    {
        name: 'Kolpingtheater Ramsen',
        logo: './public/images/Kolpingtheater.svg',
        description: '<a href="http://theater.kolping-ramsen.de/">Website</a>'
    },
    {
        name: 'JP',
        logo: './public/images/JP.svg',
        description: '<a href="https://jupeters.de/">Website</a>'
    },
    {
        name: 'CFW',
        logo: './public/images/CFW.svg',
        description: '<a href="https://www.youtube.com/channel/UClU8mK17SZwqCLDES0olV1w">YouTube</a>'
    },
    {
        name: 'LMF',
        logo: './public/images/LMF.svg',
        description: '<a href="https://lmf.logge.top/">Website</a>'
    },
    {
        name: 'Buff',
        logo: './public/images/Buff.svg',
        description: '<a href="https://buffbolzen.com/buffbolzen.com">Website</a>'
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
