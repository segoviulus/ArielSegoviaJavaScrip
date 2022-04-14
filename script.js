class Invitado {
    constructor(nombre, apellido, grupo, menus) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.grupo = grupo;
        this.menus = menus;
    }
}

let listaInvitados = []
let formInvitado = document.getElementById('formInv')
let btnMostrarInv = document.getElementById('btnMostrarInv')

// FUNCION VALIDACION FORMULARIO
let validaCampos = () => {
    let nombreValor = nombreInv.value.trim()
    let apellidoValor = apellidoInv.value.trim()  
    let grupoValor = grupoInv.value.trim()  
    let menuValor = menuInv.value.trim()
    // Validacion campo Nombre
  if(nombreValor === '') {
   validaError(nombreInv, 'Ingrese un Nombre')
} else {
validaCorrecto(nombreInv)
}

// Validacion campo Apellido
if(apellidoValor === '') {
validaError(apellidoInv, 'Ingrese el Apellido')
} else {
validaCorrecto(apellidoInv)
}

// Validacion campo Grupo
if(grupoValor === 'Adulto' || grupoValor === 'Menor') {
   validaCorrecto(grupoInv)
} else {
   validaError(grupoInv, 'Ingrese Adulto o Menor')
}

// Validacion campo Menu
if(menuValor === 'Adulto' || menuValor === 'Menor' || menuValor === 'Vegetariano') {
   validaCorrecto(menuInv)
} else {
   validaError(menuInv, 'Ingrese Adulto, Menor o Vegetariano')
}
}
// FUNCION VALIDACION ERROR
const validaError = (input, mensaje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = mensaje
 
    formControl.className = 'formInv-control error input' //clase css error
 
 }
 
 // FUNCION VALIDACION CORRECTO
 const validaCorrecto = (input) => {
    const formControl = input.parentElement
 
    formControl.className = 'formInv-control correcto input' // clase css correcto
 }


formInvitado.addEventListener('submit', (e) => {
    e.preventDefault()
    validaCampos()
    let nombreValor = nombreInv.value.trim()
    let apellidoValor = apellidoInv.value.trim()  
    let grupoValor = grupoInv.value.trim()  
    let menuValor = menuInv.value.trim()

const invitado = new Invitado (nombreValor, apellidoValor, grupoValor, menuValor) // Se crea el invitado

listaInvitados.push(invitado) // Guardo elemento invitado en el array


localStorage.setItem('invitados', JSON.stringify(listaInvitados)) // Guardo en localStorage
formInvitado.reset() // Reseteo el form

swal("Has ingresado un invitado!", "Para ver todos click en Actualizar invitados", "success", {
    button: "OK",
})

})


btnMostrarInv.addEventListener('click', () => {
divMostratInv.innerHTML = ""; //Reinicia el div para mostrar los ultimos valores
listaInvitados.forEach((invitadoEnLista, indice) => {
divMostratInv.innerHTML += `
    <div id="invitado${indice}">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-9">
                <div class="listadoInv">
                    <div class="col-md-4 listadoInvSeccion">
                    <p class="text2">Nombre y Apellido</p>
                    <p class="text1">${indice + 1}.- ${invitadoEnLista.nombre} ${invitadoEnLista.apellido}</p>
                    </div>
                    <div class="col-md-2 listadoInvSeccion">
                    <p class="text2">Grupo</p>
                    <p class="text1">${invitadoEnLista.grupo}</p>
                    </div>
                    <div class="col-md-2 listadoInvSeccion">
                    <p class="text2">Menu</p>
                    <p class="text1">${invitadoEnLista.menus}</p>
                    </div>
                </div>
            </div>
    </div> `
})
})
