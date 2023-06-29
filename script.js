document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate the credentials
  if (username === "admin" && password === "password") {
    document.getElementById("message").textContent = "Login successful!";
    // Redirect to a different page or perform any other desired action
  } else {
    document.getElementById("message").textContent = "Invalid username or password";
  }
});
