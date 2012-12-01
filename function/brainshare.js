var paginas = {
    'cells breathing': '/cv.html',
    'Animals':'cv.html',
    'Cells': 'flujo.html',
    'Heart': 'flujo.html'
};


$('#buscar').click(function(e) {
    e.preventDefault();
    
    var busqueda = $('#busqueda').val();
    
    var pagina = paginas[busqueda.toLowerCase()];
    
    if(typeof pagina != 'undefined') {
       window.location.href = pagina;            
    }
    
    console.log(pagina);
    
});