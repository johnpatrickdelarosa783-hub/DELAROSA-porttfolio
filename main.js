// Update year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form action
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks for contacting me! I'll reply soon.");
  this.reset();
});
