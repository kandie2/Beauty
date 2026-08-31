document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-in, .glass-card');
    animatedElements.forEach(el => {
        el.classList.add('animate-in'); // Ensure class is present
        observer.observe(el);
    });

    // Form Validation for Booking
    const bookingForm = document.querySelector('form[action="process_booking.php"]');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            const dateInput = document.getElementById('date');
            const selectedDate = new Date(dateInput.value);
            const today = new Date();
            today.setHours(0,0,0,0);

            if (selectedDate < today) {
                e.preventDefault();
                alert("ERROR: SELECTED DATE IS IN THE PAST. PLEASE RESET PARAMETERS.");
                dateInput.style.borderColor = "var(--neon-pink)";
            }
        });
    }

    // Hover sound effect placeholder (Visual only for now)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.boxShadow = "0 0 20px var(--neon-cyan)";
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.boxShadow = "none";
        });
    });
});
