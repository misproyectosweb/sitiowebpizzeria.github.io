/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function(){
    
    //Menu responsivo
    //Calculamos el ancho de la página
    var ancho = $(window).width(),
        enlaces = $('#navbarNav'),
        botonMenu = $('#btnMenu'),
        icono = $('#btnMenu .icono');

    //Agregamos un condicional para comprobar si actualmente la página se encuentra en un tamaño menor
    //a 768px, se procede a ocultar los enlaces
    if(ancho < 850){
        enlaces.hide();        
        icono.addClass('bi-list');
    }

    //Cuando el usuario pulse sobre el botón del menú (barras), se ejecuta una función y se despliega
    //mostrando sus opciones y el icono cambia a una 'X'. Cuando se pulsa sobre el botón 'X' se cambia
    //al icono de barras    
    botonMenu.on('click', function(){
       enlaces.slideToggle();                     
       icono.toggleClass('bi-list');
       icono.toggleClass('bi-x');
    });

    //Accedemos al objeto de la ventana y ejecutamos la función cada vez que se detecta un cambio en el
    //tamaño
    $(window).on('resize', function(){
        
       //Pregunta por el tamaño del ancho de la ventana que está actualmente
       if($(this).width() > 850) {
           enlaces.show();                      
           icono.addClass('bi-x');
           icono.removeClass('bi-list');
       }
       else {
           enlaces.hide();                      
           icono.addClass('bi-list');
           icono.removeClass('bi-x');
       }
    });
});