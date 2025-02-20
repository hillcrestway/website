// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Navbar Toggle for Mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Smooth Scrolling
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust offset for fixed header
          behavior: "smooth",
        });
      }
    });
  });

  // Form Validation
  const form = document.getElementById("quoteForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const service = document.getElementById("service");
      const budget = document.getElementById("budget");
      const details = document.getElementById("details");

      // Simple validation
      if (!name.value.trim()) {
        alert("Please enter your name.");
        name.focus();
        return;
      }

      if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
      }

      if (!service.value) {
        alert("Please select a service.");
        service.focus();
        return;
      }

      if (!budget.value) {
        alert("Please select a budget.");
        budget.focus();
        return;
      }

      if (!details.value.trim()) {
        alert("Please provide details about your project.");
        details.focus();
        return;
      }

      // If all fields are valid, submit the form
      alert("Your request has been submitted successfully!");
      form.reset();
    });
  }

  // Close mobile nav on link click
  const navItems = document.querySelectorAll(".nav-links li a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });
});