// register-script.js

// Fungsi deklarasi untuk membuat objek pengguna
function createUser(username, email, password) {
    return {
        username: username,
        email: email,
        password: password
    };
}

// Fungsi untuk menangani submit form
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mendapatkan nilai dari input form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Membuat objek pengguna
    const user = createUser(username, email, password);

    // Menampilkan objek pengguna ke dalam HTML
    const objectDisplay = document.getElementById('objectDisplay');
    objectDisplay.innerHTML = `
        <h2>Data Pengguna:</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Password:</strong> ${user.password}</p>
    `;
});
