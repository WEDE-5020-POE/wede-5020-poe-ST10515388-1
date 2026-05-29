# Sweet Crumbs Bakery – Website Project

**Module:** WEDE5020 - Web Development (Introduction)  
**Student Name:** Lesego Siziba  
**Student Number:** ST10515388  
**Campus:** Rosebank College PTA  
**Submission:** Part 2 – CSS Styling and Responsive Design  
**Part 2 Submission Date:** March 2026  

---

## Project Overview

This is the Part 2 submission for the WEDE5020 website project. The site is built for **Sweet Crumbs Bakery**, a small artisan bakery based in Melville, Johannesburg, selling handmade sourdough breads, pastries and custom celebration cakes from two locations: Melville and Sandton City.

Part 2 builds on the HTML foundation from Part 1 by adding a complete external CSS stylesheet (`css/style.css`) that styles all five pages consistently. The stylesheet introduces a warm, bread-inspired colour palette, Google Fonts typography, CSS Grid and Flexbox layouts, pseudo-class interactive states, and full responsive design using media queries for desktop, tablet and mobile screen sizes.

---

## Website Goals and Objectives

- Give the bakery a professional online presence so new customers can find them
- Display all products clearly with descriptions and prices
- Allow customers to send a custom order enquiry through a form
- Show both store locations and allow customers to contact the bakery
- Make the site fully responsive and easy to use on any device
- Help the bakery appear in Google search results for Johannesburg bakeries

---

## Key Features and Functionality

### Part 1 (HTML Foundation)
- 5 semantic HTML5 pages: `index.html`, `about.html`, `products.html`, `enquiry.html`, `contact.html`
- Correct heading hierarchy (H1 once per page, then H2, H3)
- Descriptive alt text on all images
- Navigation menu linking all pages with active-page indicator
- Forms on Enquiry and Contact pages with HTML5 validation attributes
- HTML comments explaining every section

### Part 2 (CSS Styling – this submission)
- **External stylesheet** (`css/style.css`) linked to all 5 pages
- **CSS Custom Properties (variables)** for colour palette, typography, spacing and shadows
- **Google Fonts** – Playfair Display (headings) and Lato (body text)
- **CSS Reset** normalising default browser styles for cross-browser consistency
- **CSS Grid** used for: 4-column features, 3-column products, 4-column team, 4-column footer, 2-column story/enquiry/contact layouts
- **Flexbox** used for: header, navigation, testimonials, hero buttons, social links, sidebar cards
- **Pseudo-classes**: `:hover`, `:focus`, `:focus-visible`, `:active`, `:visited`, `:focus-within` applied to nav, buttons, cards, form fields
- **Responsive design** with 3 breakpoints: 1024px (tablet), 768px (small tablet/large mobile), 480px (mobile phone)
- **Responsive typography** using `rem` units scaled by breakpoint
- **Responsive images** using `max-width: 100%` and `object-fit: cover`
- **Responsive navigation** with a hamburger toggle button (JS in `main.js`)
- **Smooth hover transitions** on all interactive elements
- Sticky header on desktop, relative on mobile
- Page banner section for all inner pages

---

## File and Folder Structure

```
sweet-crumbs-bakery/
├── index.html          Homepage
├── about.html          About Us page
├── products.html       Products page
├── enquiry.html        Enquiry / Order form page
├── contact.html        Contact page
├── README.md           This file
├── css/
│   └── style.css       External stylesheet (Part 2 - complete)
├── js/
│   └── main.js         JavaScript (hamburger menu in Part 2; full validation in Part 3)
└── images/
    ├── hero-bg.jpg
    ├── sourdough.jpg
    ├── croissant.jpg
    ├── cake.jpg
    ├── ciabatta.jpg
    ├── gf-loaf.jpg
    ├── pain-au-choc.jpg
    ├── danish.jpg
    ├── choc-cake.jpg
    ├── cheesecake.jpg
    ├── bakery-interior.jpg
    ├── team-amara.jpg
    ├── team-sipho.jpg
    ├── team-lerato.jpg
    └── team-james.jpg
```

---

## Sitemap

