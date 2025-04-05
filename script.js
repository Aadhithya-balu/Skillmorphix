// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const offlineIndicator = document.getElementById('offline-indicator');

// Toggle mobile navigation
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');

  // Change hamburger to X when menu is open
  const bars = hamburger.querySelectorAll('.bar');
  if (hamburger.classList.contains('active')) {
    bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
  } else {
    bars[0].style.transform = 'rotate(0)';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'rotate(0)';
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('active') && 
      e.target !== hamburger && 
      !hamburger.contains(e.target) && 
      e.target !== navLinks && 
      !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    
    const bars = hamburger.querySelectorAll('.bar');
    bars[0].style.transform = 'rotate(0)';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'rotate(0)';
  }
});

// Offline status detection
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Check initial status
updateOnlineStatus();

function updateOnlineStatus() {
  if (navigator.onLine) {
    offlineIndicator.classList.add('hidden');
  } else {
    offlineIndicator.classList.remove('hidden');
  }
}

// Simulate caching content for offline use
function cacheContent() {
  // In a real application, this would use the Cache API or Service Workers
  localStorage.setItem('offlineContent', 'true');
  console.log('Content cached for offline use');
}

// Call on page load to simulate caching
cacheContent();

// Animation for feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Create additional pages with basic structure
function createAdditionalPages() {
  // This function would be used to dynamically create dashboard.html, modules.html, and about.html
  // In a real app, these would be separate HTML files or generated server-side
  console.log('Additional pages would be created here in a full implementation');
}
