document.addEventListener('click', function(event) {
    var alvo = event.target;

    // Verifica se o clique foi no texto "Ver telefone 1"
    if (alvo.id === 'vertelefone11') {
        var balao = document.getElementById('balaotelefone1');
        balao.classList.toggle('mostrar'); // Adiciona ou remove a classe 'mostrar'
    } else {
        document.getElementById('balaotelefone1').classList.remove('mostrar');
    }

    // Verifica se o clique foi no texto "Ver telefone 2"
    if (alvo.id === 'vertelefone2') {
        var balao = document.getElementById('balaotelefone2');
        balao.classList.toggle('mostrar'); // Adiciona ou remove a classe 'mostrar'
    } else {
        document.getElementById('balaotelefone2').classList.remove('mostrar');
    }
});

document.getElementById('cpf').addEventListener('input', function() {
    var cpf = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cpf.length > 3) {
        cpf = cpf.substring(0, 3) + '.' + cpf.substring(3);
    }
    if (cpf.length > 7) {
        cpf = cpf.substring(0, 7) + '.' + cpf.substring(7);
    }
    if (cpf.length > 11) {
        cpf = cpf.substring(0, 11) + '-' + cpf.substring(11);
    }
    this.value = cpf;
});

document.getElementById('telefone').addEventListener('input', function() {
    var telefone = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (telefone.length > 0 && telefone.length < 3) {
        telefone = '(' + telefone;
    } else if (telefone.length >= 3 && telefone.length < 7) {
        telefone = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2);
    } else if (telefone.length >= 7 && telefone.length < 11) {
        telefone = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 6) + '-' + telefone.substring(6);
    } else if (telefone.length >= 11) {
        telefone = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 7) + '-' + telefone.substring(7);
    }
    this.value = telefone;

});

const textarea = document.getElementById("assunto");

textarea.addEventListener("click", () => {
  if (textarea.placeholder === "Digite o assunto") {
    textarea.placeholder = ""; // Remove placeholder text
  }
});

function mostrarAlertaSucesso() {
    // Criar elemento div para o alerta
    const divAlerta = document.createElement("div");
    divAlerta.classList.add("alerta-sucesso"); // Adicionar classe CSS

    // Criar texto do alerta
    const textoAlerta = document.createTextNode("Sua mensagem foi enviada com sucesso!");
    divAlerta.appendChild(textoAlerta);

    // Adicionar o alerta ao corpo da página
    document.body.appendChild(divAlerta);

    // Animação de entrada
    divAlerta.classList.add("mostrar");

    // Remover o alerta após 5 segundos
    setTimeout(() => {
        divAlerta.classList.remove("mostrar");
        setTimeout(() => {
            divAlerta.remove(); // Remover da página
        }, 500); // Tempo de transição
    }, 5000); // Tempo de espera
}

document.getElementById("enviar-mensagem").addEventListener("click", mostrarAlertaSucesso);

function calcular() {
    // Obter os valores dos inputs
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let valor3 = parseFloat(document.getElementById("valor3").value);
    
    // Calcular o valor desconhecido
    let valor4 = (valor3 * valor2) / valor1;
    
    // Exibir o resultado no quadrado de resultado
    let resultadoDiv = document.querySelector('.resultado');
    resultadoDiv.innerText =  valor4;
}

document.getElementById('valor3').addEventListener('input', function() {
    if (this.value.length > 6) {
        this.value = this.value.slice(0, 6);
    }
});

document.getElementById('valor1').addEventListener('input', function() {
    if (this.value.length > 6) {
        this.value = this.value.slice(0, 6);
    }
});

