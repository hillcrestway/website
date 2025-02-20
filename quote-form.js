document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  emailjs.init("VTravprD8X1ELze4f"); // Replace with your EmailJS Public Key

  // Form Submission Handling
  const form = document.getElementById("quoteForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;
      const budget = document.getElementById("budget").value;
      const details = document.getElementById("details").value.trim();

      // Simple validation
      if (!name || !email || !service || !budget || !details) {
        alert("Please fill in all required fields.");
        return;
      }

      // EmailJS template parameters
      const templateParams = {
        user_name: name,
        user_email: email,
        user_phone: phone || "Not provided",
        selected_service: service,
        budget: budget,
        project_details: details,
      };

      // Send email using EmailJS
      emailjs
        .send("service_rjn2m59", "template_svf97kq", templateParams)
        .then(() => {
          alert("Your request has been submitted successfully!");
          form.reset();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again.");
        });
    });
  }
});