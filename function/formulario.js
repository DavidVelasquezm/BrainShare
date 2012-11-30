$(document).ready(function() {

    $('#boton-forma').click(function(e) {
       e.preventDefault();
    //$('.formu').validate();
    
    
    //Ejemplo para validar los campos
        var input01_val = new LiveValidation( "input01", { validMessage: "Correct!", wait: 1000 } );
        input01_val.add( Validate.Presence,{ failureMessage: "Insert Your Name" } );
        
        var input02_val = new LiveValidation( "input02", { validMessage: "Correct!", wait: 1000} );
        input02_val.add( Validate.Presence,{ failureMessage: "Insert Your LastName" } );
    
        var input07_Val = new LiveValidation( "input07", { validMessage: "Correct!", wait: 1000 } );
        input07_Val.add( Validate.Presence,{ failureMessage: "Insert Your E-mail" } );
        input07_Val.add( Validate.Email,{ failureMessage: "Must Be a Valid E-mail" } );
                
        var select01_val = new LiveValidation( "select01", { validMessage: "Correct!", wait: 1000} );
        select01_val.add( Validate.Presence,{ failureMessage: "Choose A Genre" } );
        
    });
    
    $('#boton-formulario-2').click(function(e) {
        e.preventDefault();
          //$('.formu').validate();
          
        var password_val = new LiveValidation('input03');
        password_val.add( Validate.Confirmation, { match: 'input02' } );   
        
        var input01_val = new LiveValidation( "input01", { validMessage: "Correct!", wait: 1000 } );
        input01_val.add( Validate.Presence,{ failureMessage: "Insert a Username" } );
        
        var input01_val = new LiveValidation( "input02", { validMessage: "Correct!", wait: 1000 } );
        input01_val.add( Validate.Presence,{ failureMessage: "Insert a Password" } );
        
        var input01_val = new LiveValidation( "input03", { validMessage: "Correct!", wait: 1000 } );
        input01_val.add( Validate.Presence,{ failureMessage: "Insert a Passwords" } );
        
         var input01_val = new LiveValidation( "input04", { validMessage: "Correct!", wait: 1000 } );
        input01_val.add( Validate.Presence,{ failureMessage: "Please put The Required Information" } );
        
        var input01_val = new LiveValidation( "textarea", { validMessage: "Correct!", wait: 1000 } );
        input01_val.add( Validate.Presence,{ failureMessage: "Insert a valid Username" } );
        
        var input01_val = new LiveValidation( "textarea1", { validMessage: "Correct!", wait: 1000 } );
        input01_val.add( Validate.Presence,{ failureMessage: "Insert a valid U" } );
        
        var input01_val = new LiveValidation( "textarea", { validMessage: "Correct!", wait: 1000 } );
        input01_val.add( Validate.Presence,{ failureMessage: "Insert a valid Username" } );
    });
    
    
});