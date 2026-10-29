# Nikhil Narra - Portfolio

A lightweight, accessible portfolio for full-stack software engineer Nikhil Narra.

## Local preview

Serve the repository root with any static HTTP server. For example:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:4173/`.

## Structure

- `index.html` - portfolio homepage
- `blog.html` - writing index
- `blog/dsa-journey.html` - static, search-friendly article page
- `css/portfolio.css` - portfolio homepage stylesheet
- `css/main.css` - blog and article stylesheet
- `javascript/main.js` - navigation and progressive reveal behavior
- `assets/` - profile, resume, logos, and social preview assets
- `robots.txt` and `sitemap.xml` - search discovery files

The site is intentionally buildless and deploys directly through GitHub Pages.

## Content updates

Edit the semantic HTML directly. When adding a public article, add it to `blog.html` and `sitemap.xml`. Keep resume-backed metrics accurate and avoid publishing private contact information.
