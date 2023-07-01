document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan pengiriman form

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Lakukan validasi login
    if (username === 'admin' && password === '12345') {
        // Redirect ke halaman home setelah login berhasil
        window.location.href = 'home.html';
    } else {
        alert('Username atau password salah!');
    }
});
