let users = {};  // Store users in memory (use a database in production)
let userData = {};  // Store user-specific data

// Register function
function register() {
    let username = document.getElementById('new-username').value;
    let password = document.getElementById('new-password').value;

    if (users[username]) {
        alert('Username already exists!');
        return;
    }

    // Save user credentials
    users[username] = { password, data: generateDataCode() };
    alert('Account created successfully!');
    showLoginForm();
}

// Login function
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (!users[username] || users[username].password !== password) {
        alert('Invalid username or password!');
        return;
    }

    // Show user-specific data
    alert('Login successful! Your data code is: ' + users[username].data);
}

// Show registration form
function showRegisterForm() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('auth-container').querySelector('form').style.display = 'none';
}

// Show login form
function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('auth-container').querySelector('form').style.display = 'block';
}

// Generate a random 100-digit AI-like code
function generateDataCode() {
    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 100; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}