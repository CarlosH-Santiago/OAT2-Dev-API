// ==========================================
// LÓGICA DA POKÉAPI (MÉTODO GET)
// ==========================================

async function searchPokemon() {

    // Pega o valor do input e converte para minusculo.
    const input = document.getElementById("poke-busca").value.toLowerCase();
    const telaImg = document.getElementById("poke-img");
    const telaTexto = document.getElementById("poke-tela");

    if (!input) {
        alert("Por favor, digite um nome de pokémon");
        return;
    }

    try {
        // Efeito de carregando
        telaImg.style.opacity = 0.5;

        // Fetch get - busca na api
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        // Tratamento de erro caso a api retorne um status http diferente de 200
        if(!response.ok) {
            throw new Error('Pokémon não encontrado!');
        }

        // Gravando dados do response em um json
        const data = await response.json();

        // Manipulando o DOM para exibir os dados

        // Atualizando imagem
        telaImg.src = data.sprites.front_default || data.sprites.other['official-artwork'].front_default;
        telaImg.style.opacity = 1;

        // Cria o texto com informações, data.types é um array, usamos map para pegar os nomes
        const tipos = data.types.map(t => t.type.name).join(', ');

        // Inserindo no html
        let infoParagrafo = document.getElementById('poke-info');
        if(!infoParagrafo) {
            infoParagrafo = document.createElement('p');
            infoParagrafo.id = 'poke-info';
            infoParagrafo.className = 'text-center mt-2 fw-bold';
            telaTexto.appendChild(infoParagrafo);
        }

        infoParagrafo.innerHTML = `
        #${data.id} ${data.name.toUpperCase()} <br>
        <span class="badge bg-secondary">${tipos}</span>
        `;
        
    } catch (error) {
        console.error(error);
        alert("Erro: Pokémon não encontrado! Verifique o nome.");
        telaImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
        telaImg.style.opacity = 1;
    }
}

// ==========================================
// LÓGICA DA REQRES API (POST, PUT, DELETE)
// ==========================================

// URL Correta da API
const REQRES_URL = 'https://reqres.in/api/users';

// Função auxiliar para atualizar o DOM do cartão do treinador
function updateTrainerCard(titulo, dados, cor) {
    // ID Correto do elemento
    const divResultado = document.getElementById('resultado-treinador');

    divResultado.classList.remove('d-none');
    divResultado.style.borderLeft = `5px solid ${cor}`;

    // Style CSS Correto
    divResultado.innerHTML = `
        <h6 style="color: ${cor}"><strong>${titulo}</strong></h6>
        <pre class="bg-dark text-light p-2 rounded small">${JSON.stringify(dados, null, 2)}</pre>
        <small class="text-muted">Status da requisição: Sucesso</small>
    `;
}

// 1. CRIAR (POST)
async function createTrainner() {
    const name = document.getElementById('nome').value;
    const job = document.getElementById('job').value;

    if(!name || !job) return alert("Preencha os campos!");

    try {
        const response = await fetch(REQRES_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1' // <-- CORREÇÃO DA API KEY
            },
            body: JSON.stringify({ name: name, job: job})
        });

        // Lógica correta para processar a resposta
        const data = await response.json();
        
        // Se a API retornar um erro, mostre no alerta
        if(data.error) {
           throw new Error(data.error);
        }

        updateTrainerCard("Treinador Criado (POST)", data, 'green');

    } catch (error) {
        console.error("Erro no POST:", error);
        alert("Erro ao criar Treinador: " + error.message);
    }
}

// 2. EDITAR (PUT)
async function editTrainner() {
    const nome = document.getElementById('nome').value;
    const job = document.getElementById('job').value;
    
    // Simulando edição do usuário ID 2
    try {
        const response = await fetch(`${REQRES_URL}/2`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1' // <-- CORREÇÃO DA API KEY
            },
            body: JSON.stringify({ name: nome, job: job })
        });

        const data = await response.json();
        updateTrainerCard("Treinador Atualizado (PUT)", data, 'orange');

    } catch (error) {
        console.error(error);
    }
}

// 3. DELETAR (DELETE)
async function deleteTrainner() {
    try {
        const response = await fetch(`${REQRES_URL}/2`, {
            method: 'DELETE',
            headers: {
                'x-api-key': 'reqres-free-v1' // <-- CORREÇÃO DA API KEY
            }
        });

        if (response.status === 204) {
            const divResultado = document.getElementById('resultado-treinador');
            divResultado.classList.remove('d-none');
            divResultado.innerHTML = `
                <div class="alert alert-danger">
                    <strong>Treinador Deletado (DELETE)</strong><br>
                    O servidor retornou status 204 (Sem Conteúdo).
                </div>
            `;
            // Limpa os campos
            document.getElementById('nome').value = '';
            document.getElementById('job').value = '';
        }

    } catch (error) {
        console.error(error);
    }
}