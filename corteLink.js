async function Mostrar() {
  let link = document.getElementById('originalUrl').value;
  let texto = document.getElementById('shortenedUrl');

  try {
    const linkEncurtado = await Encurtar(link);
    texto.innerHTML = `Seu link encurtado: <a href="${linkEncurtado}" target="_blank">${linkEncurtado}</a>`;
  } catch (erro) {
    texto.innerHTML = 'Erro ao encurtar o link.';
  }
}

async function Encurtar(link) {
  const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
  const token = 'a116e9bc09f98c1afdcef346e6399053f4b83482';  // Substitua pelo seu token do Bitly

  const resposta = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      long_url: link,
    }),
  });

  const dados = await resposta.json();
  return dados.id;
}