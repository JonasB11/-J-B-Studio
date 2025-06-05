// Connect section logic can go here if needed.

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the form data to your backend
            // For now, we'll just log it to the console
            console.log('Form submitted:', formData);
            
            // Clear the form
            contactForm.reset();
            
            // Show success message (you can customize this)
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
});
