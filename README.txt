Rashika — Portfolio Website
============================

A clean, premium portfolio built with plain HTML, CSS, and JavaScript.

Structure
---------
index.html        Single-page portfolio
css/style.css     Design system + all styles
js/main.js        Scroll reveal + subtle hover interactions

How to run
----------
Just open index.html in your browser. No build step required.
For best results, serve via any local server (e.g. `python3 -m http.server`)
and visit http://localhost:8000

Customization
-------------
- Colors live as CSS variables at the top of css/style.css (:root block).
- Fonts: Instrument Serif (display) + Inter (body) loaded via Google Fonts.
- Add real case study pages by linking each .project block to its own HTML file.
- Replace the gradient .project-media blocks with real cover images:
    <div class="project-media"><img src="..." alt=""></div>
- Update email, LinkedIn, and resume links in index.html.
