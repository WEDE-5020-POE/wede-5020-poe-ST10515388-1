# Sweet Crumbs Bakery – Website Project

**Module:** WEDE5020 - Web Development (Introduction)  
**Student Name:** Lesego Siziba  
**Student Number:** ST10515388  
**Campus:** Rosebank International College (IIE)  
**Submission:** Part 3 – JavaScript Enhancements, SEO and Deployment  
**Part 3 Submission Date:** June 2026  

---

## Project Overview

This is the Part 3 submission for the WEDE5020 website project. The site is built for **Sweet Crumbs Bakery**, a small artisan bakery based in Melville, Johannesburg, selling handmade sourdough breads, pastries and custom celebration cakes from two locations: Melville and Sandton City.

Part 3 builds on the HTML and CSS foundation from Parts 1 and 2 by adding full JavaScript interactivity, client-side form validation, interactive Leaflet.js maps, a lightbox gallery, a product search feature, dynamic content loading, scroll-triggered animations, and comprehensive on-page and technical SEO.

---

## Deployed Website

**Live URL:** https://sweet-crumbs-st10515388.netlify.app  
**GitHub Repository:** https://github.com/WEDE-5020-POE/wede-5020-poe-ST10515388-1

---

## Website Goals and Objectives

- Give the bakery a professional online presence so new customers can find them
- Display all products clearly with descriptions and prices
- Allow customers to send a custom order enquiry with an instant price estimate
- Allow customers to send a general message that opens in their email client
- Show both store locations on interactive maps
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

### Part 2 (CSS Styling)
- External stylesheet (`css/style.css`) with 22 sections
- CSS Custom Properties for colours, typography and spacing
- Google Fonts: Playfair Display and Lato
- CSS Grid and Flexbox layouts throughout
- Pseudo-classes: `:hover`, `:focus`, `:focus-visible`, `:active`, `:visited`, `:focus-within`
- Responsive design with breakpoints at 1024px, 768px and 480px
- Hamburger toggle navigation for mobile
- Print stylesheet

### Part 3 (JavaScript and SEO – this submission)

#### JavaScript Interactive Elements
- **Accordion** on `products.html`: product category headings expand/collapse with animated chevron
- **Tab switcher** on `contact.html`: click to toggle between Melville and Sandton City Leaflet maps
- **Lightbox gallery** on `products.html`: click any product image to open it full-screen with prev/next arrows and keyboard (Escape) close
- **Scroll-triggered animations**: feature cards, product cards, team members and testimonials fade up into view using `IntersectionObserver`
- **CSS transitions**: hover lift on all cards, button press animation, nav underline slide

#### Interactive Maps
- **Leaflet.js** maps on `contact.html`: two fully interactive maps (zoom, pan, marker popups) showing both bakery locations
- Map tab buttons switch between Melville (lat -26.1752, lng 27.9784) and Sandton City (lat -26.1069, lng 28.0527)
- Uses OpenStreetMap tiles (free, no API key required)

#### Dynamic Content
- **Product search/filter** on `products.html`: real-time text filtering across all product cards as the user types; shows "no results" message if nothing matches
- **Load More button** on `products.html`: dynamically injects 3 additional product cards into the DOM without a page reload

#### Form Validation – Enquiry Form (`enquiry.html`)
- Live validation on `blur` for every field: shows inline error messages below invalid fields, green border on valid fields
- Validates: required fields, email format (regex), SA mobile number format (`^0[6-8][0-9]{8}$`), date minimum (72 hours for cakes, 48 hours for GF, 1 day standard), quantity minimum 1, textarea minimum 20 characters
- Radio group (delivery preference) validated separately with a group-level error message
- On successful submit: form hides and a price estimate response card appears showing the estimated cost based on product category × quantity

#### Form Functionality – Enquiry Process Response
- After validation passes, JS calculates an estimated price (unit price × quantity) per product category
- Response card shows customer name, product, quantity, estimated total, and a note that the final quote is confirmed within 24 hours
- Corporate and "Other" categories show "Price on application"

