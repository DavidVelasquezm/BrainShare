(function() {

 StackMob.init({
    appName: "brain325",
    clientSubdomain: "davidvelasquezm6gmailcom",
    publicKey: "ddb4da8f-5c14-4686-93ce-a02e24218124",
    apiVersion: 0
});
});
  $('#boton-formulario-2').click(function(e) {
    e.preventDefault();
    
    var UserName = $('#input01').val();
    var Password =  $('#input02').val();
    var Coderiser = StackMob.Model.extend({ schemaName: 'formulario2' }); 
    var optionsCheckbox = $('#optionsCheckbox').val();
    var Profesionalstatus =$('#select01').val();
    var collegeorcompany =$('#input04').val();
    var knowledge =$('#textarea').val();
    var knowledgeenfoqued =$('#focusedInput').val();
    var tellusaboutyourknowledge =$('#textarea1').val();
    var workexperience=$('#textarea2').val();
    
    

    var Coderiser = StackMob.Model.extend({ schemaName: 'formulario2' });
    var entry = new BrainSharer({username: UserName, password: Password, profesionalstatus: Profesionalstatus, collegeorcompany: collegeorcompany, knowledge: knowledge, knowledgeenfoqued: knowledgeenfoqued, tellus: tellusaboutyourknowledge, workexperience:workexperience, useranemcheckbox:optionsCheckbox });
    entry.create();

    console.log("Created a coderiser in StackMob server");
    alarm ("user created, please sign in ")
    coderisers = new Coderiser();

    coderisers.fetch({
      success: function(model) {
        console.log(model.toJSON());
      },
      error: function(mode, response) {
        console.log(response);
      }
    });

  });

