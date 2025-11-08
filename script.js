// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Testimonial Slider
    const dots = document.querySelectorAll('.dot');
    const testimonials = document.querySelectorAll('.testimonial');
    
    if (dots.length > 0) {
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = this.getAttribute('data-slide');
                
                // Update active testimonial
                testimonials.forEach(testimonial => testimonial.classList.remove('active'));
                testimonials[slideIndex].classList.add('active');
                
                // Update active dot
                dots.forEach(d => d.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Auto-advance testimonials
        let currentSlide = 0;
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            testimonials[currentSlide].classList.add('active');
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlide].classList.add('active');
        }, 5000);
    }

    // Profile Photo Upload
    const uploadTrigger = document.getElementById('uploadTrigger');
    const photoUpload = document.getElementById('photoUpload');
    
    if (uploadTrigger && photoUpload) {
        uploadTrigger.addEventListener('click', function() {
            photoUpload.click();
        });

        photoUpload.addEventListener('change', function(e) {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    document.getElementById('profileImage').src = e.target.result;
                }
                
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});