#### Form Validation – Contact Form (`contact.html`)
- Same live blur validation on all fields: name (min 2 chars), email (regex), phone (optional SA format), message type (required select), message (min 10 chars, max 1500 chars)
- On successful submit: JS compiles a `mailto:` link with subject line and full message body, and opens the user's email client
- Confirmation message shown after 800ms to inform the user to click Send in their email client

#### SEO
- **Title tags**: unique, keyword-optimised title on every page
- **Meta descriptions**: unique, compelling description on every page
- **Meta keywords**: relevant keywords per page
- **Robots meta tag**: `index, follow` on all pages
- **Canonical URLs**: `<link rel="canonical">` on all pages
- **Open Graph tags**: `og:title`, `og:description`, `og:type`, `og:url`, `og:image` on `index.html`
- **Twitter Card**: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` on `index.html`
- **Heading structure**: H1 once per page, logical H2/H3 hierarchy maintained
- **Image alt text**: all images have descriptive, keyword-relevant alt text
- **Internal linking**: products page links to specific accordion sections via anchor (`#section-breads`)
- **Breadcrumb navigation**: visible breadcrumb trail on all inner pages
- **robots.txt**: created at root level, instructs crawlers, references sitemap
- **sitemap.xml**: XML sitemap listing all 5 pages with `lastmod`, `changefreq` and `priority`
- **Structured data (JSON-LD)**: `WebSite` + `Bakery` (`LocalBusiness`) on `index.html`; `BreadcrumbList` on all inner pages; `LocalBusiness` on `contact.html`
- **Mobile-friendly**: full responsive design from Parts 1 and 2 maintained
- **Clean URLs**: all files use descriptive, lowercase filenames

---

## File and Folder Structure

```
sweet-crumbs-bakery/
├── index.html          Homepage (Part 3: structured data, OG tags, animations)
├── about.html          About Us page (Part 3: breadcrumb, canonical, animations)
├── products.html       Products page (Part 3: accordion, search, lightbox, load more)
├── enquiry.html        Enquiry form (Part 3: JS validation, price estimate response)
├── contact.html        Contact page (Part 3: Leaflet maps, tabs, JS form + mailto)
├── robots.txt          SEO: instructs crawlers (Part 3)
├── sitemap.xml         SEO: XML sitemap for all 5 pages (Part 3)
├── README.md           This file
├── css/
│   ├── style.css       External stylesheet (Part 2 - complete, 22 sections)
│   └── part3.css       Part 3 additional styles (lightbox, accordion, tabs, etc.)
├── js/
│   └── main.js         JavaScript (Part 3: all interactive features + form validation)
└── images/
    ├── logo.png
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
    ├── team-james.jpg
    ├── icon-fresh.png
    ├── icon-cake.png
    ├── icon-delivery.png
    └── icon-leaf.png
```

---

## Sitemap

```
Sweet Crumbs Bakery Website
│
├── index.html       Homepage (hero, features, products, testimonials, CTA)
├── about.html       About Us (story, mission/vision, team, milestones)
├── products.html    Products (accordion categories, search, lightbox gallery, load more)
├── enquiry.html     Enquiry Form (validation, price estimate response)
└── contact.html     Contact Form + Leaflet maps (tab-switched) + Two locations
```

---

## JavaScript Architecture (Part 3 Details)

The `js/main.js` file contains 11 numbered sections, all wrapped in a `DOMContentLoaded` listener:

| # | Section | Purpose |
|---|---------|---------|
| 1 | Mobile Navigation Toggle | Hamburger menu open/close with aria-expanded |
| 2 | Smooth Scroll | Animate scroll for in-page anchor links |
| 3 | Accordion | Products page category expand/collapse with animated chevron |
| 4 | Tabs | Contact page map tab switching |
| 5 | Leaflet Maps | Initialise two interactive OpenStreetMap maps with markers and popups |
| 6 | Lightbox Gallery | Full-screen image viewer with prev/next arrows and Escape close |
| 7 | Product Search | Real-time text filter across all .product-card elements |
| 8 | Enquiry Form Validation | Live blur validation + price estimate response on submit |
| 9 | Contact Form Validation | Live blur validation + mailto compilation on submit |
| 10 | Scroll Animations | IntersectionObserver fade-up on cards and testimonials |
| 11 | Load More | Dynamic injection of additional product cards on button click |

