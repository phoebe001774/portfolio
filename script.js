// Smooth scroll button
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView();
}

// Fake form submission (active feature)
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
});