// Initialize EmailJS (Optional)
(function () {
  emailjs.init("VTravprD8X1ELze4f"); // Replace with your EmailJS user ID
})();

// Navbar Toggle for Mobile
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    navMenu.classList.remove("show");
  });
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Contact Form Submission (Optional)
document.getElementById("contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const formMessage = document.getElementById("form-message");
  const sendButton = document.getElementById("send-button");

  sendButton.disabled = true;
  sendButton.textContent = "Sending...";

  emailjs
    .sendForm("service_rjn2m59", "template_wtrdtmd", "#contact-form") // Replace with your service/template IDs
    .then(
      function () {
        formMessage.style.color = "green";
        formMessage.textContent = "✅ Message sent successfully!";
        document.getElementById("contact-form").reset();
        sendButton.disabled = false;
        sendButton.textContent = "Send Message";
      },
      function () {
        formMessage.style.color = "red";
        formMessage.textContent = "❌ Failed to send message. Please try again later.";
        sendButton.disabled = false;
        sendButton.textContent = "Send Message";
      }
    );
});