---

## SEO Architecture (Part 3 Details)

| SEO Element | Implementation |
|-------------|----------------|
| Title tags | Unique per page, primary keyword first, under 60 characters |
| Meta descriptions | Unique per page, action-oriented, under 160 characters |
| Meta keywords | 6-8 relevant keywords per page |
| Robots meta | `index, follow` on all pages |
| Canonical URLs | `<link rel="canonical">` on all 5 pages |
| Open Graph | Title, description, type, URL, image on index.html |
| Twitter Card | `summary_large_image` on index.html |
| Structured data | WebSite, Bakery/LocalBusiness, BreadcrumbList (JSON-LD) |
| H1 per page | Exactly one H1, keyword-relevant, on every page |
| Image alt text | Descriptive, keyword-aware alt on every img tag |
| Internal links | Products accordion sections linked with anchor IDs |
| Breadcrumb nav | Visible HTML breadcrumb on all inner pages |
| robots.txt | Root level, allows all, references sitemap |
| sitemap.xml | XML sitemap listing all 5 pages with metadata |
| Mobile-friendly | Responsive design from Part 2 maintained |
| Clean URLs | Lowercase, descriptive filenames throughout |

---

## Project Timeline

| Part | Target Date | Status |
|------|-------------|--------|
| Part 1 – HTML Foundation | 19 February 2026 | ✅ Complete |
| Part 2 – CSS Styling | March 2026 | ✅ Complete |
| Part 3 – JavaScript and SEO | April 2026 | ✅ Complete |

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
| 2026-03-01 | v1.0 | **FEEDBACK FIX**: Added hamburger nav toggle button (`<button class="nav-toggle">`) to the header on all pages with proper `aria-label` and `aria-expanded` attributes for accessibility. |
| 2026-03-02 | v1.1 | **PART 2**: Created `css/style.css` – complete external stylesheet with 22 sections. Added CSS reset, CSS custom properties, Google Fonts import, and base styles. |
| 2026-03-03 | v1.2 | **PART 2**: Styled header and navigation with sticky position and animated underline on nav links. |
| 2026-03-04 | v1.3 | **PART 2**: Styled hero section with overlay, centred flex layout and CTA buttons. |
| 2026-03-05 | v1.4 | **PART 2**: Styled features section as 4-column CSS Grid with card hover effects. |
| 2026-03-06 | v1.5 | **PART 2**: Styled popular products section as 3-column CSS Grid with image hover zoom. Styled CTA and testimonials. |
| 2026-03-07 | v1.6 | **PART 2**: Styled footer as 4-column CSS Grid. `.footer-bottom` spans all 4 columns. |
| 2026-03-08 | v1.7 | **PART 2**: Styled About page: story 2-col, mission/vision 3-col, team 4-col, milestones timeline. |
| 2026-03-09 | v1.8 | **PART 2**: Styled Products page with category headings and 3-column product card grids. |
| 2026-03-10 | v1.9 | **PART 2**: Styled all form elements including custom select arrow and focus states. |
| 2026-03-11 | v2.0 | **PART 2**: Styled enquiry and contact pages as 2-column grid layout. Styled sidebar cards and location cards. |
| 2026-03-12 | v2.1 | **PART 2**: Added pseudo-class styles: `:hover`, `:focus-visible`, `:focus-within`, `:active`, `:visited`. |
| 2026-03-13 | v2.2 | **PART 2**: Added tablet responsive breakpoint (max-width: 1024px). |
| 2026-03-14 | v2.3 | **PART 2**: Added small tablet/mobile breakpoint (max-width: 768px). Hamburger nav. |
| 2026-03-15 | v2.4 | **PART 2**: Added mobile breakpoint (max-width: 480px). Added print styles. Updated README Part 2 section. |
| **Part 3 – JavaScript and SEO** | | |
| 2026-04-01 | v3.0 | **PART 3**: Created `css/part3.css` with all new visual components for Part 3: scroll-animation classes (`.pre-animate`, `.fade-in-up`), breadcrumb styles, accordion styles with animated chevron icon, tab styles for map switcher, lightbox overlay with prev/next arrows, product search bar, load more button, form validation error and success states (`.field-error`, `.field-success`, `.error-msg`), enquiry price response card, and locations grid for contact page. |
| 2026-04-02 | v3.1 | **PART 3**: Rewrote `js/main.js` with 11 sections covering all Part 3 JavaScript features. Retained hamburger toggle (Section 1) and smooth scroll (Section 2) from Part 2. Added all new sections 3–11 for accordion, tabs, Leaflet maps, lightbox, product search, enquiry form validation, contact form validation, IntersectionObserver animations, and dynamic load more. Added `escapeHtml()` utility function to prevent XSS in dynamically injected content. |
| 2026-04-03 | v3.2 | **PART 3**: Updated `products.html` with accordion wrapper buttons around each product category, `class="lightbox-trigger"` and `data-caption` attributes on all product images, product search section with search input at the top, `#extraProductsContainer` div and `#loadMoreBtn` for dynamic loading, lightbox overlay HTML at the bottom of the body, Leaflet CSS and JS not required on this page, `part3.css` link added to head. |
| 2026-04-04 | v3.3 | **PART 3**: Updated `contact.html` with Leaflet CSS and JS CDN links, two map `<div>` elements (`#mapMelville`, `#mapSandton`), tab button markup with `role="tab"`, `aria-selected`, and `data-tab` attributes, tab panel divs with `role="tabpanel"` and `aria-hidden`, locations-grid layout for the two store location cards, `novalidate` on contact form so JS validation controls all error display, `required-star` spans on required labels, `part3.css` link added to head. |
| 2026-04-05 | v3.4 | **PART 3**: Updated `enquiry.html` with `novalidate` on form so JS controls all error display, `required-star` spans on required labels, updated product category `<option>` text to include price hints, `role="group"` and `aria-label` on radio and checkbox groups, `part3.css` link added to head. |
| 2026-04-06 | v3.5 | **PART 3**: Updated `index.html` with full SEO package: `robots` meta tag, `og:*` Open Graph tags, Twitter Card meta tags, canonical URL, `WebSite` and `Bakery` JSON-LD structured data blocks, updated product card links to use anchor IDs on products page, `part3.css` link added to head. |
| 2026-04-07 | v3.6 | **PART 3**: Added breadcrumb `<nav>` with `aria-label="Breadcrumb"` and `<ol>` list to `products.html`, `enquiry.html`, and `contact.html`. Added `aria-current="page"` to active nav links across all 5 pages for screen reader accessibility. |
| 2026-04-07 | v3.6 | **PART 3**: Added `BreadcrumbList` JSON-LD structured data to `products.html`, `enquiry.html`, and `contact.html`. Added `LocalBusiness` JSON-LD structured data to `contact.html` referencing both store addresses. |
| 2026-04-08 | v3.7 | **PART 3 SEO**: Created `robots.txt` at project root. File includes `User-agent: *`, `Allow: /`, blocks `/admin/` and `/private/`, and references `sitemap.xml`. This instructs all search engine crawlers to index the entire site while protecting any future private directories. |
| 2026-04-08 | v3.7 | **PART 3 SEO**: Created `sitemap.xml` at project root. XML sitemap lists all 5 pages with `<loc>`, `<lastmod>`, `<changefreq>` and `<priority>` values. Homepage set to priority 1.0 weekly, products and enquiry set to 0.9 and 0.8. To be submitted to Google Search Console after deployment. |
| 2026-04-09 | v3.8 | **PART 3**: Deployed website to Netlify. All 5 pages load without errors. Verified Leaflet maps render correctly on the live URL. Verified lightbox, accordion, search and form submission all function correctly on the deployed site. |
| 2026-04-09 | v3.8 | **PART 3**: Updated README.md with full Part 3 details section, updated file structure, updated sitemap, JavaScript architecture table, SEO architecture table, full Part 3 changelog entries, and updated references list. |

