(function() {

  StackMob.init({
    appName: "brain325",
   clientSubdomain: "davidvelasquezm6gmailcom",
   publicKey: "ddb4da8f-5c14-4686-93ce-a02e24218124",
   apiVersion: 0
 });

var BrainSharer = StackMob.Model.extend({ schemaName: 'formulario2' });

$('#boton-formulario-2').click(function(e) {
  e.preventDefault();
  
  var UserName = $('#input01').val();
  var Password =  $('#input02').val();
  var optionsCheckbox = $('#optionsCheckbox').is(':checked');
  var Profesionalstatus = $('#select01').val();
  var collegeorcompany = $('#input04').val();
  var knowledge = $('#textarea').val();
  var workexperience =$('#textarea2').val();
  var firstname = $ ('#input05').val();
  var lastname = $ ('#input06').val();
  var email = $ ('#input07').val();
  var country = $('#input08').val();
  
  var entry = new BrainSharer({username: UserName, password: Password, profesionalstatus: Profesionalstatus, 
    collegeorcompany: collegeorcompany, knowledge: knowledge,workexperience:workexperience, useranemcheckbox:optionsCheckbox, 
    firstname:firstname, lname:lastname, email:email, country:country});
    
  entry.create();

  console.log("Created a BrainSharer in StackMob server");
  alert("your,acount has been creeated, please Sign In");

    /*coderisers = new Coderiser();

    coderisers.fetch({
      success: function(model) {
        console.log(model.toJSON());
      },
      error: function(mode, response) {
        console.log(response);
      }
    });*/

});


})();