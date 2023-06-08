

let usuarios = []

window.addEventListener("load", () => {
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
});




document.querySelector("#btnBuscar").addEventListener("click", ()=> {
    let Busca = document.querySelector("#Busca").value
    let usuariosFiltrados = usuarios.filter((usuario) =>{
        return usuario.email.toLowerCase()===(Busca.toLowerCase())
    })
    filtrar(usuariosFiltrados)
})


function filtrar(usuarios){

    document.querySelector("#Busca").innerHTML = ""
    usuarios.forEach((usuario) =>{
        document.querySelector("#oi").innerHTML 
                    += createCard(usuario)
    })
}


function concluir(id){
    let usuarioEncontrado = usuarios.find((usuario) => {
        return usuario.id == id
    })
    usuarioEncontrado.concluida = true
}


function createCard(usuario){
    let disabled = usuario.concluida ? "disabled" : ""
  
    return `
            <div class="col-lg-3 col-md-6 col-12">
                <div class="card">
                    <div class="card-header">
                        ${usuario.Nome || usuario.NomedaEmpresa}
                    </div>
                    <div class="card-body">
                        <p class="card-text">${usuario.CNPJ||"É uma pessoa física"}</p>
                        <p>
                        <p class="card-text">${usuario.CPF||"É uma pessoa jurídica"}</p>
                        <p>
                        <p class="card-text">${usuario.email}</p>
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
  