---

## References

Duckett, J. 2011. *HTML and CSS: design and build websites*. Indianapolis: John Wiley and Sons.

Duckett, J. 2014. *JavaScript and jQuery: interactive front-end web development*. Indianapolis: John Wiley and Sons.

Google Fonts. 2024. *Playfair Display*. [Online]. Available at: https://fonts.google.com/specimen/Playfair+Display [Accessed 1 March 2026].

Google Fonts. 2024. *Lato*. [Online]. Available at: https://fonts.google.com/specimen/Lato [Accessed 1 March 2026].

Leaflet. 2024. *Leaflet.js - an open-source JavaScript library for mobile-friendly interactive maps*. [Online]. Available at: https://leafletjs.com [Accessed 1 April 2026].

Leaflet. 2024. *Leaflet Quick Start Guide*. [Online]. Available at: https://leafletjs.com/examples/quick-start/ [Accessed 1 April 2026].

Mozilla Developer Network. 2024. *HTML elements reference*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element [Accessed 5 February 2026].

Mozilla Developer Network. 2024. *CSS custom properties (variables)*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties [Accessed 2 March 2026].

Mozilla Developer Network. 2024. *CSS Grid Layout*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout [Accessed 4 March 2026].

Mozilla Developer Network. 2024. *Flexbox*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox [Accessed 4 March 2026].

