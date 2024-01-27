// login.js
function fazerLogin() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const email = localStorage.getItem('cadastroEmail');
    const senha = localStorage.getItem('cadastroSenha');
    // Simulação de lógica de login
    if (usernameInput === email && passwordInput === senha) {
        alert('Login bem-sucedido!');
        window.location.href = 'encurtador.html';

        // Aqui você pode redirecionar para outra página ou realizar outras ações após o login
    } else {
        alert('Usuário ou senha inválidos. Tente novamente.');
    }
}
