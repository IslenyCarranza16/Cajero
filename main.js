//variables provenientes de HTLM

let nombre = document.querySelector('#nombre');
let password = document.querySelector('#exampleInputPassword1');
let formularioEntrada= document.querySelector('#formularioEntrada');
let boton = document.querySelector('#boton');
let mymodal = document.querySelector('#mymodal');
let botonCierre = document.querySelector('#botonCierre');
let opcionesSegundas = document.querySelector('#opcionesSegundas');
let consultarSaldo = document.querySelector('#consultarSaldo');
let ingresarDinero = document.querySelector('#ingresarDinero');
let retirarDinero= document.querySelector('#retirarDinero');
let mymodalsaldo= document.querySelector('#mymodalsaldo');
let mostrarSaldo= document.querySelector('#mostrarSaldo');
let botonCierre2 = document.querySelector('#botonCierre2');
let formIngreseDinero=document.querySelector('#formIngreseDinero');
let valorIngresado = document.querySelector('#valorIngresado');
let alertIngreso = document.querySelector('#alertIngreso');
let nuevoSaldoIngresando= document.querySelector('#nuevoSaldoIngresando');
let botonCierre3 = document.querySelector('#botonCierre3');
let mostrarSaldoIngresando= document.querySelector('#mostrarSaldoIngresando');
let formRetirarDinero= document.querySelector('#formRetirarDinero');
let valorRetirado= document.querySelector('#valorRetirado');
let nuevoSaldoRetirado = document.querySelector('#nuevoSaldoRetirado');
let mostrarSaldoRetirado = document.querySelector('#mostrarSaldoRetirado');
let botonCierre4 = document.querySelector('#botonCierre4');
let botonCierreOpciones=document.querySelector('#botonCierreOpciones');
let backIngreso=document.querySelector('#backIngreso');
let backRetiro=document.querySelector('#backRetiro');
let energenciaIngreso=document.querySelector('#energenciaIngreso');
let botonCierreEmergenciaIngreso=document.querySelector('#botonCierreEmergenciaIngreso');
let AlertaIngreso=document.querySelector('#AlertaIngreso');
let energenciaRetiro=document.querySelector('#energenciaRetiro');
let botonCierreEmergenciaRetiro=document.querySelector('#botonCierreEmergenciaRetiro');
let AlertaRetiro=document.querySelector('#AlertaRetiro');
//Información externa

//clientes

let clientes = [
    { name: "johana", saldo : 900, password:"123"},
    { name: "isleny", saldo : 700, password:"abc"},
    { name: "camilo", saldo : 800, password:"345"},
    { name: "sebastian", saldo : 500, password:"ef3"}
]

// limites de saldos

let saldoMaximo = 1000;
let saldoMinimo=10;

//guardar nombre usurio form
let nombreUsuarioGuardad;



//eventos
//evento click ingreso

formularioEntrada.addEventListener('submit', iniciarCajero);


function iniciarCajero(event){
    event.preventDefault();
    const nombreFormulario = nombre.value;
    const passwordFormulario = password.value;
    if(validarCredenciales(nombreFormulario,passwordFormulario)){
        nombreUsuarioGuardad=nombre.value;
        formularioEntrada.style.display = "none";
        formularioEntrada.reset();   
        opcionesSegundas.style.display = "block";


        
    }
    else{
        mymodal.style.display = "block";
        formularioEntrada.reset();   
    }
    
      
    }

   botonCierre.addEventListener('click', function(){
    mymodal.style.display = "none";
   
   }) 
      


    function validarCredenciales(name, pass){
        return clientes.some(function(cliente){
             return (cliente.name === name )&& (cliente.password === pass)
        } )
        }


        botonCierreOpciones.addEventListener('click', function(){
             opcionesSegundas.style.display = "none";
            formularioEntrada.style.display = "block";
              
           }) 

// evento de consultar el saldo

consultarSaldo.addEventListener('click', consultarSaldoFuncion);

function consultarSaldoFuncion(){
  saldoporUsuario(nombreUsuarioGuardad);
    
}


function saldoporUsuario(nombreUsuario){
 for (let i=0; i<clientes.length; i++){
    if(clientes[i].name === nombreUsuario){
        const saldoActual =clientes[i].saldo;
        mostrarSaldo.textContent = 'Your currently balance is ' + saldoActual;
        mymodalsaldo.style.display = "block";
    }
 }

}

