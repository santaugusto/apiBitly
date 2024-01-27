// Seu JavaScript (cadastro.js)
document.getElementById("Cadastrar").addEventListener("click", Cadastrar);
async function Cadastrar() {
    const nomeInput = document.getElementById('nome').value;
    const emailInput = document.getElementById('email').value;
    const senhaInput = document.getElementById('senha').value;
    const confirmarSenhaInput = document.getElementById('confirmarSenha').value;

    const dominios = [
        '@gmail.com',
        '@hotmail.com',
        '@outlook.com',
        '@live.com',
        '@yahoo.com',
        '@yahoo.com.br',
        '@icloud.com',
        '@mac.com'
    ];

    function verificaDominio(email) {
        for (const dominio of dominios) {
            if (email.includes(dominio)) {
                return true; // A string contém um dos domínios
            }
        }
        return false; // A string não contém nenhum dos domínios
    }

    // Verificar se o e-mail contém algum dos domínios
    if (verificaDominio(emailInput)) {
        // Verificar se a senha e a confirmação de senha são iguais
        if (senhaInput === confirmarSenhaInput) {
       
            await localStorage.setItem('cadastroNome', nomeInput);
            await localStorage.setItem('cadastroEmail', emailInput);
            await localStorage.setItem('cadastroSenha', senhaInput);
            
            // Redirecionar para a página "encurtador.html" apenas se o domínio e as senhas forem válidos
            window.location.href = 'login.html';
        } else {
            alert('As senhas não coincidem. Por favor, digite novamente.');
        }
    } else {
        // Se o domínio não for válido, pode exibir uma mensagem ou tomar outra ação
        alert('Por favor, use um e-mail com um domínio válido.');
    }
}

