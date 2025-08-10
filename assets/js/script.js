// Core website functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile navigation toggle
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navbarMenu && navbarMenu.classList.contains('active')) {
            if (!navbarMenu.contains(event.target) && !navbarToggle.contains(event.target)) {
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        }
    });
    
    // Tab functionality for Solutions section
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            const targetPanel = document.getElementById(targetTab + '-panel');
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation for contact forms
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Remove error class when user starts typing
                    field.addEventListener('input', function() {
                        this.classList.remove('error');
                    }, { once: true });
                }
            });
            
            // Email validation
            const emailFields = form.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (field.value && !emailRegex.test(field.value)) {
                    isValid = false;
                    field.classList.add('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields correctly.');
            }
        });
    });
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Search functionality
    const searchInput = document.querySelector('#search-input');
    const searchResults = document.querySelector('#search-results');
    
    if (searchInput && searchResults) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            if (query.length < 3) {
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                return;
            }
            
            searchTimeout = setTimeout(() => {
                performSearch(query);
            }, 300);
        });
        
        // Close search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('#newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate newsletter subscription
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            }
        });
    }
    
    // Cookie consent (basic implementation)
    const cookieConsent = document.querySelector('#cookie-consent');
    const acceptCookies = document.querySelector('#accept-cookies');
    
    if (cookieConsent && acceptCookies) {
        // Check if user has already accepted cookies
        if (!localStorage.getItem('cookies-accepted')) {
            cookieConsent.style.display = 'block';
        }
        
        acceptCookies.addEventListener('click', function() {
            localStorage.setItem('cookies-accepted', 'true');
            cookieConsent.style.display = 'none';
        });
    }
    
    // Back to top button
    const backToTop = document.querySelector('#back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Product comparison functionality
    const compareCheckboxes = document.querySelectorAll('.compare-checkbox');
    const compareButton = document.querySelector('#compare-button');
    
    if (compareCheckboxes.length > 0 && compareButton) {
        compareCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const checkedBoxes = document.querySelectorAll('.compare-checkbox:checked');
                if (checkedBoxes.length > 0) {
                    compareButton.style.display = 'inline-block';
                    compareButton.textContent = `Compare (${checkedBoxes.length})`;
                } else {
                    compareButton.style.display = 'none';
                }
            });
        });
    }
    
    // Initialize tooltips (if any)
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
    
    function showTooltip(e) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = this.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
    }
    
    function hideTooltip(e) {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
});

// Search functionality
function performSearch(query) {
    // This would typically connect to a search API
    // For demo purposes, we'll simulate search results
    const searchResults = document.querySelector('#search-results');
    
    // Simulate API delay
    setTimeout(() => {
        const mockResults = [
            { title: 'BSM1200D12P2C01s IGBT Module', url: '/products/power/igbt-module/BSM1200D12P2C01s.html' },
            { title: 'BS32F103VGT7 Automotive MCU', url: '/products/mcu/BS32F103VGT7.html' },
            { title: 'Motor Drive Inverter Solution', url: '/solutions/automotive/motor-drive-inverter.html' }
        ];
        
        const filteredResults = mockResults.filter(result => 
            result.title.toLowerCase().includes(query.toLowerCase())
        );
        
        if (filteredResults.length > 0) {
            searchResults.innerHTML = filteredResults.map(result => 
                `<div class="search-result-item">
                    <a href="${result.url}">${result.title}</a>
                </div>`
            ).join('');
        } else {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        }
        
        searchResults.style.display = 'block';
    }, 200);
}

// Analytics tracking (placeholder)
function trackEvent(category, action, label) {
    // This would integrate with Google Analytics or similar
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Track important interactions
document.addEventListener('click', function(e) {
    // Track product page visits
    if (e.target.closest('a[href*="/products/"]')) {
        trackEvent('Product', 'View', e.target.textContent);
    }
    
    // Track solution page visits
    if (e.target.closest('a[href*="/solutions/"]')) {
        trackEvent('Solution', 'View', e.target.textContent);
    }
    
    // Track quote requests
    if (e.target.closest('.btn-primary') && e.target.textContent.includes('Quote')) {
        trackEvent('Lead', 'Quote Request', window.location.pathname);
    }
    
    // Track sample requests
    if (e.target.closest('.btn') && e.target.textContent.includes('Sample')) {
        trackEvent('Lead', 'Sample Request', window.location.pathname);
    }
});

// Page load performance tracking
window.addEventListener('load', function() {
    if ('performance' in window) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        trackEvent('Performance', 'Page Load Time', Math.round(loadTime));
    }
});

// Error tracking
window.addEventListener('error', function(e) {
    trackEvent('Error', 'JavaScript Error', e.message);
});