botonCierre2.addEventListener('click', function(){
    mymodalsaldo.style.display = "none";
   
   }) 
   

   // evento para adicionar saldo
   ingresarDinero.addEventListener('click', abrirFormIngresar)

function abrirFormIngresar(){
    opcionesSegundas.style.display = "none";
    formIngreseDinero.style.display = "block";


}


 formIngreseDinero.addEventListener('submit', ingresoDinerosubmit)

 function ingresoDinerosubmit(event){
    event.preventDefault();
    ingresoDinero(nombreUsuarioGuardad);
 }
function ingresoDinero(nombreUsuario){
    const valorConsigadoInt = valorIngresado.value;
    const valorConsigado = parseInt(valorConsigadoInt);
    for (let i=0; i<clientes.length; i++){
        if(clientes[i].name === nombreUsuario){
            const saldoAnterior =clientes[i].saldo;
            const saldoActual = saldoAnterior + valorConsigado;
           
             if(saldoActual> saldoMaximo || saldoActual<saldoMinimo){
            energenciaIngreso.style.display = "block";
            AlertaIngreso.textContent= ` Transaction doesn't allowed. Your balance should between ${saldoMinimo} and ${saldoMaximo}`;
           break
        }
             else{
                clientes[i].saldo=saldoActual;
                mostrarSaldoIngresando.textContent = 'Transacton allowed. Your new balance is ' + saldoActual;
                nuevoSaldoIngresando.style.display = "block";
                formIngreseDinero.reset();   

             }  
           
        }
    }
    formIngreseDinero.reset();   
}

botonCierreEmergenciaIngreso.addEventListener('click', function(){
 
    formIngreseDinero.reset();  
    formIngreseDinero.style.display = "block";
    energenciaIngreso.style.display = "none";
  
   }) 



backIngreso.addEventListener('click', function(){
    formIngreseDinero.style.display = "none";
    opcionesSegundas.style.display = "block";
   
   }) 


botonCierre3.addEventListener('click', function(){
    nuevoSaldoIngresando.style.display = "none";
    formIngreseDinero.style.display = "none";
    opcionesSegundas.style.display = "block";
   
   }) 



   //evento para retirar saldo

   retirarDinero.addEventListener('click', abrirFormRetirar)

   function abrirFormRetirar(){
       opcionesSegundas.style.display = "none";
       formRetirarDinero.style.display = "block";
      
   }


   formRetirarDinero.addEventListener('submit', retirarDinerosubmit)

 function retirarDinerosubmit(event){
    event.preventDefault();
    retiroDinero(nombreUsuarioGuardad);
 }



 function retiroDinero(nombreUsuario){
    const valorRetiradoT = valorRetirado.value;
    for (let i=0; i<clientes.length; i++){
        if(clientes[i].name === nombreUsuario){
            const saldoAnterior =clientes[i].saldo;
            const saldoActual = saldoAnterior - valorRetiradoT;
           
             if(saldoActual> saldoMaximo || saldoActual<saldoMinimo){
                energenciaRetiro.style.display = "block";
                AlertaRetiro.textContent= ` Transaction doesn't allowed. Your balance should between ${saldoMinimo} and ${saldoMaximo}`;
               break
             }
             else{
                clientes[i].saldo=saldoActual;
                mostrarSaldoRetirado.textContent = 'Transacton allowed. Your new balance is ' + saldoActual;
                nuevoSaldoRetirado.style.display = "block";
                formRetirarDinero.reset();  
             }  
           
        }
    }

} 


botonCierreEmergenciaRetiro.addEventListener('click', function(){
 
    formRetirarDinero.reset();  
    formRetirarDinero.style.display = "block";
    energenciaRetiro.style.display = "none";
  
   }) 

backRetiro.addEventListener('click', function(){
    formRetirarDinero.style.display = "none";
    opcionesSegundas.style.display = "block";
   
   }) 





botonCierre4.addEventListener('click', function(){
    nuevoSaldoRetirado.style.display = "none";
    formRetirarDinero.style.display = "none";
    opcionesSegundas.style.display = "block";
   
   }) 

