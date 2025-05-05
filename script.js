// Change background color on button click
document.getElementById("colorBtn").addEventListener("click", function () {
    document.body.classList.toggle("highlight");
  });
  
  // Secret Double Click Action
  document.getElementById("secretBtn").addEventListener("dblclick", function () {
    alert("🎉 You found the secret double-click!");
  });
  
  // Image Slideshow
  const images = [
    "https://images.unsplash.com/photo-1564564295391-7f24f26f568b",
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
  ];
  let currentIndex = 0;
  document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slideshow").src = images[currentIndex];
  });
  
  // Accordion functionality
  document.querySelector(".accordion").addEventListener("click", function () {
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
  
  // Keypress Detection
  document.addEventListener("keypress", function (e) {
    console.log(`You pressed: ${e.key}`);
  });
  
  // Form Validation
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");
  
    if (!email.includes("@")) {
      feedback.textContent = "Invalid email format!";
    } else if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
    } else {
      feedback.textContent = "";
      alert("Form submitted successfully!");
    }
  });
  
  // Real-time Password Feedback
  document.getElementById("password").addEventListener("input", function () {
    const feedback = document.getElementById("feedback");
    feedback.textContent = this.value.length < 8
      ? "Password too short"
      : "";
  });
  