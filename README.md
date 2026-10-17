# Husain Khan — Personal Portfolio

A responsive personal portfolio website showcasing my background, technical skills, projects, and areas of interest in software development.

Built with **HTML, CSS, and vanilla JavaScript**, the site focuses on a clean layout, straightforward navigation, and subtle interactive details.

## Features

- **Introduction and About section** — A brief overview of who I am and how I approach software development.
- **Skills showcase** — A horizontally scrolling display of technologies and tools.
- **Projects section** — Project cards generated from a JavaScript data file, with optional GitHub and live-demo links.
- **What I Do** — Sections covering software development, web development, and databases.
- **Contact section** — Contact details and a form that prepares an email using the visitor's default email application.
- **Interactive UI** — Animated hero text, scroll-reveal effects, and responsive styling.

## Tech Stack

- **HTML5** — Page structure and semantic content
- **CSS3** — Layout, responsiveness, and animations
- **JavaScript (ES6+)** — Dynamic project cards and interactive behavior

No build tools or package installation are required.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/khanhusain/portfolio.git
   ```

2. Open the `portfolio` folder.
3. Open `index.html` in your browser.

For local development, you can also serve the folder using a simple local web server or VS Code's Live Server extension.

## Project Structure

```text
portfolio/
├── index.html       # Page content and sections
├── style.css        # Layout, styling, and animations
├── script.js        # UI interactions and project rendering
├── projects.js      # Project-card data
├── hussain.png      # Portfolio image
└── *.svg            # Technology and social icons
```

## Adding Projects

Edit the `projects` array in `projects.js`. Each entry can include a title, description, image, technology tags, GitHub URL, and live-demo URL.

The repository currently contains **sample project entries** that can be replaced with real projects as they are completed.

## Contact

Connect with me on [GitHub](https://github.com/khanhusain) or use the contact section on the website.

## Notes

The contact form opens the visitor's email application using a `mailto:` link; it does not send messages through a backend service.

---

**Created by Husain Khan.**
