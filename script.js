// Mobile nav
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');
hamburger?.addEventListener('click', () => {
  const isOpen = nav.style.display === 'flex';
  nav.style.display = isOpen ? 'none' : 'flex';
});

// Cart counter (mock)
let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartCountEl.textContent = String(cartCount);
    btn.classList.add('pulse');
    setTimeout(()=>btn.classList.remove('pulse'), 400);
  });
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Newsletter (mock submit)
const form = document.getElementById('newsletterForm');
const msg = document.getElementById('formMsg');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if(!email){
    msg.textContent = 'Please enter an email.';
    msg.style.color = '#b00020';
    return;
  }
  msg.textContent = 'Thanks! Cozy ideas on the way.';
  msg.style.color = '#1b5e20';
  form.reset();
});

// Simple blog modal content
const posts = {
  post1: {
    title: '5 Instant Ways to Hygge Your Movie Corner',
    body:
      '1) Warm string lights • 2) A textured throw • 3) One scented candle • 4) A small tray for snacks • 5) Dim your overheads and let the TV glow. ' +
      'Pro tip: pick a single warm accent color (amber, rose, or copper) and repeat it in your pillow, mug, and lights.'
  },
  post2: {
    title: 'Playlists for Every Mood',
    body:
      'Romantic Night: soft indie + piano. Rainy Cozy: lofi beats + mellow jazz. Family Fun: upbeat classics. ' +
      'Make a simple QR card linking to your playlist so guests can scan and play instantly.'
  },
  post3: {
    title: 'Snacks That Feel Like a Hug',
    body:
      'Caramel corn, dark chocolate bark, hot cocoa with marshmallows, or a tea sampler. ' +
      'Serve with a bamboo tray and cloth napkins for that cinema-at-home ritual.'
  }
};

const postModal = document.getElementById('postModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.post;
    modalTitle.textContent = posts[key].title;
    modalBody.textContent = posts[key].body;
    if (typeof postModal.showModal === 'function') postModal.showModal();
  });
});

closeModal?.addEventListener('click', () => postModal.close?.());

// Tiny button animation
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .pulse{transform:scale(0.98); transition:transform .12s ease}
  </style>
`);