```
Sweet Crumbs Bakery Website
│
├── index.html       Homepage (hero, features, products, testimonials, CTA)
├── about.html       About Us (story, mission/vision, team, milestones)
├── products.html    Products (Breads, Pastries, Cakes with descriptions)
├── enquiry.html     Enquiry Form (custom order enquiries)
└── contact.html     Contact Form + Two store locations + Map placeholder
```

---

## CSS Architecture (Part 2 Details)

The stylesheet (`css/style.css`) is structured in 22 numbered sections:

| # | Section | Purpose |
|---|---------|---------|
| 1 | CSS Reset | Normalises browser defaults across Chrome, Firefox, Safari and Edge |
| 2 | CSS Custom Properties | Colour palette, font scale, spacing scale, shadow, radius and transition variables |
| 3 | Google Fonts Import | Playfair Display and Lato via `@import` |
| 4 | Base / Global Styles | Body, headings, paragraphs, links, focus states, hr |
| 5 | Layout Utilities | `.container`, `.section-pad`, `.section-heading`, `.sr-only` |
| 6 | Button Styles | `.btn-primary`, `.btn-secondary`, `.btn-outline` |
| 7 | Header and Navigation | Sticky header, logo, hamburger button, animated nav underlines |
| 8 | Page Banner | Inner-page heading banner with gradient background |
| 9 | Hero Section | Full-height hero with background image, dark overlay, CTA buttons |
| 10 | Features Section | 4-column CSS Grid card layout |
| 11 | Popular Products Section | 3-column CSS Grid card layout with image hover zoom |
| 12 | Testimonials Section | Flexbox blockquote row with glassmorphism-style cards |
| 13 | CTA Section | Gradient background banner |
| 14 | Footer | 4-column CSS Grid with `.footer-bottom` spanning all columns |
| 15 | About Page | Story 2-col grid, mission-vision 3-col grid, team 4-col grid, milestones timeline |
| 16 | Products Page | Category headings, 3-column product card grids |
| 17 | Enquiry Page | 2-column layout: form + sidebar |
| 18 | Form Styles | All input types, focus states, error/success messages, custom select arrow |
| 19 | Contact Page | Location cards, map container, social links, sidebar |
| 20 | Pseudo-class States | `:active`, `:visited`, `:focus-within` across interactive elements |
| 21 | Responsive Breakpoints | 1024px tablet, 768px small tablet, 480px mobile |
| 22 | Print Styles | Hides nav/hero/footer, clean text for printing |

### Colour Palette

| Variable | Hex | Usage |
|----------|-----|-------|
| `--colour-primary` | `#8B4513` | Saddle brown — main buttons, headings, accents |
| `--colour-secondary` | `#D4A96A` | Warm golden wheat — decorative lines, card borders |
| `--colour-accent` | `#E8C589` | Pale gold — icon backgrounds, hover accents |
| `--colour-cream` | `#FBF5EC` | Off-white — main page background |
| `--colour-text-dark` | `#2C1810` | Near-black — headings and bold text |
| `--colour-text-mid` | `#5A3E32` | Medium brown — body copy |

### Typography

| Font | Usage | Weight |
|------|-------|--------|
| Playfair Display | All headings (H1–H6) | 400, 600, 700 |
| Lato | Body text, nav, buttons, forms | 300, 400, 700 |

### Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Desktop | > 1024px | Full layout: 4-col features, 3-col products, 4-col team, 4-col footer |
| Tablet | ≤ 1024px | 2-col features, 2-col products, 2-col team, 2-col footer, single-col enquiry |
| Small Tablet | ≤ 768px | Single-col features/products, hamburger nav, vertical footer |
| Mobile | ≤ 480px | Full-width buttons, 1-col team, smaller font sizes |

---

## Project Timeline

| Part | Target Date | Status |
|------|-------------|--------|
| Part 1 – HTML Foundation | 19 February 2026 | ✅ Complete (with Part 2 fixes) |
| Part 2 – CSS Styling | March 2026 | ✅ Complete |
| Part 3 – JavaScript and SEO | April 2026 | Not started yet |

---

## Changelog