Mozilla Developer Network. 2024. *Using media queries*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 10 March 2026].

Mozilla Developer Network. 2024. *HTML forms guide*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms [Accessed 9 February 2026].

Mozilla Developer Network. 2024. *Pseudo-classes*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes [Accessed 11 March 2026].

Mozilla Developer Network. 2024. *Intersection Observer API*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API [Accessed 3 April 2026].

Mozilla Developer Network. 2024. *Window: location property*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/location [Accessed 5 April 2026].

Mozilla Developer Network. 2024. *ARIA: tab role*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role [Accessed 4 April 2026].

OpenStreetMap. 2024. *OpenStreetMap*. [Online]. Available at: https://www.openstreetmap.org [Accessed 1 April 2026].

Schema.org. 2024. *Bakery*. [Online]. Available at: https://schema.org/Bakery [Accessed 6 April 2026].

Schema.org. 2024. *BreadcrumbList*. [Online]. Available at: https://schema.org/BreadcrumbList [Accessed 6 April 2026].

W3Schools. 2024. *CSS Grid*. [Online]. Available at: https://www.w3schools.com/css/css_grid.asp [Accessed 5 March 2026].

W3Schools. 2024. *CSS Flexbox*. [Online]. Available at: https://www.w3schools.com/css/css3_flexbox.asp [Accessed 4 March 2026].

W3Schools. 2024. *HTML form elements*. [Online]. Available at: https://www.w3schools.com/html/html_form_elements.asp [Accessed 9 February 2026].

W3Schools. 2024. *JavaScript Form Validation*. [Online]. Available at: https://www.w3schools.com/js/js_validation.asp [Accessed 2 April 2026].

W3Schools. 2024. *HTML semantic elements*. [Online]. Available at: https://www.w3schools.com/html/html5_semantic_elements.asp [Accessed 6 February 2026].

Google. 2024. *Introduction to structured data markup in Google Search*. [Online]. Available at: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data [Accessed 6 April 2026].

Google. 2024. *Sitemaps*. [Online]. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview [Accessed 7 April 2026].

Sitemaps.org. 2024. *XML Sitemap Protocol*. [Online]. Available at: https://www.sitemaps.org/protocol.html [Accessed 7 April 2026].

Unsplash. 2024. *Free high-resolution photos*. [Online]. Available at: https://unsplash.com [Accessed 8 February 2026].

CSS-Tricks. 2024. *A complete guide to CSS Grid*. [Online]. Available at: https://css-tricks.com/snippets/css/complete-guide-grid/ [Accessed 5 March 2026].

CSS-Tricks. 2024. *A complete guide to Flexbox*. [Online]. Available at: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ [Accessed 4 March 2026].

Netlify. 2024. *Get started with Netlify*. [Online]. Available at: https://docs.netlify.com [Accessed 9 April 2026].
