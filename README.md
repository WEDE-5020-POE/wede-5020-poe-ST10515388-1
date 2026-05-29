# Sweet Crumbs Bakery Website

**Module:** WEDE5020 - Web Development (Introduction)  
**Student Name:** Lesego Siziba  
**Student Number:** ST10515388  
**Campus:** Rosebank College PTA  
**Submission Date:** Part 1 Fixes & Part 2 - 29 May 2026

---

## Project Overview

This website is for Sweet Crumbs Bakery, a small artisan bakery based in Johannesburg with two locations (Melville and Sandton City). The bakery specialises in handmade sourdough breads, French pastries, and custom celebration cakes.

The website serves as the bakery's primary online presence, allowing customers to browse products, request custom orders, find store locations, and contact the team.

---

## Website Goals and Objectives

1. **Establish professional online presence** - Create a credible digital storefront for the bakery
2. **Showcase products** - Display breads, pastries, and cakes with descriptions and pricing
3. **Enable custom orders** - Allow customers to submit enquiries for custom cakes and bulk orders
4. **Provide location information** - Show both store locations with an interactive map
5. **Mobile accessibility** - Ensure the site works well on phones (primary device for target audience)
6. **Local SEO** - Help the bakery appear in Google searches for "bakery Johannesburg"

### Key Performance Indicators (KPIs)
- 500+ unique monthly visitors within 3 months
- 20+ custom order enquiries per month
- Google PageSpeed mobile score of 80+
- First page ranking for "bakery in Johannesburg" within 6 months

---

## Key Features and Functionality

### All Pages
- Consistent header with logo and navigation menu
- Responsive navigation (mobile hamburger menu in Part 2)
- Footer with contact info, quick links, and social media
- Semantic HTML5 structure

### Homepage (index.html)
- Hero banner with call-to-action buttons
- Four feature cards highlighting unique selling points
- Three popular product preview cards
- Customer testimonials section
- Call-to-action banner

### About Us (about.html)
- Bakery founding story with image
- Mission, vision, and values cards
- Team member profiles (4 members)
- Milestone timeline (8 key events)

### Products (products.html)
- Category filter navigation (Breads, Pastries, Cakes)
- Nine product cards across three categories
- Each card: image, description, details list, price, order link
- Ordering information sidebar

### Order Enquiry (enquiry.html)
- Comprehensive order form with two fieldsets
- Input types: text, email, tel, number, date, select, radio, checkbox, textarea
- Required field validation (HTML5, enhanced with JavaScript in Part 3)
- Pricing guide sidebar
- Order process explanation

### Contact (contact.html)
- Two location cards with addresses, hours, and features
- Interactive map placeholder (Leaflet.js implementation in Part 3)
- Contact form with personal info and message fieldsets
- Sidebar with phone, email, and social media links

---

## Timeline and Milestones

| Part | Deadline | Status |
|------|----------|--------|
| Part 1 - HTML Structure | 19 Feb 2026 | ✅ Resubmitted with fixes |
| Part 2 - CSS Styling | 29 May 2026 | 🔄 In Progress |
| Part 3 - JavaScript & SEO | TBD | Not started |

---

## Sitemape

---

## Part 1 Details

