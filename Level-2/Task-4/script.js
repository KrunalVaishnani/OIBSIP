document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Check credentials (for demonstration purposes)
  if (username == 'user' && password == 'password') {
    document.getElementById('loginStatus').innerText = 'Login successful!';
    // Here, you can redirect the user to another page or perform other actions upon successful login
  } else {
    document.getElementById('loginStatus').innerText = 'Invalid username or password. Please try again.';
  }
});