document.getElementById('valor2').addEventListener('input', function() {
    if (this.value.length > 6) {
        this.value = this.value.slice(0, 6);
    }
});

    var btnAbrirModal = document.getElementById("btnAbrirModal");
    var modal = document.getElementById("modal");
    
    // Adiciona um evento de clique ao botão para abrir o modal
    btnAbrirModal.addEventListener("click", function() {
      modal.style.display = "block";
    });
    
    // Captura o botão de fechar e adiciona um evento de clique para fechar o modal
    var fecharModal = document.querySelector(".fechar");
    fecharModal.addEventListener("click", function() {
      modal.style.display = "none";
    });
    
    // Fecha o modal se o usuário clicar fora da imagem
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });


    const img = document.getElementById("img-zoom-out");

    // Aplicando zoom in inicial
    img.style.transform = "scale(3.0)";
    
    // Definindo tempo de espera para o zoom out
    setTimeout(() => {
      // Aplicando zoom out para tamanho real da imagem
      img.style.transform = "scale(1.0)";
    }, 100); // Tempo em milissegundos (1000 = 1 segundo)
    
    // Opcional: Adicionando transição ao zoom out
    img.style.transition = "transform 10s ease-in-out";
    

    document.addEventListener('click', function(event) {
        var alvo = event.target;
    
        // Verifica se o clique foi no texto "Ver telefone 1"
        if (alvo.id === 'vertelefone11') {
            var balao = document.getElementById('balaotelefone1');
            balao.style.display = (balao.style.display === 'block') ? 'none' : 'block';
        } else {
            document.getElementById('balaotelefone1').style.display = 'none';
        }
    
        // Verifica se o clique foi no texto "Ver telefone 2"
        if (alvo.id === 'vertelefone2') {
            var balao = document.getElementById('balaotelefone2');
            balao.style.display = (balao.style.display === 'block') ? 'none' : 'block';
        } else {
            document.getElementById('balaotelefone2').style.display = 'none';
        }
    });
    
    document.getElementById('cpf').addEventListener('input', function() {
        var cpf = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cpf.length > 3) {
            cpf = cpf.substring(0, 3) + '.' + cpf.substring(3);
        }
        if (cpf.length > 7) {
            cpf = cpf.substring(0, 7) + '.' + cpf.substring(7);
        }
        if (cpf.length > 11) {
            cpf = cpf.substring(0, 11) + '-' + cpf.substring(11);
        }
        this.value = cpf;
    });
    
    document.getElementById('telefone').addEventListener('input', function() {
        var telefone = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (telefone.length > 0 && telefone.length < 3) {
            telefone = '(' + telefone;
        } else if (telefone.length >= 3 && telefone.length < 7) {
            telefone = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2);
        } else if (telefone.length >= 7 && telefone.length < 11) {
            telefone = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 6) + '-' + telefone.substring(6);
        } else if (telefone.length >= 11) {
            telefone = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 7) + '-' + telefone.substring(7);
        }
        this.value = telefone;
    
    });
    
    function limparPlaceholder(elemento) {
        if (elemento.value === elemento.getAttribute('placeholder')) {
            elemento.value = '';
        }
    }
    
    function restaurarPlaceholder(elemento) {
        if (elemento.value === '') {
            elemento.value = elemento.getAttribute('placeholder');
        }
    }
    
    function calcular() {
        // Obter os valores dos inputs
        let valor1 = parseFloat(document.getElementById("valor1").value);
        let valor2 = parseFloat(document.getElementById("valor2").value);
        let valor3 = parseFloat(document.getElementById("valor3").value);
        
        // Calcular o valor desconhecido
        let valor4 = (valor3 * valor2) / valor1;
        
        // Exibir o resultado no quadrado de resultado com uma casa decimal
        let resultadoDiv = document.querySelector('.resultado');
        resultadoDiv.innerText =  valor4.toFixed(1);
    }
    

    html2canvas(document.querySelector("#capture"), { 
        useCORS: true,
        allowTaint: true
    }).then(canvas => {
        // ...
    });
    
    document.getElementById("botao-download").addEventListener("click", function() {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            // Criar link de download
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png"); // Converte em PNG
            link.download = "captura.png";
            link.click();
        });
    });


    ///menu mobile


    const menuBurguer = document.querySelector('.menu-burguer');
    const navMobile = document.querySelector('.navmobile');
    const fecharMenu = document.querySelector('#fechar-menu');
    
    menuBurguer.addEventListener('click', () => {
        navMobile.classList.toggle('active');
    });
    
    fecharMenu.addEventListener('click', () => {
        navMobile.classList.remove('active');
    });