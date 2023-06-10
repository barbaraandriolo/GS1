

let usuarios = []

window.addEventListener("load", () => {
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
});


document.querySelector("#btnBuscar").addEventListener("click", ()=> {
    let Busca = document.querySelector("#Busca").value
    let usuariosFiltrados = usuarios.filter((usuario) =>{
        return usuario.Nome===(Busca.toLowerCase())
    })
    filtrar(usuariosFiltrados)
})

document.querySelector("#btnBuscar").addEventListener("click", ()=> {
    let Busca = document.querySelector("#Busca").value
    let usuariosFiltrados = usuarios.filter((usuario) =>{
        return usuario.NomedaEmpresa===(Busca.toLowerCase())
    })
    filtrar(usuariosFiltrados)
})


document.querySelector("#btnBuscar").addEventListener("click", ()=> {
    let Busca = document.querySelector("#Busca").value
    let usuariosFiltrados = usuarios.filter((usuario) =>{
        return usuario.email.toLowerCase()===(Busca.toLowerCase())
    })
    filtrar(usuariosFiltrados)
})

document.querySelector("#btnBuscar").addEventListener("click", ()=> {
    let Busca = document.querySelector("#Busca").value

    let usuariosFiltrados = usuarios.filter((usuario) =>{
        return usuario.CNPJ===(Busca)
    })
    filtrar(usuariosFiltrados)
})

document.querySelector("#btnBuscar").addEventListener("click", ()=> {
    let Busca = document.querySelector("#Busca").value
    let usuariosFiltrados = usuarios.filter((usuario) =>{
        return usuario.CPF===(Busca)
    })
    filtrar(usuariosFiltrados)
})

document.querySelector("#btnBuscar").addEventListener("click", ()=> {
    let Busca = document.querySelector("#Busca").value

    let usuariosFiltrados = usuarios.filter((usuario) =>{
        return usuario.telefone===(Busca)
    })
    filtrar(usuariosFiltrados)
})

function filtrar(usuarios){
    //alert('ola!');
    //document.querySelector("#Busca").innerHTML = ""
    usuarios.forEach((usuario) =>{
        document.querySelector("#oi").innerHTML 
                    += createCard(usuario)
    })
}

function atualizar(){
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    usuarios.forEach((usuario) =>{
        document.querySelector("#oi").innerHTML 
                    += createCard(usuario)
    })
    document.querySelector("#oi").innerHTML =""
};

function concluir(id){
    let usuarioEncontrado = usuarios.find((usuario) => {
        return usuario.id == id
    })
    usuarioEncontrado.concluida = true
}

function apagar(id){
alert(id)
    usuarios = usuarios.filter((usuario) => {
        return usuario.id != id
    })

    atualizar()
 
}

function concluir(id){
    let usuarioEncontrado = usuarios.find((usuario) => {
        return usuario.id == id
    })
    usuarioEncontrado.concluida = true
    atualizar()
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
                        <p class="card-text">CNPJ: ${usuario.CNPJ||"É uma pessoa física"}</p>
                        <p>
                        <p class="card-text">CPF: ${usuario.CPF||"É uma pessoa jurídica"}</p>
                        <p>
                        <p class="card-text">Email: ${usuario.email}</p>
                        <p>
                        <p class="card-text">Telefone: ${usuario.telefone}</p>

                        <p class="card-text">Custo da despesa: ${calcularDespesa(usuario.consumo).toFixed(2)} R$</p>
                      
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

  function calcularDespesa(qtd){
    return qtd*0.00154
}
  