### HTML Standards Implemented
- Semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<address>`, `<blockquote>`, `<fieldset>`, `<legend>`
- Proper heading hierarchy (single `<h1>` per page, then `<h2>`, `<h3>` in sequence)
- Descriptive alt text on all images
- Navigation using `<nav>` with `<ul>`/`<li>` structure
- Forms with proper `<label>` associations and validation attributes
- HTML comments explaining each section

### Form Input Types Used
- `text` - Names, addresses, subjects
- `email` - Email addresses with validation
- `tel` - Phone numbers with pattern validation
- `number` - Quantity selection with min/max
- `date` - Date picker for delivery dates
- `select` - Dropdown menus for categories
- `radio` - Single-choice options (delivery method)
- `checkbox` - Multiple-choice options (dietary requirements)
- `textarea` - Multi-line text input

---

## Part 2 Details

### CSS Features Implemented
- External stylesheet linked to all pages
- CSS custom properties (variables) for colours and typography
- CSS Reset for cross-browser consistency
- Google Fonts integration (Playfair Display, Open Sans)
- Flexbox and CSS Grid layouts
- Responsive design with mobile-first approach
- Media queries for tablet (768px) and desktop (1024px+) breakpoints
- Pseudo-classes for hover, focus, and active states
- Responsive images using srcset
- Consistent spacing and visual hierarchy

### Responsive Design
- Mobile: Single column layout, hamburger navigation
- Tablet: Two-column grids where appropriate
- Desktop: Multi-column layouts, expanded navigation

---

## Changelog

### Part 2 Development (May 2026)

| Date | Version | Changes |
|------|---------|---------|
| 2026-05-20 | v1.0 | **PART 1 FIXES:** Completely rebuilt all 5 HTML pages with proper semantic structure. Added comprehensive content to all pages. Fixed heading hierarchy. Added detailed HTML comments throughout. |
| 2026-05-20 | v1.1 | Added working navigation menu to all pages with correct links. Fixed all broken links between pages. |
| 2026-05-20 | v1.2 | Added descriptive alt text to all images following accessibility guidelines. |
| 2026-05-21 | v1.3 | Created css/style.css with CSS reset and base typography styles. Defined colour palette using CSS custom properties. |
| 2026-05-22 | v1.4 | Styled header and navigation for desktop. Added logo styling and hover effects on nav links. |
| 2026-05-23 | v1.5 | Styled hero sections on all pages. Added background images and overlay. Styled CTA buttons. |
| 2026-05-24 | v1.6 | Implemented CSS Grid layout for feature cards on homepage. Styled product cards with hover effects. |
| 2026-05-25 | v1.7 | Styled testimonials section with blockquote styling. Added footer styles with 4-column grid layout. |
| 2026-05-26 | v1.8 | Styled About page: story section, team grid, milestone timeline. |
| 2026-05-27 | v1.9 | Styled Products page: category filters, product cards, sidebar. |
| 2026-05-28 | v2.0 | Styled both forms: fieldsets, inputs, buttons, error messages, sidebars. |
| 2026-05-28 | v2.1 | Styled Contact page: location cards, map placeholder, contact sidebar. |
| 2026-05-29 | v2.2 | Implemented responsive design: mobile navigation, media queries for 768px and 1024px breakpoints. |
| 2026-05-29 | v2.3 | Cross-browser testing in Chrome, Firefox, Safari. Fixed minor alignment issues. |
| 2026-05-29 | v2.4 | Added responsive images using srcset. Optimised image loading with lazy loading. |
| 2026-05-29 | v2.5 | Final review and cleanup. Updated README with Part 2 details and screenshots. |

### Part 1 Feedback Fixes (May 2026)

| Issue from Feedback | Fix Applied |
|---------------------|-------------|
| "You did nothing to your GitHub repository" | Pushed all 5 HTML files, CSS, and images to repository |
| HTML Tags For Layout (1/10) | Rebuilt all pages with proper semantic HTML5 elements |
| Semantic Tags (1/10) | Added header, nav, main, section, article, aside, footer to all pages |
| HTML Content (0/5) | Added complete, relevant content to all 5 pages |
| Navigation (0/5) | Added working nav menu with links to all 5 pages |
| Comments (0/5) | Added detailed HTML comments explaining each section |
| Commits (0/5) | Made regular commits with descriptive messages |
| README (0/5) | Updated README with all required information |
| Changelog (0/5) | Added comprehensive changelog section |
| Wireframes (0/2) | Added wireframe descriptions to proposal |
| Timeline (1/2) | Corrected timeline with accurate dates |

---

## Responsive Design Screenshots

*Screenshots to be added showing:*
- Desktop view (1440px)
- Tablet view (768px)
- Mobile view (375px)

Include screenshots for:
- Homepage
- Products page
- Enquiry form

---

## References

Duckett, J. 2011. *HTML and CSS: design and build websites*. Indianapolis: John Wiley and Sons.

Duckett, J. 2014. *JavaScript and jQuery: interactive front-end web development*. Indianapolis: John Wiley and Sons.

Google Fonts. 2024. *Playfair Display*. [Online]. Available at: [fonts.google.com](https://fonts.google.com/specimen/Playfair+Display) [Accessed 20 May 2026].

Google Fonts. 2024. *Open Sans*. [Online]. Available at: [fonts.google.com](https://fonts.google.com/specimen/Open+Sans) [Accessed 20 May 2026].

Leaflet. 2024. *Leaflet: an open-source JavaScript library for interactive maps*. [Online]. Available at: [leafletjs.com](https://leafletjs.com) [Accessed 28 May 2026].

Mozilla Developer Network. 2024. *HTML elements reference*. [Online]. Available at: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) [Accessed 20 May 2026].

Mozilla Developer Network. 2024. *CSS reference*. [Online]. Available at: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) [Accessed 21 May 2026].

Mozilla Developer Network. 2024. *Responsive design*. [Online]. Available at: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) [Accessed 25 May 2026].

Unsplash. 2024. *Free high-resolution photos*. [Online]. Available at: [unsplash.com](https://unsplash.com) [Accessed 20 May 2026].

W3Schools. 2024. *CSS Flexbox*. [Online]. Available at: [w3schools.com](https://www.w3schools.com/css/css3_flexbox.asp) [Accessed 22 May 2026].

W3Schools. 2024. *CSS Grid*. [Online]. Available at: [w3schools.com](https://www.w3schools.com/css/css_grid.asp) [Accessed 22 May 2026].

W3Schools. 2024. *CSS Media Queries*. [Online]. Available at: [w3schools.com](https://www.w3schools.com/css/css3_mediaqueries.asp) [Accessed 25 May 2026].