| Date | Version | Changes Made |
|------|---------|--------------|
| 2026-02-10 | v0.1 | Created project folder. Made the css, js and images subfolders. Created empty style.css and main.js files. Set up GitHub repository. |
| 2026-02-12 | v0.2 | Created index.html. Added header with logo and nav, hero section, features section with 4 article cards, products preview with 3 cards, and footer. |
| 2026-02-13 | v0.3 | Added testimonials section and CTA section to index.html. Added alt text to all images on the homepage. |
| 2026-02-14 | v0.4 | Created about.html. Added page banner, our story section, mission and vision section with 3 article cards, team section with 4 profiles. |
| 2026-02-15 | v0.5 | Added milestones section to about.html using an ordered list. All team images have descriptive alt text. |
| 2026-02-16 | v0.6 | Created products.html. Organised into 3 sections (Breads, Pastries, Cakes). Added 9 product cards total with images, descriptions, lists and links. |
| 2026-02-17 | v0.7 | Created enquiry.html. Added form with two fieldsets. Used all required input types: text, email, tel, number, date, select, radio, checkbox, textarea. Added sidebar with pricing info. |
| 2026-02-18 | v0.8 | Created contact.html. Added two location cards using the address element. Added map placeholder div. Added contact form with fieldsets. Added sidebar with social links. |
| 2026-02-19 | v0.9 | Tested all navigation links across all 5 pages. Fixed heading hierarchy on products page. Added more comments to all HTML files. Checked all images have alt text. |
| **Part 2 – Feedback Fixes Applied** | | |
| 2026-03-01 | v1.0 | **FEEDBACK FIX**: Added active class to nav link of current page on all 5 HTML files so the current page is visually indicated in the navigation. |
| 2026-03-01 | v1.0 | **FEEDBACK FIX**: Added `.features-grid`, `.products-grid`, `.testimonials-grid`, `.mission-grid`, `.team-grid` wrapper divs inside the relevant sections on index.html and about.html to enable CSS Grid and Flexbox layouts. Without these wrappers the CSS Grid could not be applied. |
| 2026-03-01 | v1.0 | **FEEDBACK FIX**: Added `<script src="js/main.js"></script>` tag before `</body>` on all 5 pages. This was missing in Part 1 meaning the JS file was never loaded. |
| 2026-03-01 | v1.0 | **FEEDBACK FIX**: Added hamburger nav toggle button (`<button class="nav-toggle">`) to the header on index.html with proper `aria-label` and `aria-expanded` attributes for accessibility. |
| 2026-03-02 | v1.1 | **PART 2**: Created `css/style.css` – complete external stylesheet with 22 sections. Added CSS reset, CSS custom properties for colour palette and typography, Google Fonts import (Playfair Display + Lato), and base styles for body, headings, paragraphs and links. |
| 2026-03-03 | v1.2 | **PART 2**: Styled header and navigation. Header is sticky on desktop using `position: sticky`. Added animated underline on nav links using `::after` pseudo-element with `width` transition. Added active state for current page indicator. |
| 2026-03-04 | v1.3 | **PART 2**: Styled hero section with `position: relative` image, `::after` dark gradient overlay for text readability, and centred hero-text using Flexbox. |
| 2026-03-05 | v1.4 | **PART 2**: Styled features section as 4-column CSS Grid (`grid-template-columns: repeat(4, 1fr)`). Added card hover effect using `transform: translateY(-6px)` and `box-shadow` transition. |
| 2026-03-06 | v1.5 | **PART 2**: Styled popular products section as 3-column CSS Grid. Added image hover zoom using `transform: scale(1.05)` with `overflow: hidden` on the card. Added styled CTA and testimonials sections. |
| 2026-03-07 | v1.6 | **PART 2**: Styled footer as 4-column CSS Grid. The `.footer-bottom` div uses `grid-column: 1 / -1` to span all 4 columns. Styled all footer text, links and the copyright strip. |
| 2026-03-08 | v1.7 | **PART 2**: Styled About Us page. Our Story section uses a 2-column grid. Mission/Vision uses a 3-column grid. Team section uses a 4-column grid with circular team photos using `border-radius: 50%`. Milestones styled as a vertical timeline using `::before` pseudo-elements for the line and circles. |
| 2026-03-09 | v1.8 | **PART 2**: Styled Products page with category headings and 3-column product card grids matching the homepage card style. |
| 2026-03-10 | v1.9 | **PART 2**: Styled all form elements. Applied consistent styling to text inputs, email, tel, date, select, radio, checkbox and textarea. Added custom select dropdown arrow using `background-image` with inline SVG. Added focus state with coloured border and box-shadow glow. |
| 2026-03-11 | v2.0 | **PART 2**: Styled enquiry and contact pages as 2-column grid layout (form + sidebar). Styled sidebar cards with decorative top border. Styled location cards on contact page with `border-top: 4px solid var(--colour-primary)`. Styled map placeholder container. |
| 2026-03-12 | v2.1 | **PART 2**: Added pseudo-class styles. Applied `:hover` across all cards, buttons and links. Applied `:focus-visible` for keyboard accessibility. Applied `:focus-within` on product cards. Applied `:active` press-down effect on buttons. Applied `:visited` colour on in-text links. |
| 2026-03-13 | v2.2 | **PART 2**: Added responsive media query for tablet (max-width: 1024px). Changed 4-column features to 2-column, 3-column products to 2-column, 4-column team to 2-column, 4-column footer to 2-column. Collapsed enquiry/contact to single column. |
| 2026-03-14 | v2.3 | **PART 2**: Added responsive media query for small tablet/large mobile (max-width: 768px). All multi-column grids collapse to single column. Navigation becomes a vertical dropdown toggled by the hamburger button. Header loses sticky positioning to save screen space. Font size variables are reduced. |
| 2026-03-15 | v2.4 | **PART 2**: Added responsive media query for mobile phones (max-width: 480px). Reduced font sizes further. Hero CTA buttons stack vertically and take full width. Form submit button is full width. Team grid collapses to single column. Logo text size reduced. |
| 2026-03-15 | v2.4 | **PART 2**: Added print stylesheet section to hide nav, hero, footer and map on print. Added `js/main.js` hamburger menu toggle JavaScript. Updated README with Part 2 details, colour palette table, typography table and responsive breakpoints table. |

