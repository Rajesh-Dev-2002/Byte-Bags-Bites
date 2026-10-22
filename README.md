# Byte, Bags & Bites

## Run
npm install
npm run dev        # open the URL shown (http://localhost:5173)
npm run build      # production files go to /dist

## Add a post
Create a file in src/posts, e.g. my-trip-to-japan.md:

---
title: My trip to Japan
date: 2026-11-02
category: travel        # coding | travel | food
place: Tokyo, Japan     # optional
summary: One line shown on the home page.
---
Write the post here using Markdown.

The file name becomes the URL: /post/my-trip-to-japan

## Change site name / categories
Edit src/config.js. New category colour: add --name in src/index.css.

## Deploy
Netlify or Vercel: build command "npm run build", output folder "dist".
For Netlify add public/_redirects with:  /*  /index.html  200

## Your details
Edit the AUTHOR block in src/config.js (name, role, bio, skills, education, links, photo).
It feeds the /about page, the byline under every post, and the footer.
