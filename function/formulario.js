$(document).ready(function() {

    $('#boton-forma').click(function(e) {
       e.preventDefault();
    //$('.formu').validate();
    
    
    //Ejemplo para validar los campos
        var input01_val = new LiveValidation( "input01", { validMessage: "Correct!", wait: 1000} );
        input01_val.add( Validate.Presence,{ failureMessage: "Ingresa tu nombre" } );
        
        var input02_val = new LiveValidation( "input02", { validMessage: "Correct!", wait: 1000} );
        input02_val.add( Validate.Presence,{ failureMessage: "Ingresa tu apellido" } );
    
        var input03_val = new LiveValidation( "input03", { validMessage: "Correct!", wait: 1000 } );
        input03_val.add( Validate.Presence,{ failureMessage: "Ingresa un email" } );
        input03_val.add( Validate.Email,{ failureMessage: "Debe ser un email válido" } );
                
        var select01_val = new LiveValidation( "select01", { validMessage: "Correct!", wait: 1000} );
        select01_val.add( Validate.Presence,{ failureMessage: "Escoge el genero" } );
        
    });
    
    $('#boton-formulario-2').click(function(e) {
        e.preventDefault();
        var password_val = new LiveValidation('input03');
        password_val.add( Validate.Confirmation, { match: 'input02' } );        
    });
});