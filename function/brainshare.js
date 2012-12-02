var paginas = {
    'cells breathing': 'pagina.html' ;
    'animals': 'pagina.html' ;
    'Cells': 'pagina.html' ;
    'Heart': 'pagina.html' ;
    'cells breathing': 'pagina.html' ;
    'Animals':'pagin.html'
    'Cells':'pagina.html' ;
    'Heart':'pagina.html' ;
    'Math':'pagina.html' ;
    'Baldor Algebra':'pagina.html';
    'Algorithms': 'pagina.html';
    'factorization': 'pagina.html';
    'Límite de una función': 'pagina.html';
    'Honorificus calculus': 'pagina.html';
    'Systems of linear equations': 'pagina.html';
    'physics': 'pagina.html';
    'String theory': 'pagina.html';
    'Fall': 'pagina.html';
    'Units Transformation': 'pagina.html';
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