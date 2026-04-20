# Sweet Crumbs Bakery - Website Project

**Module:** WEDE5020 - Web Development (Introduction)
**Student Name:** Lesego Siziba
**Student Number:** ST10515388
**Campus:** Varsity College Johannesburg
**Part:** Part 1 - Building the Foundation
**Submission Date:** 19 February 2026

---

## Project Overview

This is my Part 1 submission for the WEDE5020 website project. I chose to build a website for Sweet Crumbs Bakery, a small artisan bakery based in Melville, Johannesburg. The bakery sells handmade sourdough breads, pastries and custom celebration cakes from two locations - one in Melville and one at Sandton City shopping centre.

For Part 1 I focused on setting up the complete HTML structure and adding all the content to the 5 pages. The CSS styling will be done in Part 2 and the JavaScript will be added in Part 3.

---

## Website Goals and Objectives

- Give the bakery a professional online presence so new customers can find them
- Show all products clearly with descriptions and prices
- Allow customers to send a custom order enquiry through a form
- Show both store locations and allow customers to get in contact
- Make the site easy to navigate on any device (responsive design coming in Part 2)
- Help the bakery appear in Google search results for Johannesburg bakeries

---

## Sitemap

```
Sweet Crumbs Bakery Website
|
|-- index.html       Homepage (hero, features, products, testimonials, CTA)
|-- about.html       About Us (story, mission/vision, team, milestones)
|-- products.html    Products (breads, pastries, cakes with descriptions)
|-- enquiry.html     Enquiry Form (custom order enquiries)
|-- contact.html     Contact Form + Two Store Locations + Map placeholder
|
|-- css/
|   |-- style.css    External stylesheet (content added in Part 2)
|
|-- js/
|   |-- main.js      JavaScript file (content added in Part 3)
|
|-- images/
    |-- All product photos, team photos and background images
```

---

## File and Folder Structure

```
sweet-crumbs-bakery/
|-- index.html
|-- about.html
|-- products.html
|-- enquiry.html
|-- contact.html
|-- README.md
|-- css/
|   |-- style.css
|-- js/
|   |-- main.js
|-- images/
    |-- hero-bg.jpg
    |-- sourdough.jpg
    |-- croissant.jpg
    |-- cake.jpg
    |-- ciabatta.jpg
    |-- gf-loaf.jpg
    |-- pain-au-choc.jpg
    |-- danish.jpg
    |-- choc-cake.jpg
    |-- cheesecake.jpg
    |-- bakery-interior.jpg
    |-- team-amara.jpg
    |-- team-sipho.jpg
    |-- team-lerato.jpg
    |-- team-james.jpg
```

---

## Part 1 Details

### HTML Pages Created

I created 5 HTML pages as required by the assignment:

1. **index.html** - The homepage. Has a hero banner section, a features section with 4 cards, a popular products section with 3 product cards, a customer testimonials section, and a call to action section. Header and footer are on all pages.

2. **about.html** - The About Us page. Has the bakery story section with text and an image, a mission and vision section with 3 article cards, a team section with 4 team member profiles, and a milestones section showing the bakery history as a numbered list.

3. **products.html** - The Products page. Has 3 product categories (Breads, Pastries, Cakes) each with 3 product cards. Each card has an image, heading, description, list of details and a link to the enquiry page.

4. **enquiry.html** - The Enquiry page. Has a form with two fieldsets (personal details and order details). The form includes text inputs, email, tel, select dropdowns, number, date, radio buttons, checkboxes and a textarea. A sidebar with pricing and process information is next to the form.

5. **contact.html** - The Contact page. Has two location cards (Melville and Sandton City), a placeholder for the Leaflet.js map that will be added in Part 3, and a contact form with fieldsets for personal info and message. A sidebar with contact details and social media links is next to the form.

### HTML Standards Used

- Semantic HTML5 elements throughout all pages: header, nav, main, section, article, aside, footer, address, blockquote, fieldset, legend
- Correct heading hierarchy on every page (H1 used once per page, then H2, H3 in order)
- Descriptive alt text on all images describing what is in the image
- The nav element with a ul and li list used for navigation on all pages
- The address element used for contact information
- The blockquote element used for customer testimonials
- Required and minlength/maxlength attributes on form inputs
- HTML comments on all pages explaining each section and any important decisions
- Consistent file naming using lowercase and hyphens

### Navigation

The navigation menu is the same on all 5 pages and links to all 5 pages. All links work correctly. The navigation uses a ul with li elements inside a nav element.

### Images

All images have descriptive alt text that explains what is in the image. The alt text includes relevant details like the colour, what is shown and where it is. Images use the loading="lazy" attribute to improve page performance.

---

## Project Timeline

| Part | Target Date | Status |
|------|-------------|--------|
| Part 1 - HTML Foundation | 19 February 2026 | Complete |
| Part 2 - CSS Styling | March 2026 | Not started yet |
| Part 3 - JavaScript and SEO | April 2026 | Not started yet |

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
| 2026-02-19 | v0.9 | Tested all navigation links across all 5 pages - all links work correctly. Fixed heading hierarchy on products page (was using H2 inside an article that already had H2). Added more comments to all HTML files. Checked all images have alt text. |

---

## References

Duckett, J. 2011. *HTML and CSS: design and build websites*. Indianapolis: John Wiley and Sons.

Duckett, J. 2014. *JavaScript and jQuery: interactive front-end web development*. Indianapolis: John Wiley and Sons.

Mozilla Developer Network. 2024. *HTML elements reference*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element [Accessed 5 February 2026].

Mozilla Developer Network. 2024. *HTML forms guide*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms [Accessed 9 February 2026].

W3Schools. 2024. *HTML semantic elements*. [Online]. Available at: https://www.w3schools.com/html/html5_semantic_elements.asp [Accessed 6 February 2026].

W3Schools. 2024. *HTML form elements*. [Online]. Available at: https://www.w3schools.com/html/html_form_elements.asp [Accessed 9 February 2026].

Unsplash. 2024. *Free high-resolution photos*. [Online]. Available at: https://unsplash.com [Accessed 8 February 2026].
