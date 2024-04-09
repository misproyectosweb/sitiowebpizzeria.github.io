/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global Swal, fetch */

// Acedemos al elemento formulario creado por medio de su id
const formulario = document.querySelector('#frmContacto');

// Se va a escuchar un evento. En este caso, el botón con el que se envían los datos
formulario.addEventListener('submit', (e) => {
    
    // Cancela el evento o la acción predeterminada que pertenece al evento no ocurrirá
    e.preventDefault();
    
    // Se manda a llamar a una función, la cual contiene el mensaje que mostrará al usuario
    email(); 
        
});

function email(){
    
    // La información del formulario la almacenamos en la constante
    const datos = new FormData(formulario);
    
    // Utilizamos fetch() para indicar el lugar donde se enviarán los datos
    // Hacemos referencia a la constante para acceder a la información del formulario
    fetch('enviarCorreo.php',{
        method: "POST",
        body: datos
    })
    
    // Incorporamos una promesas para que la respuesta personalizada se muestre en formato json
    .then(respuesta => respuesta.json())
    
    // Esta promesa realiza una comprobación en el archivo 'enviarCorreo.php' y muestra el mensaje correspondiente
    .then(respuesta => {
        if('exito') {
            Swal.fire({
                icon: 'success',
                imageUrl: 'imgInicio/logoPizza_2.png',        
                imageAlt: 'logo de la pizzería',
                imageWidth: 300,
                imageHeight: 90,
                title: 'Estado del mensaje de correo',
                text: 'Su mensaje se envió correctamente'   
            });                        
        }
        else {
            Swal.fire({
                icon: 'error',
                imageUrl: 'imgInicio/logoPizza_2.png',        
                imageAlt: 'logo de la pizzería',
                imageWidth: 300,
                imageHeight: 90,
                title: 'Estado del mensaje de correo',
                text: 'Su mensaje no ha sido enviado'  
            });
        }
    });    
}