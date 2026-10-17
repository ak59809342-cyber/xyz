const loginForm = document.querySelector(".login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = loginForm.querySelector("button");
    if (button) {
      const originalText = button.textContent;
      button.textContent = "Logging in...";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1200);
    }
  });
}