document.querySelector("#salvar").addEventListener("click", cadastro)

let usuarios = []

window.addEventListener("load", () => {
  usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
  atualizar()
})

function atualizar(){
  document.querySelector("#CPF").innerHTML = ""
  localStorage.setItem("usuarios", JSON.stringify(usuarios))
  usuarios.forEach((usuario) =>{
      document.querySelector("#email").innerHTML 
                  += createCard(usuario)
  })
};

function cadastro(){
  const Nome = document.querySelector("#Nome").value;
  const CPF = document.querySelector("#CPF").value;
  const email = document.querySelector("#email").value;
  const telefone = document.querySelector("#telefone").value;

   const usuario = {
    id: Date.now(),
    Nome,
    CPF,
    email,
    telefone,
  };

  usuarios.push(usuario);

  atualizar();

}

function createCard(usuario){
  let disabled = usuario.concluida ? "disabled" : ""

  return `
          <div class="col-lg-3 col-md-6 col-12">
              <div class="card">
                  <div class="card-header">
                      ${usuario.Nome}
                  </div>
                  <div class="card-body">
                      <p class="card-text">${usuario.CPF}</p>
                      <p>
                          <span class="badge text-bg-warning">${usuario.telefone}</span>
                      </p>
                      <a onClick="concluir(${usuario.id})" href="#" class="btn btn-success ${disabled}">
                          <i class="bi bi-check-lg"></i>
                      </a>
                      <a onClick="apagar(${usuario.id})" href="#" class="btn btn-danger">
                          <i class="bi bi-trash"></i>
                      </a>
                  </div>
              </div> <!-- card -->
          </div> <!-- col -->
  ` //template literals
}

function redirectToForm(type) {
if (type === 'Calcular Despesas') {
  window.location.href = 'Despesas.html';
}
}