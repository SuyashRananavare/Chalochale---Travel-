
// ===== Back-to-Top Button =====
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ===== Navbar Mobile Menu Close =====
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                const toggleBtn = document.querySelector('.navbar-toggler');
                toggleBtn.click();
            }
        });
    });
});

// ===== Package Filter Functionality =====
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const packageCards = document.querySelectorAll('.package-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter packages
            packageCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('d-none');
                } else {
                    const categories = card.getAttribute('data-category').split(',');
                    if (categories.includes(filterValue)) {
                        card.classList.remove('d-none');
                    } else {
                        card.classList.add('d-none');
                    }
                }
            });
        });
    });
});

// ===== Pre-fill Destination from URL Query Param =====
document.addEventListener('DOMContentLoaded', function() {
    const destinationSelect = document.getElementById('destination');
    
    if (destinationSelect) {
        const urlParams = new URLSearchParams(window.location.search);
        const destination = urlParams.get('destination');
        
        if (destination) {
            destinationSelect.value = destination;
        }
    }
});

// ===== Form Validation Utility =====
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    return form.checkValidity();
}

function showSuccessAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show';
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        <i class="bi bi-check-circle"></i> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);
        setTimeout(() => alertDiv.remove(), 5000);
    }
}

// ===== Booking Form Validation =====
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm('bookingForm')) {
                this.classList.add('was-validated');
                return;
            }
            
            this.classList.add('was-validated');
            showSuccessAlert('Booking request submitted successfully! We will contact you soon.');
            
            // Reset form after a short delay
            setTimeout(() => {
                this.reset();
                this.classList.remove('was-validated');
            }, 2000);
        });
    }
});

// ===== Signup Form Validation =====
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        const passwordField = document.getElementById('signupPassword');
        const confirmPasswordField = document.getElementById('confirmPassword');
        
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if password and confirm password match
            if (passwordField.value !== confirmPasswordField.value) {
                confirmPasswordField.classList.add('is-invalid');
                confirmPasswordField.classList.remove('is-valid');
                this.classList.add('was-validated');
                return;
            }
            
            if (!validateForm('signupForm')) {
                this.classList.add('was-validated');
                return;
            }
            
            this.classList.add('was-validated');
            showSuccessAlert('Account created successfully! You can now sign in with your credentials.');
            
            setTimeout(() => {
                this.reset();
                this.classList.remove('was-validated');
                window.location.href = 'login.html';
            }, 2000);
        });
        
        // Real-time password match validation
        confirmPasswordField.addEventListener('blur', function() {
            if (passwordField.value !== this.value) {
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
            } else {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        });
    }
});

// ===== Login Form Validation =====
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm('loginForm')) {
                this.classList.add('was-validated');
                return;
            }
            
            this.classList.add('was-validated');
            showSuccessAlert('Sign in successful! Redirecting to home page...');
            
            setTimeout(() => {
                this.reset();
                this.classList.remove('was-validated');
                window.location.href = 'index.html';
            }, 2000);
        });
    }
});

// ===== Contact Form Validation =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm('contactForm')) {
                this.classList.add('was-validated');
                return;
            }
            
            this.classList.add('was-validated');
            showSuccessAlert('Thank you for contacting us! We will get back to you shortly.');
            
            // Reset form after a short delay
            setTimeout(() => {
                this.reset();
                this.classList.remove('was-validated');
            }, 2000);
        });
    }
});

// ===== Email Validation Pattern =====
document.addEventListener('DOMContentLoaded', function() {
    const emailInputs = document.querySelectorAll('input[type="email"]');
    
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (this.value && !emailPattern.test(this.value)) {
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
            }
        });
    });
});

// ===== Number Validation for Numeric Fields =====
document.addEventListener('DOMContentLoaded', function() {
    const numberInputs = document.querySelectorAll('input[type="number"]');
    
    numberInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && (isNaN(this.value) || parseInt(this.value) < 1)) {
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
            }
        });
    });
});

// ===== Social Link Hover Effect =====
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.style.cursor = 'pointer';
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// ===== Smooth Scroll Enhancement =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#mynavbar') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
