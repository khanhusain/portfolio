const title = document.querySelector('.hero-name');
const text = title.textContent;

title.setAttribute('aria-label', text);
title.textContent = '';

[...text].forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.setProperty('--i', i);
  span.setAttribute('aria-hidden', 'true');
  title.appendChild(span);
});

const grid = document.getElementById('projects-grid');

if (projects.length === 0) {
  grid.innerHTML = '<p class="projects-empty">Projects will appear here soon.</p>';
}

projects.forEach((project, index) => {
  const media = project.image
    ? `<img src="${project.image}" alt="${project.title} screenshot">`
    : `<div class="project-placeholder">${project.title.charAt(0)}</div>`;

  const tags = project.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join('');

  const links = [];
  if (project.github) {
    links.push(`<a class="btn btn-small" href="${project.github}" target="_blank" rel="noopener">GitHub</a>`);
  }
  if (project.demo) {
    links.push(`<a class="btn btn-small" href="${project.demo}" target="_blank" rel="noopener">Live Demo</a>`);
  }

  const item = document.createElement('div');
  item.className = 'project-item reveal';
  item.style.transitionDelay = `${(index % 3) * 0.12}s`;

  item.innerHTML = `
    <article class="project-card">
      <div class="project-media">${media}</div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${tags}</div>
        <div class="project-links">${links.join('')}</div>
      </div>
    </article>
  `;

  grid.appendChild(item);
});

const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealItems.forEach((item) => observer.observe(item));

const track = document.querySelector('.skills-track');
const group = track.querySelector('.skills-group');
const copies = Math.ceil(window.screen.width / group.scrollWidth) + 1;

for (let i = 1; i < copies; i++) {
  const copy = group.cloneNode(true);
  copy.setAttribute('aria-hidden', 'true');
  track.appendChild(copy);
}

track.style.setProperty('--n', copies);

const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');
const myEmail = 'hk3022489@gmail.com';

function showNote(message, type) {
  note.textContent = message;
  note.className = `form-note ${type}`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (!name || !email || !message) {
    showNote('Please fill in all three fields.', 'error');
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);

  window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
  showNote(`Opening your email app. If nothing opens, write to ${myEmail}.`, 'success');
});

document.getElementById('year').textContent = new Date().getFullYear();