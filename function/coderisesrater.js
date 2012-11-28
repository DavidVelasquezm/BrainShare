(function() {

  StackMob.init({
    appName: "coderise",
    clientSubdomain: "<YOUR SUBDOMAIN>",
    publicKey: "<YOUR PUBLIC KEY>",
    apiVersion: 0
  });

  $('#boton-formulario-2').click(function(e) {
    e.preventDefault();
    
    var UserName = $('#input01').val();
    var Password =  $('#input02').val();
    var optionsCheckbox = $('#optionsCheckbox').val();
    var Profesionalstatus =$('#select01').val();
    var collegeorcompany =$('#input04').val();
    var knowledge =$('#textarea').val();
    var knowledgeenfoqued =$('#focusedInput').val();
    var tellusaboutyourknowledge =$('#textarea1').val();
    var workexperience=$('#textarea2').val();
    
    

    var Coderiser = StackMob.Model.extend({ schemaName: 'formulario2' });
    var entry = new Coderiser({username: UserName, password: Password, profesionalstatus: Profesionalstatus, collegeorcompany: collegeorcompany, knowledge: knowledge, knowledgeenfoqued: knowledgeenfoqued, tellus: tellusaboutyourknowledge, workexperience:workexperience, useranemcheckbox:optionsCheckbox });
    entry.create();

    console.log("Created a coderiser in StackMob server");

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


})();