
// Disable right-click
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable certain key combinations
document.addEventListener('keydown', function(e) {
  // F12
  if (e.keyCode === 123) e.preventDefault();
  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault();
  // Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && e.keyCode === 74) e.preventDefault();
  // Ctrl+U
  if (e.ctrlKey && e.keyCode === 85) e.preventDefault();
  // Ctrl+Shift+C
  if (e.ctrlKey && e.shiftKey && e.keyCode === 67) e.preventDefault();
});

// Detect DevTools opening (simple method)
let devtoolsOpen = false;
setInterval(() => {
  const widthThreshold = window.outerWidth - window.innerWidth > 160;
  const heightThreshold = window.outerHeight - window.innerHeight > 160;
  if (widthThreshold || heightThreshold) {
    if (!devtoolsOpen) {
      devtoolsOpen = true;
      alert('Please close developer tools!'); // or redirect
    }
  } else {
    devtoolsOpen = false;
  }
}, 1000);

// Active link highlighting
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let hash = window.location.hash;

    if (!hash) {
      hash = "#home";
    }

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      }
    });
  }

  // Page load par
  window.addEventListener("load", setActiveLink);

  // Hash change par
  window.addEventListener("hashchange", setActiveLink);

  // Click par
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });