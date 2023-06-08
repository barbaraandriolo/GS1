

// funções para os botões que levam o usuário ao respectivo formulário
  function redirectToForm(type) {

    if (type === 'Doméstico') {
        window.location.href = 'Doméstico.html';
    } else if (type === 'Corporativo') {
        window.location.href = 'Corporativo.html';
    } else if (type === 'Calcular Despesas') {
        window.location.href = 'Despesas.html';
    }
}