---

## References

Duckett, J. 2011. *HTML and CSS: design and build websites*. Indianapolis: John Wiley and Sons.

Duckett, J. 2014. *JavaScript and jQuery: interactive front-end web development*. Indianapolis: John Wiley and Sons.

Google Fonts. 2024. *Playfair Display*. [Online]. Available at: https://fonts.google.com/specimen/Playfair+Display [Accessed 1 March 2026].

Google Fonts. 2024. *Lato*. [Online]. Available at: https://fonts.google.com/specimen/Lato [Accessed 1 March 2026].

Mozilla Developer Network. 2024. *HTML elements reference*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element [Accessed 5 February 2026].

Mozilla Developer Network. 2024. *CSS custom properties (variables)*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties [Accessed 2 March 2026].

Mozilla Developer Network. 2024. *CSS Grid Layout*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout [Accessed 4 March 2026].

Mozilla Developer Network. 2024. *Flexbox*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox [Accessed 4 March 2026].

Mozilla Developer Network. 2024. *Using media queries*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 10 March 2026].

Mozilla Developer Network. 2024. *HTML forms guide*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms [Accessed 9 February 2026].

Mozilla Developer Network. 2024. *Pseudo-classes*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes [Accessed 11 March 2026].

W3Schools. 2024. *CSS Grid*. [Online]. Available at: https://www.w3schools.com/css/css_grid.asp [Accessed 5 March 2026].

W3Schools. 2024. *CSS Flexbox*. [Online]. Available at: https://www.w3schools.com/css/css3_flexbox.asp [Accessed 4 March 2026].

W3Schools. 2024. *CSS Responsive Web Design*. [Online]. Available at: https://www.w3schools.com/css/css_rwd_mediaqueries.asp [Accessed 12 March 2026].

W3Schools. 2024. *HTML form elements*. [Online]. Available at: https://www.w3schools.com/html/html_form_elements.asp [Accessed 9 February 2026].

W3Schools. 2024. *HTML semantic elements*. [Online]. Available at: https://www.w3schools.com/html/html5_semantic_elements.asp [Accessed 6 February 2026].

Unsplash. 2024. *Free high-resolution photos*. [Online]. Available at: https://unsplash.com [Accessed 8 February 2026].

CSS-Tricks. 2024. *A complete guide to CSS Grid*. [Online]. Available at: https://css-tricks.com/snippets/css/complete-guide-grid/ [Accessed 5 March 2026].

CSS-Tricks. 2024. *A complete guide to Flexbox*. [Online]. Available at: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ [Accessed 4 March 2026].


