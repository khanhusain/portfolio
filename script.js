// Split the hero name into single letters so each one can be animated
const title = document.querySelector('.hero-name');
const text = title.textContent;

// Screen readers should still read the whole name as one piece
title.setAttribute('aria-label', text);
title.textContent = '';

[...text].forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.setProperty('--i', i);
  span.setAttribute('aria-hidden', 'true');
  title.appendChild(span);
});