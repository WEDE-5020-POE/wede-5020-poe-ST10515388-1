/* ============================================================
   Sweet Crumbs Bakery - Main JavaScript File
   File: js/main.js
   Student: Lesego Siziba
   Student Number: ST10515388
   Module: WEDE5020 - Web Development (Introduction)
   Part 3 - JavaScript Enhancements, Form Validation, Maps
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       1. MOBILE NAVIGATION TOGGLE
       Toggles the mobile hamburger navigation open/closed.
    ============================================================ */
    var navToggle = document.getElementById('navToggle');
    var mainNav   = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            var isOpen = mainNav.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
        });

        document.addEventListener('click', function (event) {
            var header = document.querySelector('header');
            if (header && !header.contains(event.target)) {
                mainNav.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Open navigation menu');
            }
        });
    }

    /* ============================================================
       2. SMOOTH SCROLL FOR ANCHOR LINKS
    ============================================================ */
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ============================================================
       3. ACCORDION - Used on Products page for category details
       Clicking a category heading toggles its body open/closed.
    ============================================================ */
    var accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            var body = this.nextElementSibling;
            var isOpen = this.classList.contains('accordion-open');

            /* Close all other accordion panels first */
            document.querySelectorAll('.accordion-header').forEach(function (h) {
                h.classList.remove('accordion-open');
                h.setAttribute('aria-expanded', 'false');
                var b = h.nextElementSibling;
                if (b) { b.style.maxHeight = null; b.style.paddingTop = '0'; b.style.paddingBottom = '0'; }
            });

            /* Toggle clicked panel */
            if (!isOpen) {
                this.classList.add('accordion-open');
                this.setAttribute('aria-expanded', 'true');
                if (body) {
                    body.style.maxHeight = body.scrollHeight + 'px';
                    body.style.paddingTop = '1rem';
                    body.style.paddingBottom = '1rem';
                }
            }
        });

        /* Set initial aria attributes */
        header.setAttribute('aria-expanded', 'false');
        var body = header.nextElementSibling;
        if (body) { body.style.maxHeight = null; body.style.paddingTop = '0'; body.style.paddingBottom = '0'; }
    });

    /* ============================================================
       4. TABS - Used on Contact page to switch between map locations
    ============================================================ */
    var tabButtons = document.querySelectorAll('.map-tab-btn');
    var tabPanels  = document.querySelectorAll('.map-panel');

    tabButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var target = this.getAttribute('data-tab');

            /* Deactivate all tabs and panels */
            tabButtons.forEach(function (b) { b.classList.remove('tab-active'); b.setAttribute('aria-selected', 'false'); });
            tabPanels.forEach(function (p) { p.classList.remove('panel-active'); p.setAttribute('aria-hidden', 'true'); });

            /* Activate selected tab and panel */
            this.classList.add('tab-active');
            this.setAttribute('aria-selected', 'true');
            var panel = document.getElementById(target);
            if (panel) { panel.classList.add('panel-active'); panel.setAttribute('aria-hidden', 'false'); }

            /* Re-initialise Leaflet map in the newly shown panel */
            if (target === 'tab-melville' && window.mapMelville) {
                window.mapMelville.invalidateSize();
            } else if (target === 'tab-sandton' && window.mapSandton) {
                window.mapSandton.invalidateSize();
            }
        });
    });

    /* ============================================================
       5. LEAFLET INTERACTIVE MAPS - Contact page
    ============================================================ */
    if (document.getElementById('mapMelville')) {
        window.mapMelville = L.map('mapMelville', { zoomControl: true, scrollWheelZoom: false }).setView([-26.1752, 27.9784], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(window.mapMelville);
        L.marker([-26.1752, 27.9784])
            .addTo(window.mapMelville)
            .bindPopup('<strong>Sweet Crumbs Bakery - Melville</strong><br>12 Baker Street, Melville, Johannesburg<br>Mon-Fri: 06:00-18:00 | Sat: 07:00-15:00 | Sun: 08:00-13:00')
            .openPopup();
    }

    if (document.getElementById('mapSandton')) {
        window.mapSandton = L.map('mapSandton', { zoomControl: true, scrollWheelZoom: false }).setView([-26.1069, 28.0527], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(window.mapSandton);
        L.marker([-26.1069, 28.0527])
            .addTo(window.mapSandton)
            .bindPopup('<strong>Sweet Crumbs Bakery - Sandton City Kiosk</strong><br>Shop K14, Sandton City Shopping Centre<br>Mon-Sat: 09:00-20:00 | Sun: 10:00-18:00')
            .openPopup();
    }

    /* ============================================================
       6. LIGHTBOX GALLERY - Products page
       Clicking a gallery image opens it in a full-screen overlay.
    ============================================================ */
    var lightbox     = document.getElementById('lightbox');
    var lightboxImg  = document.getElementById('lightboxImg');
    var lightboxCap  = document.getElementById('lightboxCaption');
    var lightboxClose = document.getElementById('lightboxClose');

    if (lightbox && lightboxImg) {

        /* Open lightbox when any .lightbox-trigger image is clicked */
        document.querySelectorAll('.lightbox-trigger').forEach(function (img) {
            img.addEventListener('click', function () {
                lightboxImg.src = this.src;
                lightboxImg.alt = this.alt;
                if (lightboxCap) { lightboxCap.textContent = this.getAttribute('data-caption') || this.alt; }
                lightbox.classList.add('lightbox-open');
                lightbox.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                if (lightboxClose) { lightboxClose.focus(); }
            });
        });

        /* Close lightbox */
        function closeLightbox() {
            lightbox.classList.remove('lightbox-open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        if (lightboxClose) { lightboxClose.addEventListener('click', closeLightbox); }
        lightbox.addEventListener('click', function (e) { if (e.target === lightbox) { closeLightbox(); } });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeLightbox(); } });

        /* Arrow navigation through gallery images */
        var galleryImages = Array.from(document.querySelectorAll('.lightbox-trigger'));
        var currentIndex  = 0;

        document.getElementById('lightboxPrev') && document.getElementById('lightboxPrev').addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            lightboxImg.src = galleryImages[currentIndex].src;
            lightboxImg.alt = galleryImages[currentIndex].alt;
            if (lightboxCap) { lightboxCap.textContent = galleryImages[currentIndex].getAttribute('data-caption') || galleryImages[currentIndex].alt; }
        });

        document.getElementById('lightboxNext') && document.getElementById('lightboxNext').addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            lightboxImg.src = galleryImages[currentIndex].src;
            lightboxImg.alt = galleryImages[currentIndex].alt;
            if (lightboxCap) { lightboxCap.textContent = galleryImages[currentIndex].getAttribute('data-caption') || galleryImages[currentIndex].alt; }
        });

        document.querySelectorAll('.lightbox-trigger').forEach(function (img, idx) {
            img.addEventListener('click', function () { currentIndex = idx; });
        });
    }

    /* ============================================================
       7. PRODUCT SEARCH / FILTER - Products page
       Filters product cards in real time as the user types.
    ============================================================ */
    var searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            var query = this.value.toLowerCase().trim();
            var cards = document.querySelectorAll('.product-card');
            var visibleCount = 0;

            cards.forEach(function (card) {
                var text = card.textContent.toLowerCase();
                var match = text.includes(query);
                card.style.display = match ? '' : 'none';
                if (match) { visibleCount++; }
            });

            /* Show/hide a "no results" message */
            var noResults = document.getElementById('noResults');
            if (noResults) { noResults.style.display = visibleCount === 0 ? 'block' : 'none'; }
        });
    }

    /* ============================================================
       8. ENQUIRY FORM VALIDATION WITH PRICE RESPONSE
    ============================================================ */
    var enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validateEnquiryForm()) {
                showEnquiryResponse();
            }
        });

        /* Live validation - show errors on blur */
        enquiryForm.querySelectorAll('input, select, textarea').forEach(function (field) {
            field.addEventListener('blur', function () { validateField(this); });
            field.addEventListener('input', function () {
                if (this.closest('.form-group').querySelector('.error-msg')) {
                    validateField(this);
                }
            });
        });
    }

    function validateField(field) {
        var group = field.closest('.form-group');
        var existing = group ? group.querySelector('.error-msg') : null;
        if (existing) { existing.remove(); }
        if (group) { group.classList.remove('field-error', 'field-success'); }

        var error = getFieldError(field);
        if (error) {
            if (group) {
                group.classList.add('field-error');
                var msg = document.createElement('span');
                msg.className = 'error-msg';
                msg.setAttribute('role', 'alert');
                msg.textContent = error;
                group.appendChild(msg);
            }
            return false;
        } else if (field.value.trim() !== '' || field.required) {
            if (group) { group.classList.add('field-success'); }
        }
        return true;
    }

    function getFieldError(field) {
        var val = field.value.trim();
        if (field.required && val === '') { return 'This field is required.'; }

        switch (field.type) {
            case 'email':
                if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { return 'Please enter a valid email address.'; }
                break;
            case 'tel':
                if (val && !/^0[6-8][0-9]{8}$/.test(val)) { return 'Please enter a valid 10-digit SA mobile number (e.g. 0821234567).'; }
                break;
            case 'date':
                if (val) {
                    var today = new Date(); today.setHours(0,0,0,0);
                    var chosen = new Date(val);
                    var minDays = 1; /* default */
                    var category = document.getElementById('productCategory');
                    if (category && (category.value === 'custom-cake' || category.value === 'occasion-cake')) { minDays = 3; }
                    if (category && category.value === 'gluten-free') { minDays = 2; }
                    var minDate = new Date(today.getTime() + minDays * 86400000);
                    if (chosen < minDate) { return 'Please choose a date at least ' + minDays + ' day(s) from today.'; }
                }
                break;
            case 'number':
                if (val && (parseInt(val) < 1 || isNaN(parseInt(val)))) { return 'Quantity must be at least 1.'; }
                break;
            case 'text':
                if (field.minLength && val.length > 0 && val.length < field.minLength) {
                    return 'Please enter at least ' + field.minLength + ' characters.';
                }
                break;
        }

        if (field.tagName === 'TEXTAREA' && field.minLength && val.length > 0 && val.length < field.minLength) {
            return 'Please enter at least ' + field.minLength + ' characters.';
        }

        return '';
    }

    function validateEnquiryForm() {
        var valid = true;

        /* Validate radio group (delivery) manually */
        var radios = enquiryForm.querySelectorAll('input[name="delivery"]');
        var radioGroup = enquiryForm.querySelector('.radio-group');
        var radioChecked = Array.from(radios).some(function (r) { return r.checked; });
        var radioError = radioGroup ? radioGroup.querySelector('.error-msg') : null;
        if (radioError) { radioError.remove(); }
        if (!radioChecked) {
            valid = false;
            if (radioGroup) {
                var msg = document.createElement('span');
                msg.className = 'error-msg';
                msg.setAttribute('role', 'alert');
                msg.textContent = 'Please select a delivery preference.';
                radioGroup.appendChild(msg);
            }
        }

        enquiryForm.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]), select, textarea').forEach(function (field) {
            if (!validateField(field)) { valid = false; }
        });

        return valid;
    }

    function showEnquiryResponse() {
        var category = document.getElementById('productCategory');
        var quantity  = parseInt(document.getElementById('quantity').value) || 1;
        var firstName = document.getElementById('firstName').value.trim();

        var prices = {
            'bread':         65,
            'pastry':        22,
            'custom-cake':   350,
            'occasion-cake': 420,
            'cheesecake':    260,
            'gluten-free':   80,
            'corporate':     0,
            'other':         0
        };

        var labels = {
            'bread':         'Artisan Bread',
            'pastry':        'Pastries',
            'custom-cake':   'Custom Layer Cake',
            'occasion-cake': 'Occasion Cake',
            'cheesecake':    'Baked Cheesecake',
            'gluten-free':   'Gluten-Free Products',
            'corporate':     'Corporate / Bulk Order',
            'other':         'Custom Item'
        };

        var catVal     = category ? category.value : 'other';
        var unitPrice  = prices[catVal] || 0;
        var totalPrice = unitPrice * quantity;
        var label      = labels[catVal] || 'Product';
        var priceText  = (catVal === 'corporate' || catVal === 'other')
            ? 'Price on application — we will send a personalised quote within 24 hours.'
            : 'Estimated total: R' + totalPrice.toFixed(2) + ' (' + quantity + ' × ' + label + ' @ R' + unitPrice.toFixed(2) + ' each)';

        var responseBox = document.getElementById('enquiryResponse');
        if (!responseBox) {
            responseBox = document.createElement('div');
            responseBox.id = 'enquiryResponse';
            responseBox.className = 'form-response success-response';
            enquiryForm.parentNode.insertBefore(responseBox, enquiryForm.nextSibling);
        }

        responseBox.innerHTML =
            '<h3>Thank you, ' + escapeHtml(firstName) + '! Your enquiry has been received.</h3>' +
            '<p><strong>Product:</strong> ' + escapeHtml(label) + '</p>' +
            '<p><strong>Quantity:</strong> ' + quantity + '</p>' +
            '<p><strong>' + (totalPrice > 0 ? 'Estimated Cost' : 'Pricing') + ':</strong> ' + priceText + '</p>' +
            '<p>We will confirm your order by email within 24 hours. Please note that the price above is an estimate — the final quote will be sent to you after we review your order details.</p>';

        enquiryForm.style.display = 'none';
        responseBox.style.display = 'block';
        responseBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* ============================================================
       9. CONTACT FORM VALIDATION WITH MAILTO EMAIL
    ============================================================ */
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validateContactForm()) {
                compileAndSendEmail();
            }
        });

        contactForm.querySelectorAll('input, select, textarea').forEach(function (field) {
            field.addEventListener('blur', function () { validateContactField(this); });
            field.addEventListener('input', function () {
                if (this.closest('.form-group') && this.closest('.form-group').querySelector('.error-msg')) {
                    validateContactField(this);
                }
            });
        });
    }

    function validateContactField(field) {
        var group = field.closest('.form-group');
        var existing = group ? group.querySelector('.error-msg') : null;
        if (existing) { existing.remove(); }
        if (group) { group.classList.remove('field-error', 'field-success'); }

        var error = getFieldError(field);
        if (error) {
            if (group) {
                group.classList.add('field-error');
                var msg = document.createElement('span');
                msg.className = 'error-msg';
                msg.setAttribute('role', 'alert');
                msg.textContent = error;
                group.appendChild(msg);
            }
            return false;
        } else if (field.value.trim() !== '') {
            if (group) { group.classList.add('field-success'); }
        }
        return true;
    }

    function validateContactForm() {
        var valid = true;
        contactForm.querySelectorAll('input:not([type="checkbox"]), select, textarea').forEach(function (field) {
            if (!validateContactField(field)) { valid = false; }
        });
        return valid;
    }

    function compileAndSendEmail() {
        var firstName   = document.getElementById('ctcFirstName').value.trim();
        var lastName    = document.getElementById('ctcLastName').value.trim();
        var email       = document.getElementById('ctcEmail').value.trim();
        var phone       = document.getElementById('ctcPhone').value.trim();
        var messageType = document.getElementById('messageType').value;
        var message     = document.getElementById('ctcMessage').value.trim();
        var newsletter  = document.getElementById('newsletter') ? document.getElementById('newsletter').checked : false;

        var subject = 'Website Contact Form: ' + messageType + ' from ' + firstName + ' ' + lastName;

        var body =
            'Name: ' + firstName + ' ' + lastName + '\n' +
            'Email: ' + email + '\n' +
            (phone ? 'Phone: ' + phone + '\n' : '') +
            'Message Type: ' + messageType + '\n' +
            'Newsletter: ' + (newsletter ? 'Yes' : 'No') + '\n\n' +
            'Message:\n' + message;

        var mailtoLink = 'mailto:hello@sweetcrumbs.co.za' +
            '?subject=' + encodeURIComponent(subject) +
            '&body='    + encodeURIComponent(body);

        window.location.href = mailtoLink;

        /* Show confirmation after a short delay */
        setTimeout(function () {
            var responseBox = document.getElementById('contactResponse');
            if (!responseBox) {
                responseBox = document.createElement('div');
                responseBox.id = 'contactResponse';
                responseBox.className = 'form-response success-response';
                contactForm.parentNode.insertBefore(responseBox, contactForm.nextSibling);
            }
            responseBox.innerHTML =
                '<h3>Thank you, ' + escapeHtml(firstName) + '!</h3>' +
                '<p>Your email client has been opened with your message pre-filled. Please click Send in your email client to complete your message to us.</p>' +
                '<p>We will respond to your message within 24 hours.</p>';
            responseBox.style.display = 'block';
            responseBox.scrollIntoView({ behavior: 'smooth' });
        }, 800);
    }

    /* ============================================================
       10. CSS ANIMATIONS - Fade-in on scroll using IntersectionObserver
    ============================================================ */
    if ('IntersectionObserver' in window) {
        var animatedEls = document.querySelectorAll('.features .features-grid article, .product-card, .team-member, .testimonials-grid blockquote');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animatedEls.forEach(function (el) {
            el.classList.add('pre-animate');
            observer.observe(el);
        });
    }

    /* ============================================================
       11. DYNAMIC CONTENT LOADING - Products page
       Loads additional product cards dynamically when "Load More" is clicked.
    ============================================================ */
    var loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        var extraProducts = [
            {
                img: 'images/sourdough.jpg',
                alt: 'Seeded rye loaf with a dark crust on a wooden board',
                title: 'Seeded Rye Loaf',
                desc: 'Dense and hearty rye bread packed with caraway and sunflower seeds. Perfect with smoked salmon or aged cheese.',
                price: 'R75.00',
                link: 'enquiry.html',
                linkText: 'Order Now'
            },
            {
                img: 'images/croissant.jpg',
                alt: 'Almond croissant dusted with icing sugar on a white plate',
                title: 'Almond Croissant',
                desc: 'A day-old croissant soaked in almond syrup, filled with frangipane and topped with flaked almonds and icing sugar.',
                price: 'R28.00',
                link: 'enquiry.html',
                linkText: 'Order Now'
            },
            {
                img: 'images/cake.jpg',
                alt: 'Lemon drizzle loaf cake with white icing on a slate board',
                title: 'Lemon Drizzle Loaf',
                desc: 'A beautifully moist lemon loaf with a sharp lemon drizzle glaze. Light, tangy and absolutely irresistible with a cup of tea.',
                price: 'R190.00',
                link: 'enquiry.html',
                linkText: 'Order Now'
            }
        ];

        loadMoreBtn.addEventListener('click', function () {
            var container = document.getElementById('extraProductsContainer');
            if (!container) { return; }
            container.style.display = '';

            extraProducts.forEach(function (product) {
                var card = document.createElement('article');
                card.className = 'product-card lightbox-trigger-wrap';
                card.innerHTML =
                    '<img src="' + product.img + '" alt="' + escapeHtml(product.alt) + '" class="lightbox-trigger" data-caption="' + escapeHtml(product.title) + '" loading="lazy" />' +
                    '<div class="product-details">' +
                        '<h3>' + escapeHtml(product.title) + '</h3>' +
                        '<p>' + escapeHtml(product.desc) + '</p>' +
                        '<p><strong>Price: ' + escapeHtml(product.price) + '</strong></p>' +
                        '<a href="' + product.link + '">' + escapeHtml(product.linkText) + '</a>' +
                    '</div>';

                /* Add lightbox click handler to the new image */
                var img = card.querySelector('.lightbox-trigger');
                if (img && lightbox && lightboxImg) {
                    img.style.cursor = 'zoom-in';
                    img.addEventListener('click', function () {
                        lightboxImg.src = this.src;
                        lightboxImg.alt = this.alt;
                        if (lightboxCap) { lightboxCap.textContent = this.getAttribute('data-caption') || this.alt; }
                        lightbox.classList.add('lightbox-open');
                        lightbox.setAttribute('aria-hidden', 'false');
                        document.body.style.overflow = 'hidden';
                    });
                }

                container.appendChild(card);
            });

            loadMoreBtn.style.display = 'none';
        });
    }

    /* ============================================================
       UTILITY: HTML escape to prevent XSS in dynamic content
    ============================================================ */
    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

});
